import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <header className="w-full flex flex-col items-center pt-8 relative">

            <nav className="font-Diamood font-[900] w-full flex justify-center items-center px-16">

                <ul className="flex gap-36 text-[#002060] text-5xl tracking-wide">
                    <li className="group">
                        <Link to="/info" className="inline-block cursor-pointer transition-colors duration-200">
                            Info
                            <span className="block h-[5px] bg-[#002060] scale-x-0 group-hover:scale-x-100 transition-transform origin-left mt-1 rounded-[10px]"></span>
                        </Link>
                    </li>
                    <li className="group">
                        <Link className="inline-block cursor-pointer transition-colors duration-200">
                            Meet
                            <span className="block h-[5px] bg-[#002060] scale-x-0 group-hover:scale-x-100 transition-transform origin-left mt-1 rounded-[10px]"></span>
                        </Link>
                    </li>
                    <li className="group">
                        <Link className="inline-block cursor-pointer transition-colors duration-200">
                            Music/Video
                            <span className="block h-[5px] bg-[#002060] scale-x-0 group-hover:scale-x-100 transition-transform origin-left mt-1 rounded-[10px]"></span>
                        </Link>
                    </li>
                    <li className="group">
                        <Link className="inline-block cursor-pointer transition-colors duration-200">
                            Letter
                            <span className="block h-[5px] bg-[#002060] scale-x-0 group-hover:scale-x-100 transition-transform origin-left mt-1 rounded-[10px]"></span>
                        </Link>
                    </li>
                    <li className="group">
                        <Link className="inline-block cursor-pointer transition-colors duration-200">
                            Gallery
                            <span className="block h-[5px] bg-[#002060] scale-x-0 group-hover:scale-x-100 transition-transform origin-left mt-1 rounded-[10px]"></span>
                        </Link>
                    </li>
                    <li className="group">
                        <Link className="inline-block cursor-pointer transition-colors duration-200">
                            Moodiez
                            <span className="block h-[5px] bg-[#002060] scale-x-0 group-hover:scale-x-100 transition-transform origin-left mt-1 rounded-[10px]"></span>
                        </Link>
                    </li>
                    <li className="group">
                        <Link className="inline-block cursor-pointer transition-colors duration-200">
                            News
                            <span className="block h-[5px] bg-[#002060] scale-x-0 group-hover:scale-x-100 transition-transform origin-left mt-1 rounded-[10px]"></span>
                        </Link>
                    </li>
                </ul>

            </nav>

        </header>
    )
}

export default Nav
