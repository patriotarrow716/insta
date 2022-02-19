// import Image from "next/image"
import { PlusIcon } from "@heroicons/react/outline";


const SearchTip = () => {
    return (
        <div className="search-tip absolute top-10 bg-white w-96 left-1/2 -translate-x-1/2 shadow-xl p-5 rounded-md">
            <div className="flex justify-between md-5">
                <h3 className="font-bold">最近</h3>
                <button className="text-blue-400 text-xs font-bold">すべてクリア</button>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <div className="avater">
                        <div className="w-14 h-14">
                            <img className="rounded-full" src="https://pbs.twimg.com/profile_images/1262558301524389888/bUmqnEIo_400x400.jpg" />
                        </div>

                    </div>



                    <div className="pl-4">
                        <div className="text-md font-semibold">007</div>
                        <div className="text-gray-500">James Bond 007</div>
                    </div>

                </div>
                <PlusIcon className="rotate-45 h-5 w-5 text-gray-400" />

            </div>



        </div>

    )
}

export default SearchTip