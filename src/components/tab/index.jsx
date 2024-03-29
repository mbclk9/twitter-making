import Content from "./content"
import Item from "./item"
import Items from "./items"
import PropTypes from "prop-types"
import { TabContext } from "./context"
import {useState} from "react"
import { useEffect } from "react"


export default function Tab({children, activeTab}){
    const [active, setActive] = useState(activeTab)
    const contents = children.filter( c => c.type == Content )
    const items = children.filter( c => c.type == Items )
    const data = {
        active,
        setActive
        }

    useEffect(() => {
        setActive(activeTab)
    },[activeTab])


    const content = contents.find( c => c.props.id == active)

    return(
        <div>
                    <TabContext.Provider value={data}>
            <div className=" sticky top-0 z-10 bg-black/65 backdrop-blur-md  border-b border-[#333]" >
                        {items}
                    
            </div>
                    </TabContext.Provider>
       {content}
       </div>
    )
}

Tab.Items = Items
Tab.Item = Item
Tab.Content= Content

Tab.propTypes ={
    children: PropTypes.arrayOf(
        PropTypes.node
    ),
    activeTab: PropTypes.string.isRequired
}