import a from '../../../assets/desktop/red-logo/a.png'
import k from '../../../assets/desktop/red-logo/k.png'
import s from '../../../assets/desktop/red-logo/s.png'
import House from './House/index'
import './style.css'

export default function Logo() {
    return (
        <div className="logo-red">
            <img
                src={k}
                alt="lettre k"
            />
            <House />
            <img
                src={s}
                alt="lettre s"
            />
            <img
                src={a}
                alt="lettre a"
            />
        </div>
    )
}
