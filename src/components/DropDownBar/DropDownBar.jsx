import './DropDownBarStyle.css'
import topArrow from '../../assets/topArrow.png'
import downArrow from '../../assets/downArrow.png'
import { useState } from 'react'

export default function DropDownBar({ title, description }) {
    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <div className="dropDownBarConteneur">
            <button
                className="dropDownButton"
                onClick={() => setIsOpen(false)}>
                {title}
                <img
                    src={topArrow}
                    alt="flèche permettant d'ouvrir un menu déroulant"
                    className="arrowDropDownBar"
                />
            </button>
            <p className="dropDownText">{description}</p>
        </div>
    ) : (
        <div className="dropDownBarConteneur">
            <button
                className="dropDownButton"
                onClick={() => setIsOpen(true)}>
                {title}
                <img
                    src={downArrow}
                    alt="flèche permettant d'ouvrir un menu déroulant"
                    className="arrowDropDownBar"
                />
            </button>
        </div>
    )
}
