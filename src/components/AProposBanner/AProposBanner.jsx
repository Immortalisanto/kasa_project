import './AProposBannerStyle.css'
import aProposBanner from '../../assets/a-propos-banner.png'

export default function AProposBanner() {
    return (
        <div className="a-propos-banner">
            <img
                src={aProposBanner}
                alt="paysage d'une vallée avec une chaine de montagne enneigées au loin"
                className="imageAProposBanner"
            />
        </div>
    )
}
