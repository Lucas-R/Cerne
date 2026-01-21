import Default from '@/Templates/Default'
import { createRootRoute, HeadContent, Outlet } from '@tanstack/react-router'

const RootLayout = () => (
  <>
    <HeadContent />
    <Default>
        <Outlet />
    </Default>
  </>
)

export const Route = createRootRoute({ component: RootLayout })