import Link from "next/link";

const NavBar = () => {
    return (
        <nav>
            <Link href='/'>home</Link>
            <Link href='/about'>about</Link>
        </nav>
    );
}

export default NavBar;