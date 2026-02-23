import { useLocation } from 'react-router-dom'

const NavItem = ({ to, img, bgImg, navImgClass, transitionImgClass, navigateWithTransition }) => {
    const location = useLocation()
    const isActive = location.pathname === to

    return (
        <li className="group cursor-pointer">

        {isActive ? (
            <div onClick={() => navigateWithTransition("/", "/imgs/Logo.png", "/imgs/DIAMANTE-TRANSPARENTE.png")}>
                <img
                    src="/imgs/Logo.png"
                    alt="Logo Diamood"
                    className="w-32 h-auto -mt-4"
                />
            </div>
        ) : (
            <div
                onClick={() => navigateWithTransition(to, img, bgImg, transitionImgClass)}
                className="inline-block transition-colors duration-200"
            >
                <img src={img} className={navImgClass} />

                <span className="block h-[5px] bg-[#002060] scale-x-0 group-hover:scale-x-100 transition-transform origin-left mt-1 rounded-[10px]" />
            </div>
        )}

        </li>
    )
}

const Nav = ({ navigateWithTransition }) => {
    return (
        <header className="fixed top-0 left-0 w-full z-50 flex flex-col items-center pt-8 transition">
        <nav className="w-full flex justify-center items-center px-16">
            <ul className="flex gap-24 text-[#002060]">

            <NavItem to="/info" img="/imgs/nav/INFO.png" bgImg="/imgs/DIAMANTE-TRANSPARENTE.png" navImgClass="w-20 h-auto -mt-2" transitionImgClass="w-76 h-auto" navigateWithTransition={navigateWithTransition}/>
            <NavItem to="/meet" img="/imgs/nav/MEET.png" bgImg="/imgs/DIAMANTE-TRANSPARENTE.png" navImgClass="w-24 h-auto -mt-2" transitionImgClass="w-84 h-auto" navigateWithTransition={navigateWithTransition}/>
            <NavItem to="/musicvideo" img="/imgs/nav/MUSIC.png" bgImg="/imgs/DIAMANTE-TRANSPARENTE.png" navImgClass="w-38 h-auto -mt-2" transitionImgClass="w-110 h-auto" navigateWithTransition={navigateWithTransition}/>
            <NavItem to="/letter" img="/imgs/nav/LETTER.png" bgImg="/imgs/DIAMANTE-TRANSPARENTE.png" navImgClass="w-20 h-auto -mt-2" transitionImgClass="w-76 h-auto" navigateWithTransition={navigateWithTransition}/>
            <NavItem to="/gallery" img="/imgs/nav/GALLERY.png" bgImg="/imgs/DIAMANTE-TRANSPARENTE.png" navImgClass="w-24 h-auto -mt-2" navigateWithTransition={navigateWithTransition}/>
            <NavItem to="/moodiez" img="/imgs/nav/MOODIEZ.png" bgImg="/imgs/DIAMANTE-TRANSPARENTE.png" navImgClass="w-24 h-auto -mt-2" navigateWithTransition={navigateWithTransition}/>
            <NavItem to="/news" img="/imgs/nav/NEWS.png" bgImg="/imgs/DIAMANTE-TRANSPARENTE.png" navImgClass="w-20 h-auto -mt-2"transitionImgClass="w-76 h-auto" navigateWithTransition={navigateWithTransition}/>

            </ul>
        </nav>
        </header>
    )
}

export default Nav
