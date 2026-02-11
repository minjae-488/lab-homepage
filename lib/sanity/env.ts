export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-02-10'

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

// Use a valid but dummy placeholder to pass build validation if env var is missing
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '73iofnnm';

export const useCdn = false
