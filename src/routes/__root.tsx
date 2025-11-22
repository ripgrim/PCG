import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

/**
 * Root layout for the entire app
 * - Sets up consistent background and layout structure
 * - TanStack Router will inject child routes via <Outlet />
 * - Devtools only appear in development
 */
export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen w-full">
      {/* Child routes render here */}
      <Outlet />

      {/* Only show devtools in development */}
      {import.meta.env.DEV && <TanStackRouterDevtools />}
    </div>
  ),
})
