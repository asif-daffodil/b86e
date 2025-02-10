import { Outlet } from "react-router";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const MainLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default MainLayout;