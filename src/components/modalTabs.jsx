// components/ModalWithTabs.js
"use client";
import { useState, useRef } from 'react';
import { Dialog } from '@headlessui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

export default function ModalWithTabs({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState(0);
  const swiperRef = useRef(null); // استفاده از useRef برای ارجاع به نمونه Swiper

  const tabs = ["Tab 1", "Tab 2", "Tab 3"]; // لیست تب‌ها

  const handleTabClick = (index) => {
    setActiveTab(index);
    swiperRef.current.swiper.slideTo(index); // اسلاید به تب مورد نظر
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-800 bg-opacity-50">
      <Dialog.Panel className="bg-white p-6 md:max-w-lg w-screen md:w-full h-screen rounded shadow-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2">Close</button>

        <div className="flex justify-center space-x-4 mb-4">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`px-4 py-2 ${activeTab === index ? "bg-blue-500 text-white" : "text-gray-600"}`}
              onClick={() => handleTabClick(index)} // تغییر تابع کلیک
            >
              {tab}
            </button>
          ))}
        </div>

        <Swiper
          onSlideChange={(swiper) => setActiveTab(swiper.activeIndex)} // همگام‌سازی وضعیت تب با تغییر اسلاید
          initialSlide={activeTab}
          onSwiper={(swiper) => swiper.slideTo(activeTab)}
          spaceBetween={20}
          slidesPerView={1}
          ref={swiperRef} // ارجاع به Swiper
        >
          <SwiperSlide>
            <div className="p-4">
              <h2 className="text-lg font-bold">Content for Tab 1</h2>
              <p>Details and content for the first tab go here.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-4">
              <h2 className="text-lg font-bold">Content for Tab 2</h2>
              <p>Details and content for the second tab go here.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-4">
              <h2 className="text-lg font-bold">Content for Tab 3</h2>
              <p>Details and content for the third tab go here.</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </Dialog.Panel>
    </Dialog>
  );
}
