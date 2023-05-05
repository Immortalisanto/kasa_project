import { Link } from 'react-router-dom'
import Logo from './Logo/HeaderLogo'
import './HeaderStyle.css'
import { useState } from 'react'

export default function Header() {
    const [isActive, setIsActive] = useState('true')

    const toggleClass = (e) => {
        if (e.target.classList.contains('active')) {
            return
        } else {
            setIsActive(!isActive)
        }
    }

    return (
        <header>
            <Logo />
            <nav>
                <ul>
                    <Link
                        to="/"
                        className={isActive ? 'active link' : 'link'}
                        onClick={toggleClass}>
                        Accueil
                    </Link>
                    <Link
                        to="/a-propos"
                        className={!isActive ? 'active link' : 'link'}
                        onClick={toggleClass}>
                        A propos
                    </Link>
                </ul>
            </nav>
        </header>
    )
}
