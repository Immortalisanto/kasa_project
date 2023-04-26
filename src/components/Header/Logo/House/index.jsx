import house from '../../../../assets/desktop/red-logo/house.png'
import door from '../../../../assets/desktop/red-logo/door.png'
import './style.css'

export default function House() {
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
