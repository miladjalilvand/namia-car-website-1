"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import MotD from './ItemHome';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


const images = [
  '/assets/1.jpg',
  '/assets/2.jpg',
  '/assets/3.jpg',
  '/assets/4.jpg',
];

export default function ImageSliderHomePage({ theme }) {
  const [currentImage, setCurrentImage] = useState(0);
  const swiperRef = useRef(null);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval); // Clean up on unmount
  }, [currentImage]); // Add currentImage as dependency

  // Next image handler
  const nextImage = () => {
    const nextIndex = (currentImage + 1) % images.length;
    setCurrentImage(nextIndex);
  };

  // Previous image handler
  const prevImage = () => {
    const prevIndex = (currentImage - 1 + images.length) % images.length;
    setCurrentImage(prevIndex);
  };

  // Handle circle click navigation
  const handleCircleClick = (index) => {
    setCurrentImage(index);
  };

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(currentImage);
    }
  }, [currentImage]); // Update swiper slide when currentImage changes

  return (
    <div
      className={`flex flex-col md:flex-row justify-center items-center md:mt-0`}
      style={{ backgroundColor: theme.background, color: theme.color }}
    >
      {/* Image Container */}
      <div className="relative h-2/3 w-full md:w-1/2 md:h-1/2 cursor-pointer">
        <Swiper
          onSlideChange={(swiper) => setCurrentImage(swiper.activeIndex)}
          initialSlide={currentImage}
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={0}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <Image
                src={src}
                alt="تصویر"
                width={10000}
                height={240}
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
                priority
            
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="absolute bottom-0 left-0 -1/2 flex z-20">
          <button
            onClick={prevImage}
            className="bg-red-700 text-white px-4 py-4 hover:bg-gray-800"
          >
         <IoIosArrowForward/>
          </button>
          <button
            onClick={nextImage}
            className="bg-red-700 text-white px-4 py-4 hover:bg-gray-800"
          >
            <IoIosArrowBack/>
          </button>
        </div>
      </div>

      {/* Circle Navigation */}
      <div className="flex md:w-1/7 h-full items-center justify-center pt-7">
        <CursorImage currentIndex={currentImage} onCircleClick={handleCircleClick} />
      </div>

      {/* Image Title */}
      <div className={`hidden md:flex w-1/2 h-full items-center justify-center`}>
        <Title value={`تصویر ${currentImage + 1}`} />
      </div>
    </div>
  );
}

function Title({ value }) {
  return <MotD params={value} key={value} />;
}

function CursorImage({ currentIndex, onCircleClick }) {
  const circles = [0, 1, 2, 3];

  return (
    <ul className="flex flex-row md:flex-col -space-x-px justify-center items-center p-6">
      {circles.map((val, ind) => (
        <li key={ind}>
          <div
            onClick={() => onCircleClick(ind)}
            className={`rounded-full cursor-pointer m-1 ${
              currentIndex === ind ? 'w-4 h-4 bg-gray-600' : 'w-3 h-3 bg-gray-300'
            }`}
          />
        </li>
      ))}
    </ul>
  );
}
