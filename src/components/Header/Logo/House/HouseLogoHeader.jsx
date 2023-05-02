import house from '../../../../assets/desktop/red-logo/house.png'
import door from '../../../../assets/desktop/red-logo/door.png'
import './HouseLogoHeaderStyle.css'

export default function HouseLogoHeader() {
    return (
        <div>
            <img
                src={house}
                alt="Logo représentant une maison"
                className="house-red"
            />
            <img
                src={door}
                alt="Logo représentant la porte d'une maison"
                className="door-red"
            />
        </div>
    )
}
