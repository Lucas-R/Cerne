import useFetch from '@/hooks/useFetch'
import { ChatBubbleLeftRightIcon, ExclamationCircleIcon, HeartIcon, ShareIcon } from '@heroicons/react/24/outline'
import { createFileRoute, Link } from '@tanstack/react-router'

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
  const { data, error, isLoading } = useFetch({ url: "posts" });

  if(error) return <p> Error </p>;

  if(isLoading) return <p> Carregando </p>;

  console.log(data);

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2 grid grid-cols-1 gap-2">
        {data.slice(0, 10).map((post: { userId: number, id: number, title: string, body: string }) => (
          <div key={post.id} className="w-full bg-white/90 backdrop-blur-sm rounded-4xl p-4">
            <div className="flex gap-4 mb-10">
              <div className="w-10 h-10 rounded-full bg-muted"></div>
              <div className="flex flex-col justify-center">
                <p className="text-base font-semibold leading-4"> Lucas Rodrigues </p>
                <small className="text-xs text-muted">1 hora atrás</small>
              </div>
            </div>

            <div className="w-full mb-10">
              <p className="text-base leading-5">{post.body}</p>
            </div>

            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center justify-between gap-2">
                <button>
                  <HeartIcon className="size-5" />
                </button>

                <button>
                  <ChatBubbleLeftRightIcon className="size-5" />
                </button>

                <button>
                  <ShareIcon className="size-5" />
                </button>
              </div>

              <button>
                <ExclamationCircleIcon className="size-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="col-span-1">
        <div className="bg-white/90 backdrop-blur-sm rounded-4xl p-4">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-full bg-muted"></div>

            <div className="flex flex-col items-center justify-center">
              <h2 className="text-2xl font-semibold">Lucas Rodrigues</h2>
              <p className="text-xs text-muted">lucas.bezerra@saocristovao.com</p>
            </div>
          </div>

          <div className="grid grid-cols-3 mb-6">
            <button className="flex flex-col items-center justify-center">
              <p>245</p>
              <small className="font-bold">Seguindo</small>
            </button>

            <button className="flex flex-col items-center justify-center">
              <p>354</p>
              <small className="font-bold">Seguidores</small>
            </button>

            <button className="flex flex-col items-center justify-center">
              <p>8</p>
              <small className="font-bold">Comunidades</small>
            </button>
          </div>

          <Link to="/perfil" className="flex items-center justify-center gap-2 text-xs font-bold uppercase hover:underline"> 
            Ver perfil
          </Link>
        </div>
      </div>
    </div>
  )
}
