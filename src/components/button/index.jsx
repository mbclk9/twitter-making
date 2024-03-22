import { createElement } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

export default function Button({ size, children}){
    return createElement('button',{
        className: classNames("bg-[#1d9bf0] rounded-full flex items-center text-[15px] justify-center text-white font-bold hover:bg-[#1a8cd8] transition-colors", {
            "px-4 h-10 min-h-[36px] leading-5": size === 'medium',
            "px-4 h-[52px] text-[17px] w-full": size === 'large'
        })
    },children)
}


Button.propTypes = {
    size: PropTypes.oneOfType(['medium', 'large'])
}

Button.defaultProps ={
    size : 'large'
}