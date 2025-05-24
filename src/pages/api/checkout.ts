// src/pages/api/checkout.ts
import { stripe } from '@/lib/stripe';
import type { APIRoute } from 'astro'

// enable astro server-side rendering
export const prerender = false

const AMOUNT = import.meta.env.AMOUNT
const amount = parseInt(AMOUNT, 10) || 2000

export const POST: APIRoute = async ({ redirect }) => {
	try {
		const session = await stripe.checkout.sessions.create({
			mode: "payment",
			payment_method_types: ["card"],
			customer_creation: "always",
			line_items: [
				{
				price_data: {
					currency: "usd",
					product_data: {
					name: "The Inner Shift Challenge",
					},
					unit_amount: amount * 100, 
				},
				quantity: 1,
				},
			],
			success_url: "https://www.theinnershiftchallenge.com/thanks?session_id={CHECKOUT_SESSION_ID}",
			cancel_url: "https://www.theinnershiftchallenge.com/",
		});

		return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
	} catch (err) {
		console.error("🔥 Stripe error:", err);
		return new Response("Error creating checkout session", { status: 500 });
	}
};