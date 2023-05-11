import redStar from '../../assets/redStar.png'
import greyStar from '../../assets/greyStar.png'

export default function Stars(props) {
    const rating = props.rating
    const range = [1, 2, 3, 4, 5]

    return (
        <div className="stars">
            {range.map((rangeElem) =>
                rating >= rangeElem ? (
                    <img
                        key={rangeElem.toString()}
                        src={redStar}
                        alt="une étoile rouge représentant un score positif de l'habitation"
                    />
                ) : (
                    <img
                        key={rangeElem.toString()}
                        src={greyStar}
                        alt="Une étoile grise, score nul"
                    />
                )
            )}
        </div>
    )
}
