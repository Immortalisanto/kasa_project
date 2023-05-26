import HomeBanner from '../../components/HomeBanner/HomeBanner'
import HostingList from '../../components/HostingList/HostingList'
import { useEffect } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

export default function Home() {
    useEffect(() => {
        document.title = `Kasa - Accueil`
    }, [])

    return (
        <div className="flexConteneur">
            <div>
                <Header />
                <main>
                    <HomeBanner />
                    <HostingList />
                </main>
            </div>
            <Footer />
        </div>
    )
}
