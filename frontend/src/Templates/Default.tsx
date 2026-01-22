import Aside from "@/components/Aside"
import Upper from "@/components/Upper"

interface PrivateProps {
    children: React.ReactNode
}

export default function Default({ children }: PrivateProps) {
    return (
        <div className="flex flex-col w-full h-screen bg-radial-[at_25%_0%] from-[#D7D7D9] via-[#D7D7D9] to-[#83A2DB] to-99%">
            <Upper />

            <div className="flex h-screen">
                <Aside />

                <div className="grow w-full h-full px-4 pt-18 overflow-y-scroll no-scrollbar">
                    <div className="h-full ">
                        { children }
                    </div>
                </div>
            </div>
        </div>
    )
}