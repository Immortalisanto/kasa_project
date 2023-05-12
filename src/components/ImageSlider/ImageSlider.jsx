import { useState } from 'react'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import './ImageSliderStyle.css'

export default function ImageSlider({ slides, name }) {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    return (
        <section className="slider">
            <img
                src={leftArrow}
                alt="Flèche pour faire défiler le caroussel à gauche"
                className={length <= 1 ? 'displayNone' : 'left-arrow'}
                onClick={prevSlide}
            />
            <img
                src={rightArrow}
                alt="Flèche pour faire défiler le caroussel à droite"
                className={length <= 1 ? 'displayNone' : 'right-arrow'}
                onClick={nextSlide}
            />
            <p className={length <= 1 ? 'displayNone' : 'currentImage'}>
                {current + 1}/{length}
            </p>
            {slides.map((slide, index) => {
                return (
                    <div
                        className={index === current ? null : 'slide'}
                        key={index}>
                        {index === current && (
                            <img
                                src={slide}
                                alt={name}
                                className="image"
                            />
                        )}
                    </div>
                )
            })}
        </section>
    )
}
