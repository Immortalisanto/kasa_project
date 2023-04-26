import './style.css'
import homeBanner from '../../assets/home-banner.png'

export default function HomeBanner() {
    return (
        <div className="home-banner">
            <img
                src={homeBanner}
                alt="paysage de falaises en bord de mer"
                className="imageHomeBanner"
            />
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    )
}
