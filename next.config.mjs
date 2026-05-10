/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
  },
  webpack: (config) => {
    // Sanity v5 imports useEffectEvent from react, but React 19 stable doesn't
    // export it as a named export. Downgrade the missing-export check from an
    // error to a warning so the build succeeds; the runtime polyfill in
    // StudioClient.tsx patches React.useEffectEvent before Sanity calls it.
    config.module.parser = {
      ...config.module.parser,
      javascript: {
        ...(config.module.parser?.javascript ?? {}),
        exportsPresence: 'warn',
      },
    }
    return config
  },
}

export default nextConfig
