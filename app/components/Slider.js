'use client'
import { useState } from 'react'
import Image from 'next/image'

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    // Should be container for title AND slider with buttons
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-2xl font-semibold text-center text-white">
        Featured Artists
      </h1>

      {slides.map((slide, index) => (
        <div className="p-2">
          <div
            className={
              index === current
                ? 'opacity-100 duration-1000 ease-in-out'
                : 'opacity-0'
            }
            key={index}
          >
            {index === current && (
              <img
                src={slide.image}
                alt="slider image"
                className=" shadow-lg shadow-white w-96 h-96 object-cover"
              />
            )}
          </div>
        </div>
      ))}

      {/* Container for buttons (prev/next) */}
      <div className="flex flex-row gap-5 text-white p-5 z-70">
        <button className="bg-gray-800 p-2 rounded-lg" onClick={prevSlide}>
          Prev
        </button>
        <button className="bg-gray-800 p-2 rounded-lg" onClick={nextSlide}>
          Next
        </button>
      </div>
    </div>
  )
}

export default Slider
