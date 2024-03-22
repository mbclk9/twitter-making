import Search from "./search";
import Subscribe from "./subscribe";
import Topics from "./topics";

export default function RightBar(){

    return(
            <aside className="w-[350px] mr-2.5">
                <Search/>
                <Subscribe/>
                <Topics/>
            </aside>
    )

}