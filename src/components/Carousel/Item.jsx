// src/components/Carousel/Item.jsx
import React from "react";

function Item({ id, level, slide, direction }) {

    const getTransform = () => {
        switch (level) {
            case 0: return "translateX(0%) scale(1.1)";
            case 1: return "translateX(-120%) scale(0.9)";
            case -1: return "translateX(120%) scale(0.9)";
            case 2: return "translateX(-240%) scale(0.8)";
            case -2: return "translateX(240%) scale(0.8)";
            default: return "translateX(0%) scale(0.8)";
        }
    };

    const getAnimationClass = () => {
        if (!direction) return "";
        return direction === "left" ? "slide-left" : "slide-right";
    };

    const getStyles = () => {
        const base = {
            transform: getTransform(),
            transition: "all 0.55s cubic-bezier(.22,.61,.36,1)",
            width: "55%",
            height: "100%"
        };

        switch (level) {
            case 0:
                return { ...base, zIndex: 30, opacity: 1, filter: "blur(0px)" };
            case 1:
            case -1:
                return { ...base, zIndex: 20, opacity: 0.6, filter: "blur(2px)" };
            case 2:
            case -2:
                return { ...base, zIndex: 10, opacity: 0.4, filter: "blur(4px)" };
            default:
                return base;
        }
    };

    return (
        <div className={`item absolute ${getAnimationClass()}`} style={getStyles()}>
            <div className="w-full h-full flex justify-center items-center relative">

                <img
                    src={slide.bgImage}
                    alt={`Slide ${id}`}
                    className="absolute w-full h-full object-cover bg-anim"
                />

                {level !== 0 && (
                    <div
                        className="absolute inset-0 mix-blend-color z-10 opacity-60"
                        style={{ backgroundColor: slide.color }}
                    />
                )}

                <div className="relative z-20 mt-[730px]">
                    <img
                        src={slide.name}
                        alt={`Nome ${id}`}
                        className="w-auto object-contain"
                    />
                </div>
            </div>
        </div>
    );
}

export default Item;
