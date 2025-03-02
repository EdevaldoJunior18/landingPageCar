import React, { useState, useEffect } from 'react';

interface CarouselProps {
    images: string[];
}

export default function Carousel({ images }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => (prev < 100 ? prev + 1 : 0));
        }, 100);

        if (progress === 100) {
            nextSlide();
        }

        return () => clearInterval(interval);
    }, [progress]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        setProgress(0);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
        setProgress(0);
    };

    if (!images || images.length === 0) {
        return <div className="text-center">Nenhuma imagem disponível</div>;
    }

    return (
        <div className="relative w-full mx-auto">
            <div className="overflow-clip rounded-lg">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <div key={index} className="min-w-full m-0 p-0">
                            <img
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] object-cover block border-none"
                                style={{ objectPosition: 'center 70%' }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={prevSlide}
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white"
                aria-label="Slide anterior">
                <svg width="18" height="28.64" viewBox="0 0 18 28.64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 2L2 14.32L16 26.64" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white"
                aria-label="Próximo slide" >
                <svg width="18" height="28.64" viewBox="0 0 18 28.64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2L16 14.32L2 26.64" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 w-full max-w-[120px]">
                {images.map((_, index) => (
                    <div key={index} className="relative w-6 h-[2px] bg-gray-400">
                        <div
                            className="absolute top-0 left-0 h-full bg-white"
                            style={{ width: currentIndex === index ? `${progress}%` : '0%' }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}