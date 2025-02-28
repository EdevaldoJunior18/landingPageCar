import React, { useState } from 'react';

interface CarouselProps {
    images: string[];
}

export default function Carousel({ images }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    };

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    };

    if (!images || images.length === 0) {
        return <div className="text-center">Nenhuma imagem disponível</div>;
    }

    return (
        <div className="relative w-full max-w-2xl mx-auto">
            <div className="overflow-hidden rounded-lg">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <div key={index} className="min-w-full">
                            <img
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-64 object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full hover:bg-gray-800/75 transition-colors"
                aria-label="Slide anterior"
            >
                ❮
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full hover:bg-gray-800/75 transition-colors"
                aria-label="Próximo slide"
            >
                ❯
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={`dot-${index}`}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'
                            }`}
                        aria-label={`Ir para slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}