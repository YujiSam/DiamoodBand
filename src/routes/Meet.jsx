import React from "react";
import BackgroundBubbles from "../components/BackgroundBubbles";
import Carousel from "../components/Carousel/Carousel";

const Meet = () => {

    const blueTones = [
        '#0048FF',
        '#0066FF',
        '#0033CC',
        '#0055EE',
        '#0077FF'
    ];

    const slides = [
        { id: 1, bgImage: "imgs/membros/Naka.png",   color: blueTones[0], name: "imgs/nomes/Naka-Nome.png" },
        { id: 2, bgImage: "imgs/membros/Thiago.png", color: blueTones[1], name: "imgs/nomes/Thiago-Nome.png" },
        { id: 3, bgImage: "imgs/membros/Avih.png",   color: blueTones[2], name: "imgs/nomes/Avih-Nome.png" },
        { id: 4, bgImage: "imgs/membros/Andre.png",  color: blueTones[3], name: "imgs/nomes/Andre-Nome.png" },
        { id: 5, bgImage: "imgs/membros/Enzo.png",   color: blueTones[4], name: "imgs/nomes/Enzo-Nome.png" }
    ];

    return (
        <>
            <BackgroundBubbles
                bubbles={[
                    { src: "/imgs/ELIPSE.png", top: "10%", left: "-18%", size: "35vw" },
                    { src: "/imgs/ELIPSE.png", top: "-20%", left: "78%", size: "30vw" },
                    { src: "/imgs/ELIPSE.png", top: "75%", left: "0%", size: "35vw" },
                    { src: "/imgs/ELIPSE.png", top: "60%", left: "75%", size: "35vw" },
                ]}
            />

            <main 
                className="w-full flex flex-col items-center justify-start px-4"
                style={{ userSelect: 'none' }}
            >
                <h1 className="text-center font-[inter] text-gradient font-bold text-xl md:text-9xl mb-12">
                    meet the<br />
                    <span className="text-4xl md:text-9xl">DIAMOOD.</span>
                </h1>

                <section className="relative max-w-sm w-full">
                    <Carousel
                        items={slides}
                        active={2}
                        autoSlide={true}
                        autoSlideInterval={5000}
                    />
                </section>
            </main>
        </>
    );
};

export default Meet;
