import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json",
};

export const handler: Handler = async (event: HandlerEvent, _context: HandlerContext) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: cors };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method not allowed" }), headers: cors };
  }

  let email: string;
  try {
    const body =
      event.headers["content-type"]?.includes("application/json")
        ? JSON.parse(event.body || "{}")
        : new URLSearchParams(event.body || "");
    email = typeof body === "object" && "email" in body ? body.email : body.get?.("email");
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid request" }), headers: cors };
  }

  if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Valid email required" }),
      headers: cors,
    };
  }

  const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT || "https://formspree.io/f/xaqdkdzw";

  try {
    const res = await fetch(formspreeEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ email }),
    });
    if (!res.ok) {
      const text = await res.text();
      console.error("Formspree error:", res.status, text);
      throw new Error("Formspree failed");
    }
  } catch (err) {
    console.error("Formspree error:", err);
    return {
      statusCode: 502,
      body: JSON.stringify({ error: "Subscription service unavailable" }),
      headers: cors,
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true }),
    headers: cors,
  };
};
