import { useNavigate, useParams } from 'react-router-dom'
import { HostingListData } from '../../data/HostingListData'
import './HostingStyle.css'
import DropDownBar from '../../components/DropDownBar/DropDownBar'
import Stars from '../../components/stars/stars'
import ImageSlider from '../../components/ImageSlider/ImageSlider'
import { useEffect, useRef } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

export default function Hosting() {
    const { id, title } = useParams()
    const hostingName = useRef()
    const hostingLocation = useRef()
    const navigate = useNavigate()
    const idLocation = HostingListData.find((hosting) => hosting.id === id)
    const titleLocation = HostingListData.find(
        (hosting) => hosting.title.replaceAll(' ', '-') === title
    )

    useEffect(() => {
        if (idLocation === undefined) {
            navigate('/*')
        } else if (titleLocation === undefined) {
            navigate('/*')
        } else {
            document.title = `Kasa - ${hostingName.current.innerText} - ${hostingLocation.current.innerText}`
        }
    })

    return (
        <div className="flexConteneur">
            <div>
                <Header />
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
                                        <h3 ref={hostingName}>
                                            {hostingPage.title}
                                        </h3>
                                        <h4 ref={hostingLocation}>
                                            {hostingPage.location}
                                        </h4>
                                        <div className="tagList">
                                            {hostingPage.tags.map(
                                                (tag, index) => (
                                                    <p
                                                        className="tag"
                                                        key={`${tag}-${index}`}>
                                                        {tag}
                                                    </p>
                                                )
                                            )}
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
                                            <Stars
                                                rating={hostingPage.rating}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="dropDownBarHostingPage">
                                    <div className="dropDownBar">
                                        <DropDownBar
                                            title="Description"
                                            description={
                                                hostingPage.description
                                            }
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
            </div>
            <Footer />
        </div>
    )
}
