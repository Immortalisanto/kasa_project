import AProposBanner from '../../components/AProposBanner/AProposBanner'
import AProposDropDownBar from '../../components/AProposDropDownBar/AProposDropDownBar'
import './AProposStyle.css'
import { useEffect } from 'react'

export default function APropos() {
    useEffect(() => {
        document.title = `Kasa - A propos`
    }, [])

    return (
        <main>
            <AProposBanner />
            <AProposDropDownBar />
        </main>
    )
}
