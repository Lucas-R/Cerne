import { ArrowPathRoundedSquareIcon, Cog6ToothIcon, FireIcon, GlobeAmericasIcon } from "@heroicons/react/24/outline";
import { Link } from "@tanstack/react-router";

export default function Aside() {
    return (
        <div className="flex flex-col gap-2 h-screen p-2">
            <Link 
                to="/"
                className="flex items-center justify-center w-12 h-12 rounded-sm bg-white"    
            >
                <FireIcon className="size-6" />
            </Link>

            <nav className="grow flex flex-col items-center justify-between gap-2 w-12 rounded-sm bg-white py-1">
                <div className="flex flex-col gap-1">
                    <Link 
                        to="/"
                        className="flex items-center justify-center w-10 h-10 rounded-sm hover:bg-accent"
                        >
                        <GlobeAmericasIcon className="size-5" />
                    </Link>
                    <Link 
                        to="/"
                        className="flex items-center justify-center w-10 h-10 rounded-sm hover:bg-accent"
                        >
                        <ArrowPathRoundedSquareIcon className="size-5" />
                    </Link>
                </div>
                <div>
                    <Link 
                        to="/"
                        className="flex items-center justify-center w-10 h-10 rounded-sm hover:bg-accent"
                        >
                        <Cog6ToothIcon className="size-5" />
                    </Link>
                </div>
            </nav>
        </div>
    )
}