import React, { useState } from 'react';

const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    if (!images || images.length === 0) {
        return null;
    }

    return (
        <div className="relative">
            <div className="w-full h-96 flex items-center justify-center overflow-hidden outline outline-2 rounded-2xl">
                <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="w-full h-full object-contain" />
            </div>
            {images.length > 1 && (
                <>
                    <button onClick={handlePrev} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
                        &#9664;
                    </button>
                    <button onClick={handleNext} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
                        &#9654;
                    </button>
                </>
            )}
        </div>
    );
};

export default ImageCarousel;




