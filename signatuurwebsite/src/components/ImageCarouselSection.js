import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import CSS for carousel
import { Carousel } from 'react-responsive-carousel';

const ImageCarouselSection = ({ images }) => {
    return (
        <section className="flex flex-col justify-center items-center bg-gray-100 py-12">
            <div className="w-full max-w-4xl px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Afbeeldingen</h2>
                <Carousel
                    showThumbs={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    dynamicHeight={false}
                    className="rounded-lg shadow-lg"
                >
                    {images.map((image, index) => (
                        <div key={index}>
                            <img src={image.src} alt={image.alt} className="object-contain h-96 w-full" />
                            <p className="legend">{image.caption}</p>
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    );
}

export default ImageCarouselSection;