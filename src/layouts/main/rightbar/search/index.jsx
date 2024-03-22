import { useState } from "react"
import { useAccount } from "../../../../store/auth/hooks"
import {useClickAway} from 'react-use'
import { useRef } from "react"

export default function Search(){
    const [query, setQuery] = useState('')
    const [focus, setFocus] = useState('')
    const account = useAccount()
    const ref =useRef()
    useClickAway(ref, ()=>{
        setFocus(false)
    })

    return(
        <div  ref={ref} className=" min-h-[32px] h-[53px] mb-3 flex items-center sticky top-0 bg-black  z-20">
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
    )
}