/**
 * HighlightsRow - Micro-highlights showing 3 key areas
 *
 * Design:
 * - Small pill-style cards with minimal styling
 * - Clean borders and subtle hover effects
 * - Responsive grid that stacks on mobile
 *
 * Responsive:
 * - Single column on mobile
 * - Three columns on tablet+ (md:grid-cols-3)
 *
 * Customization:
 * - Update the highlights array with your areas of focus
 * - Change colors, icons, or add emojis
 * - Adjust spacing and sizing as needed
 */

interface Highlight {
  id: string
  title: string
  description: string
}

const highlights: Highlight[] = [
  {
    id: '1',
    title: 'Clothing Brand',
    description: 'Contemporary fashion & streetwear',
  },
  {
    id: '2',
    title: 'Creative Direction',
    description: 'Visual identity & brand strategy',
  },
  {
    id: '3',
    title: 'Design Systems',
    description: 'Scalable frameworks & components',
  },
]

export function HighlightsRow() {
  return (
    <section className="relative px-6 py-16">
      <div className="mx-auto w-full max-w-5xl">
        {/* Grid: 1 column on mobile, 3 on tablet+ */}
        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((highlight) => (
            <div
              key={highlight.id}
              className="group rounded-2xl border border-gray-200 bg-white/50 px-6 py-8 text-center backdrop-blur-sm transition-all duration-200 hover:border-accent hover:shadow-md"
            >
              {/* Title */}
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                {highlight.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
