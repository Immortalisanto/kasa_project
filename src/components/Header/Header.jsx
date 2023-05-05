import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo/HeaderLogo'
import './HeaderStyle.css'

export default function Header() {
    const location = useLocation()
    const { pathname } = location
    const splitLocation = pathname.split('/')

    return (
        <header>
            <Logo />
            <nav>
                <ul>
                    <Link
                        to="/"
                        className={
                            splitLocation[1] === '' ? 'active link' : 'link'
                        }>
                        Accueil
                    </Link>
                    <Link
                        to="/a-propos"
                        className={
                            splitLocation[1] === 'a-propos'
                                ? 'active link'
                                : 'link'
                        }>
                        A propos
                    </Link>
                </ul>
            </nav>
        </header>
    )
}
