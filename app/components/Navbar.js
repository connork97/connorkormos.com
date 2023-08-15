import Link from 'next/link';

const Navbar = () => {
    return (
        <ul className="flex fixed items-center top-10 space-x-20 font-bold text-5xl">
            <li>
                <Link href='/'>Home</Link>
            </li>
            <li>
                <Link href='/projects'>Projects</Link>
            </li>
            <li>
                <Link href='/about'>About</Link>
            </li>
            <li>
                <Link href='/contact'>Contact</Link>
            </li>
        </ul>
    )
}

export default Navbar;