import { BellIcon, CommandLineIcon, MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "@tanstack/react-router";

export default function Upper() {
    function handleSearch(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        console.log("submit");
    }

    return (
        <div className="fixed top-0 z-50 flex items-center justify-between gap-4 w-full h-14 px-4 bg-white/20 backdrop-blur-sm">
            <Link 
                to="/"
                className="group flex items-center gap-2 text-2xl font-semibold"
            >
                <CommandLineIcon className="size-10 duration-300 group-hover:rotate-12" /> Cerne
            </Link>

            <form className="relative w-full max-w-80 h-10" onSubmit={handleSearch}>
                <input 
                    id="search" 
                    type="text" 
                    placeholder="What are you looking for?"
                    className="w-full h-full  bg-white rounded-full px-4 border border-border"
                />

                <button
                    type="submit"
                    className="absolute top-1 right-1 flex items-center justify-center w-8 h-8 bg-primary rounded-full duration-300 hover:scale-110" 
                >
                    <MagnifyingGlassIcon className="size-5 text-white" />
                </button>
            </form>

            <div className="flex items-center justify-center gap-2">
                <button className="relative group flex items-center justify-center w-10 h-10 bg-white rounded-full duration-300 hover:scale-110">
                    <BellIcon className="size-5 duration-300 group-hover:rotate-12" />

                    <span className="absolute top-0 right-0 flex size-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex size-3 rounded-full bg-primary"></span>
                    </span>
                </button>

                <button className="flex items-center justify-center w-10 h-10 bg-white rounded-full duration-300 hover:scale-110">
                    <UserCircleIcon className="size-5" />
                </button>
            </div>
        </div>
    )
}