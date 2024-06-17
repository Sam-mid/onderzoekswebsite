import React from 'react';
import ImageCarousel from './ImageCarousel';

const Modal = ({ show, onClose, title, description, onderschrift, outcomes, images }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className="bg-white p-8 rounded-lg shadow-lg relative z-10 w-5/6 h-5/6 max-w-none mx-auto overflow-y-auto">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 font-bold rounded"
                >
                    X
                </button>
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-around items-center h-full">
                    <div className="w-full md:w-1/2 px-4">
                        <h2 className="text-2xl font-bold mb-4">{title}</h2>
                        <p className="mb-4">{description}</p>
                        {outcomes && outcomes.length > 0 && (
                            <div className="mt-4">
                                <h3 className="text-xl font-bold mb-2">Belangrijke uitkomsten van deze test waren:</h3>
                                <ul className="list-disc list-inside ml-4">
                                    {outcomes.map((outcome, index) => (
                                        <li key={index} className="mb-2">{outcome}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="w-full md:w-1/2 px-4 mt-10 md:mt-0">
                        {images && images.length > 0 && (
                            <>
                                <ImageCarousel images={images} />
                                <p className="text-center text-m mt-4">{onderschrift}</p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;





