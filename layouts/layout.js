import Footer from "../components/footer";
import NavBar from "../components/nav";
import Head from 'next/head'
import { useEffect } from "react";

const Layout = ({ children }) => {
    useEffect(() => {
        let data = document.getElementById('__NEXT_DATA__')
        data ? data.remove() : undefined
        console.log(data)
    }, [])
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