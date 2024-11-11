"use client";
import { useState } from "react";
import { easeInOut, motion } from "framer-motion";
import Image from 'next/image';

const images = [
    {
        src: '/assets/1.jpg',
        title: 'ماشین اسپرت',
        description: 'این یک ماشین اسپرت است که با طراحی هوشمندانه و عملکرد بالا، تجربه رانندگی لذت‌بخشی را فراهم می‌کند.',
    },
    {
        src: '/assets/2.jpg',
        title: 'ماشین شاسی بلند',
        description: 'این ماشین شاسی بلند با فضای بزرگ و قابلیت‌های آفرود، مناسب سفرهای خانوادگی است.',
    },
    {
        src: '/assets/3.jpg',
        title: 'ماشین برقی',
        description: 'این ماشین برقی با تکنولوژی پیشرفته و کاهش آلودگی، آینده حمل و نقل را نشان می‌دهد.',
    },
    {
        src: '/assets/4.jpg',
        title: 'ماشین لوکس',
        description: 'این ماشین لوکس با امکانات رفاهی و طراحی فوق‌العاده، نماد ثروت و کیفیت است.',
    },
    {
        src: '/assets/1.jpg',
        title: 'ماشین اقتصادی',
        description: 'این ماشین اقتصادی با مصرف سوخت کم و قیمت مناسب، گزینه‌ای عالی برای خریداران است.',
    },
    {
        src: '/assets/2.jpg',
        title: 'ماشین کلاسیک',
        description: 'این ماشین کلاسیک با طراحی زیبا و جذاب، خاطرات قدیمی را زنده می‌کند.',
    },
];

export default function CarsPicker() {
    const [carsIndex, setCarsIndex] = useState(0);

    const colors = [
        'black',       // سیاه
        'white',       // سفید
        'black',   // ثانویه
        'white',  // پس‌زمینه
        'black',      // تأکید
        'white',  
        'black',    // اولیه
    ];

    return (
        <div dir="rtl" className="flex flex-col z-20">
            <div className="flex flex-col space-x-0">
                <div className="flex flex-row overflow-x-auto bg-gray-500 w-full text-white space-x-0 cursor-pointer">
                    {images.map((val, ind) => (
                        <h1
                            key={ind}
                            onClick={() => setCarsIndex(ind)}
                            className={`p-2 rounded ${carsIndex === ind ? 'bg-black' : 'bg-gray-600'}`}
                        >
                            {val.title}
                        </h1>
                    ))}
                </div>

                <div className="flex flex-row px-2 bg-gray-600 p-2 overflow-x-auto">
                    {colors.map((color, index) => (
                        <div
                            key={index}
                            className="rounded-full cursor-pointer w-6 h-6 m-1"
                            style={{ backgroundColor: color }}
                        ></div>
                    ))}
                </div>
            </div>

            <div className="w-full">
    <motion.div
    initial={{opacity:0.1}}
    className="w-full overflow-hidden" style={{ height: "450px" }}
    animate={{opacity:1}}
    transition={{duration:0.9 , ease:easeInOut}}
    key={carsIndex}
    
    > {/* ارتفاع دلخواه در اینجا */}
        <Image 
        
            src={images[carsIndex].src} 
            alt="تصویر" 
            width={10000} 
            height={240}
            style={{ objectFit: "cover", height: "100%", width: "100%" }} 
        />
    </motion.div>
</div>

        </div>
    );
}
