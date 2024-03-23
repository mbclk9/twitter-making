import { Popover } from "@headlessui/react";
import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <footer  className=" mb-4 px-4 flex flex-wrap gap-2 ">
            <Link to="/" className="text-[#71767b]  text-[13px] leading-4 hover:underline  "> Hizmet Şartları</Link>
            <Link to="/" className="text-[#71767b]  text-[13px] leading-4 hover:underline  "> Gizlilik Politikası</Link>
            <Link to="/" className="text-[#71767b]  text-[13px] leading-4 hover:underline  "> Çerez Politikası</Link>
            <Link to="/" className="text-[#71767b]  text-[13px] leading-4 hover:underline  "> Imprint</Link>
            <Link to="/" className="text-[#71767b]  text-[13px] leading-4 hover:underline  "> Erişilebilirlik</Link>
            <Link to="/" className="text-[#71767b]  text-[13px] leading-4 hover:underline  "> Reklam Bilgisi</Link>
            <div className=" w-full flex gap-2">
                <Popover className="relative leading-4  inline-flex">
                    <Popover.Button
                        className="text-[#71767b]  text-[13px]  hover:underline outline-none inline-flex items-center gap-1">
                        Daha fazla
                        <svg viewBox="0 0 24 24" className="h-[1em]"> 
                            <path 
                            fill="currentColor"
                            d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>            
                        </svg>
                    </Popover.Button>
                    <Popover.Panel className="w-[180px] max-w-[384px] grid absolute rounded-xl  bg-black shadow-box bottom-0 right-0 overflow-hidden">
                        <Link to="/" className="py-3 px-4 text-[15px] font-bold text-[#e7e9ea] hover:bg-[#16181c] transition-colors">Hakkında</Link>
                        <Link to="/" className="py-3 px-4 text-[15px] font-bold text-[#e7e9ea] hover:bg-[#16181c] transition-colors">X uygulamasını indir</Link>
                        <Link to="/" className="py-3 px-4 text-[15px] font-bold text-[#e7e9ea] hover:bg-[#16181c] transition-colors">Durum</Link>
                        <Link to="/" className="py-3 px-4 text-[15px] font-bold text-[#e7e9ea] hover:bg-[#16181c] transition-colors">İşletmeler İçin X</Link>
                        <Link to="/" className="py-3 px-4 text-[15px] font-bold text-[#e7e9ea] hover:bg-[#16181c] transition-colors">Geliştiriciler</Link>
                    </Popover.Panel>
                </Popover>
                <p className="text-[#71767b]  text-[13px] leading-4">
                    © 2024 CEREKS 
                </p>
            </div>
        </footer>
    )
}