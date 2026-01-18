import BackgroundBubbles from "../components/BackgroundBubbles";

const Letter = () => {
    return (
        <div className="relative w-full min-h-screen bg-[#EDFFFD]">

            {/* FLOATING BUBBLES */}
            <div className="absolute inset-0 z-10">
                <BackgroundBubbles 
                    bubbles={[
                        { src: "/imgs/ELIPSE.png", top: "10%", left: "13%", size: "15vw"}, 
                        { src: "/imgs/ELIPSE.png", top: "45%", left: "-7%", size: "25vw"},  
                        { src: "/imgs/ELIPSE.png", top: "70%", left: "-5%", size: "35vw"}, 
                        { src: "/imgs/ELIPSE.png", top: "65%", left: "85%", size: "20vw"}, 
                        { src: "/imgs/ELIPSE.png", top: "-10%", left: "75%", size: "30vw"}, 
                    ]}
                />
            </div>

            {/* MAIN CONTENT */}
            <main className="relative z-20 w-full flex flex-col items-center justify-start pt-4 pb-32 select-none pt-32">

                <h1 className="text-[6vw] font-light italic text-gradient tracking-wide font-[Ephesis] mb-4">
                    A Letter For You...
                </h1>

                {/* LETTER IMAGE + TEXT */}
                <div className="relative mt-12">

                    {/* BACK PAGE (rotated) */}
                    <img 
                        src="/imgs/Carta.png" 
                        alt="Carta-1"
                        className="w-[55vw] rotate-[8deg] translate-x-[8vw] absolute drop-shadow-lg"
                    />

                    {/* FRONT PAGE */}
                    <img 
                        src="/imgs/Carta.png" 
                        alt="Carta-2"
                        className="w-[55vw] drop-shadow-lg"
                    />

                    {/* TEXT OVER THE LETTER */}
                    <div className="absolute top-[6%] left-[6%] w-[85%] text-[#1A4FFF] text-[0.9vw] leading-relaxed font-[Archivo]">
                        <span className="absolute w-full h-[3px] bg-[#1A4FFF] -mt-8"></span>
                        <div className="w-full flex justify-between items-center">
                            <p className="font-bold md:max-w-sm text-[1.2vw]">
                                A LETTER MADE WITH SO SO SO MUCH LOVE FROM DIAMOOD &lt;3
                            </p>
                            <p className="font-bold text-[1.3vw] -mt-10">
                                Tickets for Show! (11) 98920-2683
                            </p>
                        </div>

                        <p className="mt-4 ml-2 text-[1vw]">November 12, 2025</p>

                        <div className="mt-6 px-32 space-y-4">

                            <p>
                                To: Moodie<br />
                                Mogi das Cruzes,<br />
                                São Paulo, Brazil
                            </p>

                            <p>To Whom It May Concern,</p>

                            <p>
                                We’re writing on behalf of Evergrove Commons to express our sincere thanks 
                                for your recent inquiry regarding partnership opportunities. As a nonprofit 
                                community hub dedicated to lifelong learning and neighborhood connection, 
                                we’re always looking for ways to collaborate with like-minded organizations.
                            </p>

                            <p>
                                Your proposal to co-host a series of weekend wellness workshops aligns 
                                beautifully with our spring programming goals. We would love to discuss 
                                logistics and promotional strategies in more detail.
                            </p>

                            <p>
                                Please let us know a convenient time to connect next week. We look forward 
                                to building something meaningful together—right here in the heart of 
                                Brookfield.
                            </p>

                            <p>With Love,</p>

                            <p>
                                Avih Molina, André Cruz, Caio Naka, Enzo Braga, Thiago Andrade<br />
                                The members<br />
                                Diamood
                            </p>
                        </div>

                        <div className="absolute bottom-[-100%] w-full flex justify-between items-center">
                            <p className="font-bold text-[1.5vw]">DIAMOOD</p>
                            <p className="text-[1vw]">Diamood.com.br</p>
                        </div>

                    </div>
                </div>

            </main>
        </div>
    );
};

export default Letter;
