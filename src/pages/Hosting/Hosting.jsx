import { useParams } from 'react-router-dom'
import { HostingListData } from '../../data/HostingListData'
import './HostingStyle.css'
import DropDownBar from '../../components/DropDownBar/DropDownBar'
import Stars from '../../components/stars/stars'

export default function Hosting() {
    const { id } = useParams()

    return (
        <main>
            {HostingListData.filter((hosting) => hosting.id === id).map(
                (hostingPage) => (
                    <section
                        className="hostingPageSection"
                        key={hostingPage.id}>
                        <img
                            className="hostingPageImage"
                            src={hostingPage.cover}
                            alt={hostingPage.title}
                        />
                        <div className="titlesAndHost">
                            <div className="titleAndLocation">
                                <h3>{hostingPage.title}</h3>
                                <h4>{hostingPage.location}</h4>
                            </div>
                            <div className="hostNameAndImage">
                                <p>{hostingPage.host.name}</p>
                                <img
                                    src={hostingPage.host.picture}
                                    alt={hostingPage.host.name}
                                />
                            </div>
                        </div>
                        <div className="tag">
                            {hostingPage.tags.map((tag, index) => (
                                <p key={`${tag}-${index}`}>{tag}</p>
                            ))}
                        </div>
                        <Stars rating={hostingPage.rating} />
                        <div className="dropDownBarHostingPage">
                            <DropDownBar
                                title="Description"
                                description={hostingPage.description}
                            />
                            <DropDownBar
                                title="Equipements"
                                description={hostingPage.equipments.map(
                                    (equipment, index) => (
                                        <p key={`${equipment}-${index}`}>
                                            {equipment}
                                        </p>
                                    )
                                )}
                            />
                        </div>
                    </section>
                )
            )}
        </main>
    )
}
