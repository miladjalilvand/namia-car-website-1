"use client";
import Image from 'next/image';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';



const images = [
  '/assets/1.jpg',
  '/assets/2.jpg',
  '/assets/3.jpg',
  '/assets/4.jpg',
];

export default function ImageSlidersCars() {
  const [currentImageSlide, setCurrentImageSlide] = useState(0);
  const swiperRef = useRef(null);

  // تابعی برای تغییر اسلاید بر اساس ایندکس
//   const sliding = (index) => {
//     setCurrentImageSlide(index);
//     if (swiperRef.current && swiperRef.current.swiper) {
//       swiperRef.current.swiper.slideTo(index);
//     }
//   };

  return (
  <div className='w-1/2'>  <Swiper

  onSlideChange={(swiper) => setCurrentImageSlide(swiper.activeIndex)}
  initialSlide={currentImageSlide}
  onSwiper={(swiper) => swiperRef.current = swiper}
  ref={swiperRef}
  slidesPerView={1}
  spaceBetween={0}


>
  {images.map((src, index) => (
    <SwiperSlide key={index}>
      <Image width={900} height={180} alt={`Slide ${index + 1}`} src={src} />
    </SwiperSlide>
  ))}
</Swiper></div>
  );
}
