import './ErrorStyle.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

export default function Error() {
    useEffect(() => {
        document.title = `Kasa - Page introuvable`
    }, [])

    return (
        <div className="flexConteneur">
            <div>
                <Header />
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
            </div>
            <Footer />
        </div>
    )
}
