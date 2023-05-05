import './HostingListStyle.css'
import { HostingListData } from '../../data/HostingListData'
import { Link } from 'react-router-dom'

export default function HostingList() {
    return (
        <section className="hostingSection">
            <div className="hostingListConteneur">
                {HostingListData.map((hosting) => (
                    <article key={hosting.id}>
                        <Link to={`/${hosting.title}/${hosting.id}`}>
                            <img
                                className="hostingImage"
                                src={hosting.cover}
                                alt={hosting.title}
                            />
                            <h2 className="hostingName">{hosting.title}</h2>
                        </Link>
                    </article>
                ))}
            </div>
        </section>
    )
}
