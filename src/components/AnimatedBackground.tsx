/**
 * AnimatedBackground - Premium subtle gradient animation
 *
 * Features:
 * - Slow-moving gradient background (15s animation)
 * - Subtle, non-distracting colors (gray/blue tones)
 * - Fixed positioning to stay behind content
 * - Low opacity for minimal aesthetic enhancement
 *
 * Customization:
 * - Adjust gradient colors in the className
 * - Change animation speed in global.css (animate-gradient)
 * - Modify opacity for more/less prominence
 */
export function AnimatedBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 opacity-30"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-50 animate-gradient" />
    </div>
  )
}
