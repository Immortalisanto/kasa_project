import a from '../../../assets/desktop/white-logo/a.png'
import k from '../../../assets/desktop/white-logo/k.png'
import s from '../../../assets/desktop/white-logo/s.png'
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
