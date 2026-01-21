import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/social/')({
    head: () => ({
        meta: [
            {
                title: "Cerne | Social"
            }
        ]
    }),
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
        <div className='w-full'>
            <h6 className="text-2xl text-muted"> Bem vindo </h6>
            <p className="font-semibold">Lucas Rodrigues</p>
        </div>
        <div className='w-full h-80 mb-4 bg-amber-900'></div>
        <div className='w-full h-80 mb-4 bg-amber-900'></div>
        <div className='w-full h-80 mb-4 bg-amber-900'></div>
        <div className='w-full h-80 mb-4 bg-amber-900'></div>
        <div className='w-full h-80 mb-4 bg-amber-900'></div>
        <div className='w-full h-80 mb-4 bg-amber-900'></div>
        <div className='w-full h-80 mb-4 bg-amber-900'></div>
    </>
  )
}
