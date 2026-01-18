import { Link, useLocation } from 'react-router-dom'

const NavItem = ({ to, img, imgClass }) => {
    const location = useLocation()
    const isActive = location.pathname === to

    return (
        <li className="group">
        {isActive ? (
            <Link to="/">
            <img
                src="/imgs/Logo.png"
                alt="Logo Diamood"
                className="w-32 h-auto -mt-4"
            />
            </Link>
        ) : (
            <Link
            to={to}
            className="inline-block cursor-pointer transition-colors duration-200"
            >
            <img src={img} className={imgClass} />
            <span className="block h-[5px] bg-[#002060] scale-x-0 group-hover:scale-x-100 transition-transform origin-left mt-1 rounded-[10px]" />
            </Link>
        )}
        </li>
    )
    }

    const Nav = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-50 flex flex-col items-center pt-8 transition">
        <nav className="w-full flex justify-center items-center px-16">
            <ul className="flex gap-24 text-[#002060]">

            <NavItem
                to="/info"
                img="/imgs/nav/INFO.png"
                imgClass="w-20 h-auto -mt-2"
            />

            <NavItem
                to="/meet"
                img="/imgs/nav/MEET.png"
                imgClass="w-24 h-auto -mt-2"
            />

            <NavItem
                to="/musicvideo"
                img="/imgs/nav/MUSIC.png"
                imgClass="w-38 h-auto -mt-6"
            />

            <NavItem
                to="/letter"
                img="/imgs/nav/LETTER.png"
                imgClass="w-20 h-auto -mt-2"
            />

            <NavItem
                to="/gallery"
                img="/imgs/nav/GALLERY.png"
                imgClass="w-24 h-auto -mt-2"
            />

            <NavItem
                to="/moodiez"
                img="/imgs/nav/MOODIEZ.png"
                imgClass="w-24 h-auto -mt-2"
            />

            <NavItem
                to="/news"
                img="/imgs/nav/NEWS.png"
                imgClass="w-20 h-auto -mt-2"
            />

            </ul>
        </nav>
        </header>
    )
    }

export default Nav
