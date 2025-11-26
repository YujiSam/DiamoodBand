import React, { useState, useEffect } from 'react';
import BackgroundBubbles from "../components/BackgroundBubbles";

// Componente do Carousel
function Carousel({
    children: slides,
    autoSlide = false,
    autoSlideInterval = 3000,
    initialSlide = 2
}) {
    const [curr, setCurr] = useState(initialSlide);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);

    const totalSlides = slides.length;

    const prev = () => {
        setCurr((curr) => (curr === 0 ? totalSlides - 1 : curr - 1));
    };

    const next = () => {
        setCurr((curr) => (curr === totalSlides - 1 ? 0 : curr + 1));
    };

    // Auto slide
    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, [autoSlide, autoSlideInterval]);

    // Mouse wheel scroll
    useEffect(() => {
        let canScroll = true;
        const scrollDelay = 500;

        const handleWheel = (e) => {
            if (!canScroll) return;
            
            canScroll = false;
            
            if (e.deltaY > 0) {
                next();
            } else {
                prev();
            }
            
            setTimeout(() => {
                canScroll = true;
            }, scrollDelay);
        };

        document.addEventListener('wheel', handleWheel);
        return () => document.removeEventListener('wheel', handleWheel);
    }, []);

    // Drag events
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const x = e.pageX;
        const walk = (x - startX);
        
        if (walk > 50) {
            prev();
            setIsDragging(false);
        } else if (walk < -50) {
            next();
            setIsDragging(false);
        }
    };

    // Touch events para mobile
    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches[0].pageX);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const x = e.touches[0].pageX;
        const walk = (x - startX);
        
        if (walk > 50) {
            prev();
            setIsDragging(false);
        } else if (walk < -50) {
            next();
            setIsDragging(false);
        }
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    return (
        <div 
            className="overflow-visible relative w-full cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div
                className="flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={slide.key}
                        className={`flex-shrink-0 w-full flex justify-center items-center transition-all duration-500 ease-out ${
                            index === curr 
                                ? 'scale-110 opacity-100 z-20' 
                                : index === curr - 1 || index === curr + 1 
                                ? 'scale-90 opacity-60 blur-[2px] z-10' 
                                : 'scale-80 opacity-40 blur-[2px] z-0'
                        }`}
                    >
                        {React.cloneElement(slide, { 
                            isActive: index === curr 
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
}

const Meet = () => {
    const blueTones = [
        '#0048FF', // Azul principal
        '#0066FF', // Mais claro
        '#0033CC', // Mais escuro
        '#0055EE', // Intermediário
        '#0077FF'  // Mais claro ainda
    ];

    const slides = [
        {
            id: 1,
            bgImage: "imgs/membros/Naka.png",
            color: blueTones[0],
            name: "imgs/nomes/Naka-Nome.png"
        },
        {
            id: 2,
            bgImage: "imgs/membros/Thiago.png",
            color: blueTones[1],
            name: "imgs/nomes/Thiago-Nome.png"
        },
        {
            id: 3,
            bgImage: "imgs/membros/Avih.png",
            color: blueTones[2],
            name: "imgs/nomes/Avih-Nome.png"
        },
        {
            id: 4,
            bgImage: "imgs/membros/Andre.png",
            color: blueTones[3],
            name: "imgs/nomes/Andre-Nome.png"
        },
        {
            id: 5,
            bgImage: "imgs/membros/Enzo.png",
            color: blueTones[4],
            name: "imgs/nomes/Enzo-Nome.png"
        }
    ];

    const SlideComponent = ({ slide, isActive = false }) => (
        <div 
            className="w-full h-[600px] flex justify-center items-center relative group"
            style={{ userSelect: 'none' }}
        >
            <img 
                src={slide.bgImage}
                alt={`Membro ${slide.id}`}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                    console.log(`Erro ao carregar imagem: ${slide.bgImage}`);
                }}
            />
            <div className="relative z-20 mt-[750px]">
                <img 
                    src={slide.name}
                    alt={`Nome ${slide.id}`}
                    className="h-12 w-auto object-contain"
                    onError={(e) => {
                        console.log(`Erro ao carregar imagem: ${slide.name}`);
                    }}
                />
            </div>
            {/* Overlay azul apenas se NÃO for ativo */}
            {!isActive && (
                <div 
                    className="absolute inset-0 mix-blend-color z-10 opacity-60"
                    style={{ backgroundColor: slide.color }}
                ></div>
            )}
        </div>
    );

    const slideComponents = slides.map((slide) => (
        <SlideComponent 
            key={slide.id}
            slide={slide}
        />
    ));

    return (
        <>
            {/* Bolhas de fundo */}
            <BackgroundBubbles 
                bubbles={[
                    { src: "/imgs/ELIPSE.png", top: "10%", left: "-18%", size: "35vw" },
                    { src: "/imgs/ELIPSE.png", top: "-20%", left: "78%", size: "30vw", rotate: "180deg" },
                    { src: "/imgs/ELIPSE.png", top: "75%", left: "0%", size: "35vw" },
                    { src: "/imgs/ELIPSE.png", top: "60%", left: "75%", size: "35vw" },
                ]}
            />

            <main 
                className="w-full flex flex-col items-center justify-start px-4"
                style={{ userSelect: 'none' }}
                onMouseDown={(e) => e.preventDefault()}
            >

                {/* TÍTULO */}
                <h1 className="text-center font-[inter] text-gradient font-bold text-xl md:text-9xl lg:text-9xl mb-12">
                    meet the<br />
                    <span className="text-4xl md:text-9xl lg:text-9xl">
                        DIAMOOD.
                    </span>
                </h1>

                <section className="relative max-w-3xs w-full">
                    <Carousel 
                        autoSlide={true}
                        autoSlideInterval={5000}
                        initialSlide={2} 
                    >
                        {slideComponents}
                    </Carousel>
                </section>

            </main>
        </>
    );
};

export default Meet;