import PropTypes from "prop-types"
import { useTab } from "./context"
import classNames from "classnames"

export default function Item({children, id}){
     const  {active, setActive} = useTab()

    return (
        <button type="button" className=" flex-auto text-center"
            onClick={() =>{
                setActive(id)
            }}>
            <div className={classNames(" relative h-[3.313rem] text-[15px] text-[#71767b] inline-flex items-center justify-center hover:bg-[#eff3f41a] transition-colors w-full top-0 ", {
                "text-white font-bold":active == id,
                "font-medium":active != id,
            }) }>
                {children}
                {active == id && (
                    <div className=" h-1 absolute bottom-0  bg-[#1D9BF0] rounded-full min-w-[62px] items-center justify-center  "/>
                )}
            </div>
        </button>
    )
      
}

Item.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    id: PropTypes.string
}