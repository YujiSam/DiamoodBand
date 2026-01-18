import BackgroundBubbles from "../components/BackgroundBubbles";

const MusicVideo = () => {
    return (
        <>
            {/* BACKGROUND BUBBLES */}
            {/* acima do fundo base e abaixo do Nav */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <BackgroundBubbles 
                    bubbles={[ 
                        { src: "/imgs/ELIPSE.png", top: "10%", left: "25%", size: "10vw"}, 
                        { src: "/imgs/ELIPSE.png", top: "15%", left: "33%", size: "15vw"},
                        { src: "/imgs/ELIPSE.png", top: "20%", left: "15%", size: "15vw"},
                        { src: "/imgs/ELIPSE.png", top: "37%", left: "10%", size: "15vw"},
                        { src: "/imgs/ELIPSE-1.png", top: "37%", left: "75%", size: "15vw"},
                        { src: "/imgs/ELIPSE-1.png", top: "60%", left: "75%", size: "15vw"},
                        { src: "/imgs/ELIPSE-1.png", top: "80%", left: "67%", size: "12vw"},
                        { src: "/imgs/ELIPSE-1.png", top: "65%", left: "55%", size: "15vw"},
                    ]}
                />
            </div>

            <main className="relative w-full h-screen overflow-hidden">

                <div 
                    className="absolute inset-0 -z-10"
                    style={{
                        background: `
                            linear-gradient(
                                135deg,
                                #EDFFFD 0%,
                                #EDFFFD 50%,
                                #0E4B55 0%,
                                #0E4B55 100%
                            )
                        `
                    }}
                />

                {/* CONTEÚDO */}
                <div className="relative z-10 w-full h-full flex items-center justify-between px-[8vw]">

                    <div className="flex flex-col items-start">
                        <h2 className="text-[4vw] font-bold text-[#3F5BFF] mb-6">
                            Singles.
                        </h2>
                    </div>

                </div>

            </main>
        </>
    );
};

export default MusicVideo;
