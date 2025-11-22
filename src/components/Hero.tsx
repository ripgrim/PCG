/**
 * Hero - Main landing section with name, role, and primary CTA
 *
 * Layout:
 * - Centered vertically and horizontally
 * - Large, bold name with generous spacing
 * - Subtitle with role/tagline
 * - Prominent CTA button
 *
 * Responsive:
 * - Text scales down on mobile (text-4xl → text-6xl on md+)
 * - Padding adjusts for mobile vs desktop
 * - Max-width keeps content readable on large screens
 *
 * Customization:
 * - Replace PORTFOLIO_URL with your actual portfolio link
 * - Update name, role, and tagline text
 * - Adjust accent color in tailwind.config.js
 */

const PORTFOLIO_URL = 'https://your-portfolio-url.com' // ← REPLACE THIS

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 py-20">
      <div className="w-full max-w-4xl text-center">
        {/* Name - Large, bold, minimal */}
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-gray-900 md:text-7xl">
          Your Name
        </h1>

        {/* Role/Tagline - Subtle, smaller */}
        <p className="mb-12 text-lg text-gray-600 md:text-xl">
          Creative Director & Brand Architect
        </p>

        {/* Primary CTA - The only main action */}
        <a
          href={PORTFOLIO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-accent px-10 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:bg-accent-hover hover:shadow-xl hover:scale-105"
        >
          View Portfolio
        </a>

        {/* Optional: Subtle helper text */}
        <p className="mt-8 text-sm text-gray-400">
          Explore my work in brand development, design systems, and creative direction
        </p>
      </div>
    </section>
  )
}
