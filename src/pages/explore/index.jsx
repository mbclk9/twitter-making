import { useState } from "react"
import { useAccount } from "../../store/auth/hooks"
import {useClickAway} from 'react-use'
import { useRef } from "react"
import ExTabs from "./exptabs"


export default function Explore() {

    const [query, setQuery] = useState('')
    const [focus, setFocus] = useState('')
    const account = useAccount()
    const ref =useRef()
    useClickAway(ref, ()=>{
        setFocus(false)
    })
    return (
     <div className="flex flex-col">
        <div className="flex flex-row items-center  mx-3 ">
           <div  ref={ref} className=" min-h-[32px] h-[53px] mb-3 flex items-center sticky top-0 bg-black  z-20 flex-1">
            <label className="h-[43px] rounded-full bg-[#202327] relative w-full group border border-transparent focus-within:bg-black focus-within:border-[#1d9bf0]   " >
                <div className="w-[56px] h-full flex items-center justify-center absolute top-0 left-0  pointer-events-none fill-[#71767b]  focus-within:fill-[#1d9bf0]">
                    <svg viewBox="0 0 24 24" height={18.75} >
                        <path   
                        d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"/>
                    </svg>
                </div>
                <input 
                    type="text"
                    placeholder="Ara"
                    className="w-full h-full bg-transparent rounded-full placeholder-[#71767b] outline-none text-[15px] pl-[56px]" 
                    value={query}
                    onFocus={()=> setFocus(true)}
                    onChange={e => setQuery(e.target.value)}
                 />
                {(query && focus ) && (
                    <button className="w-[22px] h-[22px] rounded-full bg-[#1d9bf0] flex items-center justify-center text-black min-w-[22px]  absolute top-1/2 right-3 -translate-y-1/2 invisible group-focus-within:visible ">
                        <svg viewBox="0 0 15 15" width={10} height={10} >
                            <path 
                            d="M6.09 7.5L.04 1.46 1.46.04 7.5 6.09 13.54.04l1.42 1.42L8.91 7.5l6.05 6.04-1.42 1.42L7.5 8.91l-6.04 6.05-1.42-1.42L6.09 7.5z"/>
                        </svg>
                    </button>
                )}
                {focus && (
                    <div className="absolute top-full w-full bg-black shadow-box rounded-lg duration-75 max-h-[calc(80vh-53px)] overflow-hidden ">
                        <div className="flex items-center justify-between px-4 py-3">
                            <h6 className="text-[#e7e9ea] text-xl font-bold">En Yeni</h6>
                            <button className=" min-w-[24px] text-[#1d9bf0] hover:bg-[#1d9cf023] transition-colors rounded-full py-1 px-1 text-[15px] font-bold leading-5 ">Tümünü temizle</button>
                        </div>
                        <div>
                            <button className=" p-3 outline-none  hover:bg-[#eff3f41a] transition-colors w-full flex  items-center  overflow-hidden">
                                <img src={account.avatar} alt="" width={40} height={40} className="rounded-full" />
                                <div className="mx-3 text-[15px] text-left ">
                                    <h6 className=" font-bold">{account.fullname}</h6>
                                <div className=" text-[#71767b] ">
                                    @{account.username}
                                </div>
                                </div>
                                <div className="items-center ml-auto hover:bg-[#1d9cf023] p-1 rounded-full">
                                    <svg viewBox="0 0 24 24" width={18} height={18}>
                                            <path 
                                            fill="#1d9bf0"
                                            d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"/>
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                )}

            </label>
        </div>
            <div className=" min-w-[56px] min-h-[32px] mb-3 flex items-center justify-center mr-[-9px] ">
                <button className="hover:bg-[#202020] p-1.5 rounded-full transition-colors">
                    <svg viewBox="0 0 24 24" height={20} width={20}>
                            <path 
                            fill="#F0F3F3"
                            d="M10.54 1.75h2.92l1.57 2.36c.11.17.32.25.53.21l2.53-.59 2.17 2.17-.58 2.54c-.05.2.04.41.21.53l2.36 1.57v2.92l-2.36 1.57c-.17.12-.26.33-.21.53l.58 2.54-2.17 2.17-2.53-.59c-.21-.04-.42.04-.53.21l-1.57 2.36h-2.92l-1.58-2.36c-.11-.17-.32-.25-.52-.21l-2.54.59-2.17-2.17.58-2.54c.05-.2-.03-.41-.21-.53l-2.35-1.57v-2.92L4.1 8.97c.18-.12.26-.33.21-.53L3.73 5.9 5.9 3.73l2.54.59c.2.04.41-.04.52-.21l1.58-2.36zm1.07 2l-.98 1.47C10.05 6.08 9 6.5 7.99 6.27l-1.46-.34-.6.6.33 1.46c.24 1.01-.18 2.07-1.05 2.64l-1.46.98v.78l1.46.98c.87.57 1.29 1.63 1.05 2.64l-.33 1.46.6.6 1.46-.34c1.01-.23 2.06.19 2.64 1.05l.98 1.47h.78l.97-1.47c.58-.86 1.63-1.28 2.65-1.05l1.45.34.61-.6-.34-1.46c-.23-1.01.18-2.07 1.05-2.64l1.47-.98v-.78l-1.47-.98c-.87-.57-1.28-1.63-1.05-2.64l.34-1.46-.61-.6-1.45.34c-1.02.23-2.07-.19-2.65-1.05l-.97-1.47h-.78zM12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5s-.68-1.5-1.5-1.5zM8.5 12c0-1.93 1.56-3.5 3.5-3.5 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-1.94 0-3.5-1.57-3.5-3.5z"/>
                    </svg>
                </button>
            </div>
        </div>
        <div>
            <ExTabs/>
        </div>
     </div>
    )
    
}