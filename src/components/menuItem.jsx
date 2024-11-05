"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const Menu = () => {
    const [isRotated, setIsRotated] = useState(false);

    const handleClick = () => {
        setIsRotated(!isRotated);
    };

    return (
        <div onClick={handleClick} className="flex flex-col justify-center items-center pt-16 space-y-px cursor-pointer">
            <motion.div
                animate={{ rotate: isRotated ? 45 : 0 }}
                transition={{ duration: 0.5 }}
                className="w-10 h-1 bg-black"
                style={{originX: 0.5 ,originY:0.5 }}
            ></motion.div>

            <motion.div
                className={`w-10 h-1 bg-black ${isRotated ? 'hidden' : 'block'}`}
            ></motion.div>

            <motion.div
                animate={{ rotate: isRotated ? -45 : 0 }}
                transition={{ duration: 0.5 }}
                className="w-10 h-1 bg-black"
                style={{ originX: 0.5 ,originY:0.5 }}
            ></motion.div>
        </div>
    );
}

export default Menu;
