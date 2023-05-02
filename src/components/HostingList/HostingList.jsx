import './HostingListStyle.css'
import { HostingListData } from '../../data/HostingListData'

export default function HostingList() {
    return (
        <section className="hostingSection">
            <div className="hostingListConteneur">
                {HostingListData.map((hosting) => (
                    <article key={hosting.id}>
                        <img
                            className="hostingImage"
                            src={hosting.cover}
                            alt={hosting.title}
                        />
                        <h2 className="hostingName">{hosting.title}</h2>
                    </article>
                ))}
            </div>
        </section>
    )
}
