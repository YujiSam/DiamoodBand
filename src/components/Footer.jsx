const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 w-full flex items-center justify-between px-6 py-4">

            {/* Texto esquerdo */}
            <p className="text-2xl text-gray-700">
                Developed By Yuji Osugi
            </p>

            {/* Ícones */}
            <div className="flex items-center gap-3">
                <a href="#" aria-label="Facebook">
                    <img src="/icons/FACEBOOK.png" className="w-6 h-6 hover:opacity-80" />
                </a>
                <a href="https://www.instagram.com/diamoodband/" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/INSTAGRAM.png" className="w-6 h-6 hover:opacity-80" />
                </a>
                <a href="mailto:diamooddocs@gmail.com">
                    <img src="/icons/EMAIL.png" className="w-6 h-6 hover:opacity-80" />
                </a>
                <a href="https://x.com/Diamoodb" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/X.png" className="w-6 h-6 hover:opacity-80" />
                </a>
                <a href="https://www.youtube.com/@Diamood" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/YOUTUBE.png" className="w-6 h-6 hover:opacity-80" />
                </a>
                <a href="https://open.spotify.com/intl-pt/artist/6KHdTdbY21HJO4X4rVMqIz">
                    <img src="/icons/SPOTIFY.png" className="w-6 h-6 hover:opacity-80" />
                </a>
                <a href="https://music.apple.com/pt/artist/diamood/1813806628">
                    <img src="/icons/APPLE.png" className="w-6 h-6 hover:opacity-80" />
                </a>
            </div>

        </footer>
    );
};

export default Footer;
