import Footer from "./footer";
import NavBar from "./nav";
import Head from 'next/head'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Strikers</title>
            </Head>
            <NavBar />
            {children}
            <Footer />
        </>
    );
}

export default Layout;