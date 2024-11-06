
"use client"
import { useState } from "react";
import { motion } from "framer-motion";
const Menu = () => {
    const [isRotated, setIsRotated] = useState(false);

    const handleClick = () => {
        setIsRotated(!isRotated);
 
    };

    return (
        <div onClick={handleClick} className="w-10 flex flex-col space-y-px pt-16 cursor-pointer">
            <motion.div
                className="w-5 h-1 bg-black self-start"
                animate={{ rotate: isRotated ? -45 : 0, y: isRotated ? 4 : 0, x: isRotated ? -6 : 0 }}
                transition={{ duration: 2 }}
                style={{ originX: 0, originY: 0 }}
            ></motion.div>

            <motion.div
                animate={{ rotate: isRotated ? 45 : 0 }}
                transition={{ duration: 2 }}
                style={{ originX: 0.5, originY: 0 }}
                className="w-10 h-1 bg-black"
            ></motion.div>

            <motion.div
                animate={{ rotate: isRotated ? -45 : 0 }}
                transition={{ duration: 2 }}
                style={{ originX: 0.5, originY: 0.5 }}
                className="w-5 h-1 bg-black self-end"
            ></motion.div>
        </div>
    );
};

export default Menu;
