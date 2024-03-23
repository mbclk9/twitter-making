import { Link } from "react-router-dom";
import ProptTypes from "prop-types"

export default function SidebarSection({title, children, more}){

    return(
        <section className="bg-[#16181c] mb-4 rounded-2xl  border border-[#16181c]  flex flex-col">
            <h5 className="text-[#e7e9ea] text-xl font-extrabold leading-6 py-3 px-4">
                {title}
            </h5>
            <div className=" grid">
                {children}
            </div>
            {more && (
              <Link 
              to={more}
              className=" p-4 text-[15px] leading-5 font-normal text-[#1d9bf0]  items-center justify-center  hover:bg-[#eff3f41a] transition-colors">
                 Daha fazla göster
              </Link>
            )}

        </section>
    )
}

SidebarSection.propTypes ={
    title: ProptTypes.string.isRequired,
    children: ProptTypes.node.isRequired,
    more: ProptTypes.oneOfType([ProptTypes.bool, ProptTypes.string])
}

SidebarSection.defaultProps = {
    more: false
}