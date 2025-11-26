const Home = () => {
    return (
        <main className="w-full flex flex-col items-center justify-center min-h-[calc(100vh-6rem)] select-none">

        {/* LOGO CENTRAL */}
        <img 
            src="/imgs/Diamood.png" 
            alt="Logo Diamood"
            className="mb-10 mt-0"
        />

        {/* BOTÃO PLAY */}
        <button className="mt-15">
            <img 
            src="/imgs/PLAY.png" 
            alt="Play"
            className="w-12 hover:scale-110 transition-transform cursor-pointer" 
            />
        </button>

        </main>
    )
}

export default Home
