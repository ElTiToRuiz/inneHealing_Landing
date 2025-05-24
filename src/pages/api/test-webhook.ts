import type { APIRoute } from "astro"

export const prerender = false

export const POST: APIRoute = async () => {
  console.log("✅ Test Webhook ejecutado")
  return new Response("OK desde test", { status: 200 })
}
