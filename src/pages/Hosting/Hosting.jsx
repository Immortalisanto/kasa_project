import { useParams } from 'react-router-dom'
import { HostingListData } from '../../data/HostingListData'
import './HostingStyle.css'
import DropDownBar from '../../components/DropDownBar/DropDownBar'
import Stars from '../../components/stars/stars'
import ImageSlider from '../../components/ImageSlider/ImageSlider'

export default function Hosting() {
    const { id } = useParams()

    return (
        <main>
            {HostingListData.filter((hosting) => hosting.id === id).map(
                (hostingPage) => (
                    <section
                        className="hostingPageSection"
                        key={hostingPage.id}>
                        <ImageSlider
                            slides={hostingPage.pictures}
                            name={hostingPage.title}
                        />
                        <div className="flexBox">
                            <div className="titlesAndTags">
                                <h3>{hostingPage.title}</h3>
                                <h4>{hostingPage.location}</h4>
                                <div className="tagList">
                                    {hostingPage.tags.map((tag, index) => (
                                        <p
                                            className="tag"
                                            key={`${tag}-${index}`}>
                                            {tag}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <div className="hostAndStars">
                                <div className="hostNameAndImage">
                                    <p className="hostName">
                                        {hostingPage.host.name}
                                    </p>
                                    <img
                                        className="hostImage"
                                        src={hostingPage.host.picture}
                                        alt={hostingPage.host.name}
                                    />
                                </div>
                                <div className="stars">
                                    <Stars rating={hostingPage.rating} />
                                </div>
                            </div>
                        </div>
                        <div className="dropDownBarHostingPage">
                            <div className="dropDownBar">
                                <DropDownBar
                                    title="Description"
                                    description={hostingPage.description}
                                />
                            </div>
                            <div className="dropDownBar">
                                <DropDownBar
                                    title="Equipements"
                                    description={hostingPage.equipments.map(
                                        (equipment, index) => (
                                            <p
                                                className="equipment"
                                                key={`${equipment}-${index}`}>
                                                {equipment}
                                            </p>
                                        )
                                    )}
                                />
                            </div>
                        </div>
                    </section>
                )
            )}
        </main>
    )
}
