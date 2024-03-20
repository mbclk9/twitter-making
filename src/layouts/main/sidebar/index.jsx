import Logo from "./logo";
import Menu from "./menu";
import Account from "./menu/account";

export default function Sidebar(){
    return(
        <aside className="w-[275px] min-h-screen px-2 flex flex-col" >
            
            <Logo/>
            <Menu/>
            <div className="mt-auto">
                <div className="my-3"> 
                <Account/>
                </div>
            </div>
        </aside>

    )
}