// src/components/Carousel/Carousel.jsx
import React, { useState, useEffect } from "react";
import Item from "./Item";
import "./carousel.css";

function Carousel({
    items,
    active = 0,
    autoSlide = false,
    autoSlideInterval = 3000
}) {
    const [curr, setCurr] = useState(active);
    const [direction, setDirection] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);

    const moveLeft = () => {
        setDirection("left");
        const newActive = (curr - 1 + items.length) % items.length;
        setCurr(newActive);
    };

    const moveRight = () => {
        setDirection("right");
        const newActive = (curr + 1) % items.length;
        setCurr(newActive);
    };

    const generateItems = () => {
        const comps = [];

        for (let i = curr - 2; i < curr + 3; i++) {
            let index = i;

            if (i < 0) index = items.length + i;
            else if (i >= items.length) index = i % items.length;

            const level = curr - i;

            comps.push(
                <Item
                    key={`${index}-${level}-${curr}`}
                    id={index}
                    level={level}
                    slide={items[index]}
                    direction={direction}
                />
            );
        }

        return comps;
    };

    // AUTO SLIDE
    useEffect(() => {
        if (!autoSlide) return;
        const interval = setInterval(moveRight, autoSlideInterval);
        return () => clearInterval(interval);
    }, [autoSlide, autoSlideInterval, curr]);

    // SCROLL
    useEffect(() => {
        let canScroll = true;

        const handleWheel = (e) => {
            if (!canScroll) return;
            canScroll = false;

            e.deltaY > 0 ? moveRight() : moveLeft();

            setTimeout(() => (canScroll = true), 500);
        };

        document.addEventListener("wheel", handleWheel);
        return () => document.removeEventListener("wheel", handleWheel);
    }, [curr]);

    // DRAG
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;

        const walk = e.pageX - startX;

        if (walk > 50) {
            moveLeft();
            setIsDragging(false);
        } else if (walk < -50) {
            moveRight();
            setIsDragging(false);
        }
    };

    const handleMouseUp = () => setIsDragging(false);

    // TOUCH
    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches[0].pageX);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;

        const walk = e.touches[0].pageX - startX;

        if (walk > 50) {
            moveLeft();
            setIsDragging(false);
        } else if (walk < -50) {
            moveRight();
            setIsDragging(false);
        }
    };

    const handleTouchEnd = () => setIsDragging(false);

    return (
        <div
            className="carousel-container noselect overflow-visible relative w-full h-[600px] cursor-grab"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div className="carousel-items relative w-full h-full flex items-center justify-center">
                {generateItems()}
            </div>
        </div>
    );
}

export default Carousel;
