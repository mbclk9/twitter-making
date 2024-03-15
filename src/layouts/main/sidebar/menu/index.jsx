import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { mainMenu } from "../../../../utils/consts";

export default function Menu(){
    return(
        <nav className="mt-0.5 mb-1">
            {mainMenu.map((menu, index)=>(
                   // eslint-disable-next-line react/jsx-key
                   <NavLink to={menu.path} className="py-1 block group">
                   {({isActive}) => (
                            <div className={classNames("p-3 rounded-full inline-flex items-center gap-5 transition-colors group-hover:bg-[#eff3f41a]", {
                               "font-bold":isActive
                            })}>
                               <div className="w-[26.25px] h-[26.25px] relative">
                                {menu ?.notification && (
                                       <span className="w-[18px] h-[18px] rounded-full absolute -top-1.5 -right-1 flex items-center justify-center text-[11px] bg-[#1d9bf0] ">
                                        {menu ?.notification}
                                        </span>
                                )}
                                    {isActive && menu.icon.active}
                                    {!isActive && menu.icon.passive}
                               </div>
                                <div className="text-xl text-[#e6e9ea]  pr-4">
                                     {menu.title}
                                </div>
                        </div>
                   )}
               </NavLink>
            ))}
                  <button className="py-1 block group">
                            <div className="p-3 rounded-full inline-flex items-center gap-5 transition-colors group-hover:bg-[#eff3f41a]">
                               <div className="w-[26.25px] h-[26.25px] relative">
                               <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
                                <path 
                                fill="#e6e9ea"
                                d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"/>
                                </svg>
                               </div>
                                <div className="text-xl text-[#e6e9ea]  pr-4">
                                    Daha Fazla
                                </div>
                        </div>
               </button>
               <button>Gönder</button>
        </nav>
    )
}