import a from '../../../assets/desktop/red-logo/a.png'
import k from '../../../assets/desktop/red-logo/k.png'
import s from '../../../assets/desktop/red-logo/s.png'
import House from './House/HouseLogoHeader'
import './HeaderLogoStyle.css'

export default function HeaderLogo() {
    return (
        <div className="logo-red">
            <img
                src={k}
                alt="lettre k"
                className="letterK"
            />
            <House />
            <img
                src={s}
                alt="lettre s"
                className="letterS"
            />
            <img
                src={a}
                alt="lettre a"
                className="letterA"
            />
        </div>
    )
}
