import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
    head: () => ({
        meta: [
            {
                title: "Cerne | Entrar"
            }
        ]
    }),
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>Login</>
  )
}
