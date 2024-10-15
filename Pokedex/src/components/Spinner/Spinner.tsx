import React, { useState } from 'react';

const PokeballSpinner: React.FC = () => {
    const [spinning, setSpinning] = useState(false);

    const handleClick = () => {
        setSpinning(!spinning);
    };

    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <div 
                className={`relative w-24 h-24 cursor-pointer transition-transform duration-500 ${spinning ? 'animate-spin' : ''}`} 
                onClick={handleClick}
            >
                <div className="absolute top-0 left-0 w-full h-1/2 bg-red-600 rounded-t-full border-b-8 border-white"></div>
                <div className="absolute border-2 bottom-0 left-0 w-full h-1/2 bg-white rounded-b-full"></div>
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="w-8 h-8 bg-black rounded-full border-4 border-white"></div>
                </div>
            </div>
        </div>
    );
};

export default PokeballSpinner;
