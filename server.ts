import { rezetero } from "./agent.ts";

Deno.serve({ port:8001 }, async (req) => {
  if (req.method === "POST") {
    try {
      const body = await req.json();
      const placeholder = await rezetero(body.text);
      return new Response(`${placeholder}`, { status: 200 });
    } catch (e) {
      return new Response("Error " + e, { status: 500 });
    }
  }
  return new Response("Only POST supported", { status: 405 });
});
  

  