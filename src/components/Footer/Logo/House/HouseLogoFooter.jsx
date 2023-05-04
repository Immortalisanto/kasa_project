import house from '../../../../assets/white-logo/house.png'
import door from '../../../../assets/white-logo/door.png'
import './HouseLogoFooterStyle.css'

export default function HouseLogoFooter() {
    return (
        <div>
            <img
                src={house}
                alt="Logo représentant une maison"
                className="house-white"
            />
            <img
                src={door}
                alt="Logo représentant la porte d'une maison"
                className="door-white"
            />
        </div>
    )
}
