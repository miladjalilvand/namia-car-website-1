// components/ModalWithTabs.js
"use client";
import { useState, useRef } from 'react';
import { Dialog } from '@headlessui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { motion, AnimatePresence } from 'framer-motion';
import TabScreen from './tabScreenContact';
const myTabData = [
    {
      title: "Item 1",
      subtitle: "Subtitle for Item 1",
      number: 1,
    },
    {
      title: "Item 2",
      subtitle: "Subtitle for Item 2",
      number: 2,
    },
    {
      title: "Item 3",
      subtitle: "Subtitle for Item 3",
      number: 3,
    },
  ];
  
export default function ModalWithTabs({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState(0);
  const swiperRef = useRef(null); // استفاده از useRef برای ارجاع به نمونه Swiper

  const tabs = ["Tab 1", "Tab 2", "Tab 3"]; // لیست تب‌ها

  const handleTabClick = (index) => {
    setActiveTab(index);
    swiperRef.current.swiper.slideTo(index); // اسلاید به تب مورد نظر
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-800 bg-opacity-50">
         <div className='flex flex-col justify-evenly items-center'>

         <motion.div
            initial={{ y: "100%" }}   // انیمیشن ورود: از پایین وارد می‌شود
            animate={{ y: 0 }}        // انیمیشن ورود: به بالا حرکت می‌کند
            exit={{ y: "100%" }}      // انیمیشن خروج: از بالا به پایین می‌رود
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Dialog.Panel className="bg-white p-6 md:max-w-lg w-screen md:w-full h-screen rounded shadow-lg relative">
             <div className='flex flex-row justify-between items-center '>
             <button onClick={onClose} className="absolute top-2 right-2">close</button>
             <div className='flex flex-row space-x-2'>
             <button onClick={onClose} className="absolute top-2 left-2">li</button>
             <button onClick={onClose} className="absolute top-2 left-6">tl</button>
             <button onClick={onClose} className="absolute top-2 left-12">cv</button>
             </div>
             </div>

              <div className="flex justify-center space-x-4 mb-4">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => handleTabClick(index)} // تغییر تابع کلیک
                    style={{
                      padding: '8px 16px',
                    //   color: activeTab === index ? 'white' : '#4A4A4A',
                    //   backgroundColor: activeTab === index ? '#3B82F6' : 'transparent',
                      borderBottom: activeTab === index ? '2px solid #3B82F6' : 'none', // رنگ زیرخط تب فعال
                    }}
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
                <TabScreen title="My Tabs" list={myTabData} />


                </SwiperSlide>
                <SwiperSlide>
                <TabScreen title="My Tabs" list={myTabData} />

                </SwiperSlide>
                <SwiperSlide>
                <TabScreen title="My Tabs" list={myTabData} />

                </SwiperSlide>
              </Swiper>
            
            </Dialog.Panel>
            
          </motion.div>
          <div className='absolute bottom-0 bg-slate-600 w-full text-center text-white'>footer</div>
         </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
