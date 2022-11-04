import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {

    const router = useRouter();

    return (
        <nav>
            <div className="logo">Strikers</div>
            <ul className="menu">
                <Link className={router.pathname == "/" ? "active" : ""} href='/'><li>home</li></Link>
                <Link className={router.pathname.includes("/strikers") ? "active" : ""} href='/strikers'><li>team</li></Link>
                <Link className={router.pathname == "/about" ? "active" : ""} href='/about'><li>about</li></Link>
            </ul>
        </nav>
    );
}

export default NavBar;