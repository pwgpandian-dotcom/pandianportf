// Safe fallbacks — portfolio does not use Sanity at runtime.
// These values prevent module-init throws on Vercel/Netlify when env vars are absent.
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01";

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
