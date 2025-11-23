import BackgroundBubbles from "../components/BackgroundBubbles";

const Info = () => {
    return (

        <>
        <BackgroundBubbles 
            bubbles={[ 
                { src: "/imgs/ELIPSE.png", top: "-40%", left: "55%",size: "35vw", rotate: "180deg" }, 
                { src: "/imgs/ELIPSE.png", top: "-45%", left: "70%", size: "45vw", rotate: "180deg" }, 
                { src: "/imgs/ELIPSE.png", top: "80%", left: "60%", size: "35vw" }, 
                { src: "/imgs/ELIPSE.png", top: "55%", left: "75%", size: "35vw" }, 
        ]}/>

        <main className="grid grid-cols-1 md:grid-cols-2 content-start">

            <div className="relative w-full flex flex-col mt-12 md:mt-24">
                

                <img 
                    src="/imgs/INTEGRANTES.png"
                    className="relative z-10 h-auto w-auto object-contain mx-24"
                    style={{ filter: "drop-shadow(60px 0 0 #00165E)" }}
                />

            </div>

            <div
                className="
                    relative w-full flex flex-col justify-start

                    mt-12 md:mt-24 
                "
            >

                <img
                    src="/imgs/DIAMANTE.png"
                    className="
                        absolute -z-10 pointer-events-none select-none opacity-90

                        top-[-20px]
                        left-[0px]
                        w-[150px]

                        md:top-[-30px]
                        md:left-[-20px]
                        md:w-[180px]
                    "
                />

                {/* TÍTULO */}
                <h1
                    className="
                        relative z-10 text-gradient font-[inter] font-bold

                        text-5xl         
                        md:text-8xl       
                        pb-4
                    "
                >
                    History.
                </h1>

                {/* PARÁGRAFO */}
                <p
                    className="
                        mt-2 md:mt-8 relative z-10 text-[#1B43D6]

                        text-base         
                        md:text-2xl           
                    "
                >
                    Lorem ipsum dolor sit amet...
                </p>

            </div>

        </main>
        </>
    )
}

export default Info