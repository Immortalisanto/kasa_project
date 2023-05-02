import { Link } from 'react-router-dom'
import Logo from './Logo/index'
import './style.css'

export default function Header() {
    return (
        <header>
            <Logo />
            <nav>
                <ul>
                    <Link
                        to="/"
                        className="link">
                        Accueil
                    </Link>
                    <Link
                        to="/a-propos"
                        className="link">
                        A propos
                    </Link>
                </ul>
            </nav>
        </header>
    )
}
