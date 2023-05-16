import HomeBanner from '../../components/HomeBanner/HomeBanner'
import HostingList from '../../components/HostingList/HostingList'
import { useEffect } from 'react'

export default function Home() {
    useEffect(() => {
        document.title = `Kasa - Accueil`
    }, [])

    return (
        <main>
            <HomeBanner />
            <HostingList />
        </main>
    )
}
