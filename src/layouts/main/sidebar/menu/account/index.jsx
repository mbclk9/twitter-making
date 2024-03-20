import { Popover, Transition } from "@headlessui/react";
import { useAccount } from "../../../../../store/auth/hooks";
import More from "./more";


export default function Account(){

    const account = useAccount()

    return(
        <div className="mt-auto">
            <Popover className="relative">
                <Popover.Button className="my-3 p-3 outline-none rounded-full  hover:bg-[#eff3f41a] transition-colors w-full flex  items-center justify-between">
                    <img src={account.avatar} alt="" width={40} height={40} className="rounded-full" />
                    <div className="mx-3 text-[15px] text-left ">
                        <h6 className=" font-bold">{account.fullname}</h6>
                    <div className=" text-[#71767b] ">
                        @{account.username}
                    </div>
                    </div>
                    <div className="items-center">
                        <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
                                <path 
                                fill="#e6e9ea"
                                d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
                        </svg>
                    </div>
                </Popover.Button>
                <Transition
                    enter="transition duration-200 ease-out"
                    enterFrom="transform  opacity-0"
                    enterTo="transform  opacity-100"
                    leave="transition duration-150 ease-out"
                    leaveFrom="transform  opacity-100"
                    leaveTo="transform  opacity-0"
                >
                <Popover.Panel className="absolute bottom-0 w-[300px] left-0 bg-black shadow-box rounded-2xl overflow-hidden ml-[-20px]  ">
                    <More/>
                </Popover.Panel>
                </Transition>
            </Popover>
        </div>
    )
} 