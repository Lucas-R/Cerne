import { ArrowPathRoundedSquareIcon, Cog6ToothIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { Link } from "@tanstack/react-router";

export default function Aside() {
    return (
        <div className="flex flex-col items-center justify-between gap-2 p-4 pt-18">
            <div className="flex flex-col items-center justify-between gap-2">
                <Link 
                    to="/social"
                    className="group flex items-center justify-center w-10 h-10 bg-white rounded-full"
                    >
                    <GlobeAltIcon className="size-5 duration-300 group-hover:rotate-12" />
                </Link>

                <Link 
                    to="/"
                    className="group flex items-center justify-center w-10 h-10 bg-white rounded-full"
                    >
                    <ArrowPathRoundedSquareIcon className="size-5 duration-300 group-hover:rotate-12" />
                </Link>
            </div>
            
            <Link 
                to="/configuracoes"
                className="group flex items-center justify-center w-10 h-10 bg-white rounded-full"
            >
                <Cog6ToothIcon className="size-5 duration-300 group-hover:rotate-12" />
            </Link>
        </div>
    )
}