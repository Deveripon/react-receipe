import Footer from "../components/footer/footer";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";
import PageMeta from "../components/pagehelmet/PageMeta";

const Layout = () => {
    return (
        <>
            <PageMeta />
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;
