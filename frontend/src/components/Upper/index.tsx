import { BellAlertIcon, ChevronRightIcon, QuestionMarkCircleIcon, UserCircleIcon } from "@heroicons/react/24/outline";

export default function Upper() {
    return (
        <div className="sticky top-0 w-full flex items-center justify-between h-16 p-2 bg-white">
            <div>
                <p className="flex items-center text-xs font-bold">
                    <ChevronRightIcon className="size-3" />  Social
                </p>
            </div>
            <div className="w-full max-w-96">
                <input className="w-full h-10 bg-white rounded-full px-4 border border-border duration-300 placeholder:text-sm focus:border focus:border-black" placeholder="Buscar"/>
            </div>
            <div className="flex items-center justify-center gap-2">
                <button 
                    className="relative w-10 h-10 flex items-center justify-center bg-white rounded-sm border border-border text-muted duration-300 hover:scale-110 hover:bg-black hover:border-black hover:text-white"
                >
                    <QuestionMarkCircleIcon className="size-5" />
                </button>
                
                <button className="relative w-10 h-10 flex items-center justify-center bg-white rounded-sm border border-border text-muted duration-300 hover:scale-110 hover:bg-black hover:border-black hover:text-white">
                    <BellAlertIcon className="size-5" />

                    <span className="absolute bottom-0 left-0 translate-y-1 -translate-x-1 flex size-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-notification opacity-75"></span>
                        <span className="relative inline-flex size-3 rounded-full bg-notification"></span>
                    </span>
                </button>

                <button className="relative w-10 h-10 flex items-center justify-center bg-white rounded-sm border border-border text-muted duration-300 hover:scale-110 hover:bg-black hover:border-black hover:text-white">
                    <UserCircleIcon  className="size-5"/>
                    <span className="absolute bottom-0 left-0 translate-y-1 -translate-x-1 flex size-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-on opacity-75"></span>
                        <span className="relative inline-flex size-3 rounded-full bg-on"></span>
                    </span>
                </button>
            </div>
        </div>
    )
}