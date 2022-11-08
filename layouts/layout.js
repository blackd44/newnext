import Footer from "../components/footer";
import NavBar from "../components/nav";
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