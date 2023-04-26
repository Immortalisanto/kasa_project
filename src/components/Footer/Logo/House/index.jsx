import house from '../../../../assets/desktop/white-logo/house.png'
import door from '../../../../assets/desktop/white-logo/door.png'
import './style.css'

export default function House() {
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
