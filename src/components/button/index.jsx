import { createElement } from "react";
import classNames from "classnames";
import PropTypes from "prop-Types";

export default function Button({ size, children}){
    return createElement('button',{
        className: classNames("bg-[#1d9bf0] rounded-full flex item-center", {
            "px-4 h-9": size ==  'medium',
            "px-6" : size === 'large'
        })
    },  children);
}
Button.propTypes = {
    size: PropTypes.oneOf(['medium', 'large'])
}

Button.defaultProps ={
    size : 'medium'
}