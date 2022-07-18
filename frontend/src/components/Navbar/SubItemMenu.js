import React from "react"
import SubElement from "./SubElement"


const SubItemMenu  = ({items}) => {
    return (
        <ul className="sub-menu">
            {items && items.length > 0 && items.map((item,index) =>
                <SubElement key={index} item={item}></SubElement>
            )
            }
        </ul>

    )
}

export default SubItemMenu;