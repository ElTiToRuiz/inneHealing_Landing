// src/pages/api/webhook.ts
import type { APIRoute } from "astro"
import Stripe from "stripe"
import { createClient } from "@supabase/supabase-js"

export const prerender = false

// Stripe client
const stripe = new Stripe(import.meta.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-04-30.basil',
})

// Supabase client con service role
const supabase = createClient(
  import.meta.env.PUBLIC_SUPABASE_URL!,
  import.meta.env.SUPABASE_SERVICE_ROLE_KEY!
)

export const POST: APIRoute = async ({ request }) => {
  console.log("🔔 Webhook received:", request.headers.get("stripe-signature"))
  const rawBody = await request.text()
  const sig = request.headers.get("stripe-signature")!
  const webhookSecret = import.meta.env.STRIPE_WEBHOOK_SECRET!

  let event: Stripe.Event

  try {

    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret)
  } catch (err) {
    console.error("❌ Webhook verification failed:", err)
    return new Response("Invalid signature", { status: 400 })
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session

    const email = session.customer_details?.email
    const name = session.customer_details?.name
    const amount = session.amount_total ? session.amount_total / 100 : 0
    const currency = session.currency
    const status = session.payment_status
    const stripe_customer_id = session.customer?.toString()
    const stripe_payment_intent = session.payment_intent?.toString()
    const created_at = new Date(session.created * 1000)

    if (!email || !currency || !status) {
      console.error("❌ Missing essential fields from Stripe session")
      return new Response("Bad request", { status: 400 })
    }

    console.log("✅ Stripe session:", {
      email,
      name,
      amount,
      currency,
      status,
      stripe_customer_id,
      stripe_payment_intent,
    })
    const { error } = await supabase.from("purchases").insert([
      {
        email,
        name,
        amount,
        currency,
        payment_status: status,
        stripe_customer_id,
        stripe_payment_intent,
        created_at,
      },
    ])

    if (error) {
      console.error("❌ Supabase insert failed:", error)
      return new Response("Insert error", { status: 500 })
    }

    console.log("✅ Purchase saved for:", email)
  }

  return new Response("OK", { status: 200 })
}
