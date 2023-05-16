import './ErrorStyle.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function Error() {
    useEffect(() => {
        document.title = `Kasa - Page introuvable`
    }, [])

    return (
        <div className="error-div">
            <p className="code-error">404</p>
            <p className="error-message">
                Oups! La page que vous demandez n'existe pas.
            </p>
            <Link
                to="/"
                className="home-link-on-error-page">
                Retourner sur la page d'accueil
            </Link>
        </div>
    )
}
