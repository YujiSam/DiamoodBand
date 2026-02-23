import DotGrid from '../components/DotGrid.jsx';

const Home = () => {
    return (
        <main className="w-full flex flex-col items-center justify-center select-none pt-32">
            
            <div className="fixed top-0 w-full h-full -z-10">
                <DotGrid
                    dotSize={10}
                    gap={15}
                    baseColor="#fff"
                    activeColor="#5227FF"
                    proximity={120}
                    shockRadius={300}
                    shockStrength={5}
                    resistance={750}
                    returnDuration={1.5}
                />
            </div>

            {/* Conteúdo */}
            <div className="z-10 flex flex-col items-center">
                <img 
                    src="/imgs/Diamood.png" 
                    alt="Logo Diamood"
                    className="mb-10 mt-16"
                />
                
                <button className="mt-15">
                    <img 
                    src="/imgs/PLAY.png" 
                    alt="Play"
                    className="w-12 hover:scale-110 transition-transform cursor-pointer" 
                    />
                </button>
            </div>
        </main>
    )
}

export default Home