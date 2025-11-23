const Footer = () => {
    return (
        <footer className="w-full flex items-center justify-between px-6 py-4 absolute bottom-0 left-0">

        {/* Texto do lado esquerdo */}
        <p className="text-2xl text-gray-700 mt-10">
            Developed By Yuji Osugi
        </p>

        {/* Ícones sociais */}
        <div className="flex items-center gap-3 md:mt-8">
            <a href="" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <img src="/icons/FACEBOOK.png" className="w-6.5 h-6.5 cursor-pointer hover:opacity-80" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/diamoodband/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img src="/icons/INSTAGRAM.png" className="w-6.5 h-6.5 cursor-pointer hover:opacity-80" alt="Instagram" />
            </a>
            <a href="diamooddocs@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                <img src="/icons/EMAIL.png" className="w-6.5 h-6.5 cursor-pointer hover:opacity-80" alt="Email" />
            </a>
            <a href="https://x.com/Diamoodb" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                <img src="/icons/X.png" className="w-6.5 h-6.5 cursor-pointer hover:opacity-80" alt="X" />
            </a>
            <a href="https://www.youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <img src="/icons/YOUTUBE.png" className="w-6.5 h-6.5 cursor-pointer hover:opacity-80" alt="YouTube" />
            </a>
            <a href="https://open.spotify.com/intl-pt/artist/6KHdTdbY21HJO4X4rVMqIz?si=Z9Orgkc1TKqpVM3L_2HQEA" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
                <img src="/icons/SPOTIFY.png" className="w-6.5 h-6.5 cursor-pointer hover:opacity-80" alt="Spotify" />
            </a>
            <a href="https://music.apple.com/pt/artist/diamood/1813806628" target="_blank" rel="noopener noreferrer" aria-label="Apple Music">
                <img src="/icons/APPLE.png" className="w-6.5 h-6.5 cursor-pointer hover:opacity-80" alt="Apple Music" />
            </a>
        </div>

        </footer>
    );
    };

export default Footer;

