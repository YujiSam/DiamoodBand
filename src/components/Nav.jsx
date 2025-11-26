import { Link, useLocation } from 'react-router-dom'

const Nav = ({ isHome = false }) => {
    const location = useLocation()

    // Detecta se está na página /letter
    const isLetterPage = location.pathname === "/letter"

    return (
        <header 
            className={`w-full flex flex-col items-center pt-8 relative transition 
            ${isLetterPage ? "bg-[#EDFFFD]" : "bg-transparent"}`}
        >
            <nav className="font-Diamood font-[900] w-full flex justify-center items-center px-16">
                <ul className="flex gap-24 text-[#002060] text-5xl tracking-wide">

                    {!isHome && (
                        <li className="group">
                            <Link to="/" className="inline-block cursor-pointer transition-colors duration-200">
                                <img src="/imgs/Logo.png" alt="Logo Diamood" className="w-32 h-auto -mt-4"/>
                            </Link>
                        </li>
                    )}

                    <li className="group">
                        <Link to="/info" className="inline-block cursor-pointer transition-colors duration-200">
                            <img src="/imgs/nav/INFO.png" className="w-20 h-auto -mt-4"/>
                            <span className="block h-[5px] bg-[#002060] scale-x-0 group-hover:scale-x-100 transition-transform origin-left mt-1 rounded-[10px]"></span>
                        </Link>
                    </li>

                    <li className="group">
                        <Link to="/meet" className="inline-block cursor-pointer transition-colors duration-200">
                            <img src="/imgs/nav/MEET.png" className="w-24 h-auto -mt-2"/>
                            <span className="block h-[5px] bg-[#002060] scale-x-0 group-hover:scale-x-100 transition-transform origin-left mt-1 rounded-[10px]"></span>
                        </Link>
                    </li>

                    <li className="group">
                        <Link className="inline-block cursor-pointer transition-colors duration-200">
                            <img src="/imgs/nav/MUSIC.png" className="w-38 h-auto -mt-6"/>
                            <span className="block h-[5px] bg-[#002060] scale-x-0 group-hover:scale-x-100 transition-transform origin-left mt-1 rounded-[10px]"></span>
                        </Link>
                    </li>

                    <li className="group">
                        <Link to="/letter" className="inline-block cursor-pointer transition-colors duration-200">
                            <img src="/imgs/nav/LETTER.png" className="w-20 h-auto -mt-4"/>
                            <span className="block h-[5px] bg-[#002060] scale-x-0 group-hover:scale-x-100 transition-transform origin-left mt-1 rounded-[10px]"></span>
                        </Link>
                    </li>

                    <li className="group">
                        <Link className="inline-block cursor-pointer transition-colors duration-200">
                            <img src="/imgs/nav/GALLERY.png" className="w-24 h-auto -mt-4"/>
                            <span className="block h-[5px] bg-[#002060] scale-x-0 group-hover:scale-x-100 transition-transform origin-left mt-1 rounded-[10px]"></span>
                        </Link>
                    </li>

                    <li className="group">
                        <Link className="inline-block cursor-pointer transition-colors duration-200">
                            <img src="/imgs/nav/MOODIEZ.png" className="w-24 h-auto -mt-4"/>
                            <span className="block h-[5px] bg-[#002060] scale-x-0 group-hover:scale-x-100 transition-transform origin-left mt-1 rounded-[10px]"></span>
                        </Link>
                    </li>

                    <li className="group">
                        <Link className="inline-block cursor-pointer transition-colors duration-200">
                            <img src="/imgs/nav/NEWS.png" className="w-20 h-auto -mt-14"/>
                            <span className="block h-[5px] bg-[#002060] scale-x-0 group-hover:scale-x-100 transition-transform origin-left mt-1 rounded-[10px]"></span>
                        </Link>
                    </li>

                </ul>
            </nav>
        </header>
    )
}

export default Nav
