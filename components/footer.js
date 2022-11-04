import Link from 'next/link'

const Footer = () => {
    return (
        <footer>
            © {new Date().getFullYear()} <Link href='/'>Strikers</Link>
        </footer>
    );
}

export default Footer;