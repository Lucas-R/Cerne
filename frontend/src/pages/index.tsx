import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
    head: () => ({
        meta: [
            {
                title: "Cerne | Início"
            }
        ]
    }),
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/"!</div>
}
