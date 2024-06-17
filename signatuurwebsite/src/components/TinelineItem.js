import React, { useState } from 'react';
import Modal from './Modal';

const TimelineItem = ({ date, title, description, doel, onderschrift, outcomes, isEven, images }) => {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    return (
        <>
            <div
                className={`flex ${isEven ? 'justify-start' : 'justify-end'} mb-8 w-full cursor-pointer`}
                onClick={handleClick}
            >
                <div className={`relative w-1/2 ${isEven ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="p-4 bg-gray-200 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                        <span className="font-bold italic">{date}</span>
                        <h2 className="text-2xl font-bold my-2">{title}</h2>
                        <p>{doel}</p>
                    </div>
                    <span
                        className={`absolute w-6 h-6 bg-green-500 rounded-full top-4 ${
                            isEven ? 'right-0 -mr-3' : 'left-0 -ml-3'
                        }`}
                    ></span>
                </div>
            </div>
            <Modal
                show={showModal}
                onClose={handleClose}
                title={title}
                doel={doel}
                description={description}
                images={images}
                onderschrift={onderschrift}
                outcomes={outcomes}
            />
        </>
    );
};

export default TimelineItem;

