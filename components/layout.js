import Footer from "./footer";
import NavBar from "./nav";

const Layout = ({ children }) => {
    return (
        <>
            <NavBar />
            {children}
            <Footer />
        </>
    );
}

export default Layout;