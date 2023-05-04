import a from '../../../assets/white-logo/a.png'
import k from '../../../assets/white-logo/k.png'
import s from '../../../assets/white-logo/s.png'
import House from './House/HouseLogoFooter'
import './LogoFooterStyle.css'

export default function LogoFooter() {
    return (
        <div className="logo-white">
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
