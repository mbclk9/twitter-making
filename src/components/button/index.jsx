import { createElement } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

export default function Button({ size, variant ,className, children, ...props}){
    return createElement('button',{
        className: classNames("rounded-full flex items-center text-[15px] justify-center  font-bold  transition-colors", {
            "px-4 h-8 min-h-[32px] text-sm leading-5": size === 'small',
            "px-4 h-9 min-h-[36px] leading-5": size === 'medium',
            "px-4 h-[52px] text-[17px] w-full": size === 'large',
            "bg-[#1d9bf0] hover:bg-[#1a8cd8] text-white " : variant === 'primary',
            "bg-[#eff3f4] text-[#0f1419]" : variant === 'white',
            "border border-[#536471] hover:border-[#67070f] hover:bg-[#f4212e1a] hover:text-[#f4212e]" : variant === 'white-outline',
            
            [className]:true
        }),
        ...props
    },children)
}


Button.propTypes = {
    as:PropTypes.any,
    size: PropTypes.oneOfType(['small','medium', 'large']),
    variant: PropTypes.oneOfType(['primary','white','white-outline']),
    props: PropTypes.object,
    className:PropTypes.string,
}

Button.defaultProps ={
    as:'button',
    size : 'large',
    variant:'primary'
}