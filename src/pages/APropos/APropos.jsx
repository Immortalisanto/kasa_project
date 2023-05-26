import AProposBanner from '../../components/AProposBanner/AProposBanner'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import AProposDropDownBar from '../../components/AProposDropDownBar/AProposDropDownBar'
import './AProposStyle.css'
import { useEffect } from 'react'

export default function APropos() {
    useEffect(() => {
        document.title = `Kasa - A propos`
    }, [])

    return (
        <div className="flexConteneur">
            <div>
                <Header />
                <main>
                    <AProposBanner />
                    <AProposDropDownBar />
                </main>
            </div>
            <Footer />
        </div>
    )
}
