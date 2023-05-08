import './DropDownBarStyle.css'
import topArrow from '../../assets/topArrow.png'
import downArrow from '../../assets/downArrow.png'
import { useState } from 'react'

export default function DropDownBar({ title, description }) {
    const [isOpen, setIsOpen] = useState(false)
    let dropDownIcon = isOpen ? topArrow : downArrow

    return (
        <div className="dropDownBarConteneur">
            <button
                className="dropDownButton"
                onClick={() => setIsOpen(!isOpen)}>
                {title}
                <img
                    src={dropDownIcon}
                    alt="flèche permettant d'ouvrir un menu déroulant"
                    className="arrowDropDownBar"
                />
            </button>
            {isOpen && <p className="dropDownText">{description}</p>}
        </div>
    )
}
