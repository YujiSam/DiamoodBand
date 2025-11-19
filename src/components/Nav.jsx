import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <header className="w-full flex flex-col items-center pt-8 relative">

            <nav className="font-base w-full flex justify-center items-center px-16">

                <ul className="flex gap-52 text-[#002060] font-semibold text-5xl tracking-wide">
                    <li className="cursor-pointer hover:opacity-70">INFO</li>
                    <li className="cursor-pointer hover:opacity-70">MEET</li>
                    <li className="cursor-pointer hover:opacity-70">MUSIC/VIDEO</li>
                    <li className="cursor-pointer hover:opacity-70">LETTER</li>
                    <li className="cursor-pointer hover:opacity-70">GALLERY</li>
                    <li className="cursor-pointer hover:opacity-70">MOODIEZ</li>
                    <li className="cursor-pointer hover:opacity-70">NEWS</li>
                </ul>

            </nav>

        </header>
    )
}

export default Nav
