import Aside from "@/components/Aside"
import Upper from "@/components/Upper"

interface PrivateProps {
    children: React.ReactNode
}

export default function Default({ children }: PrivateProps) {
    return (
        <div className="flex min-h-screen bg-background">
            <div>
                <Aside />
            </div>
            <div className="grow flex flex-col h-screen overflow-x-scroll">
                <Upper />
                <div className="grow p-2">
                    { children }
                </div>
            </div>
        </div>
    )
}