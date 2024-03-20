import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { mainMenu } from "../../../../utils/consts";
import More from "./more";
import New from "./new";

export default function Menu(){
    return(
        <nav className="mt-0.5 mb-1">
                {mainMenu.map((menu, index)=>(
                    // eslint-disable-next-line react/jsx-key
                    <NavLink to={menu.path} key={index} className=" block group">
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
                                    <div className="text-xl text-[#e6e9ea] pr-4 leading-6">
                                        {menu.title}
                                    </div>
                            </div>
                    )}
                </NavLink>
                ))}
                    <More/>
                    <New/>
            
        </nav>
    )
}