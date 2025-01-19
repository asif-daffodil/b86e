import Navbar from "../../assets/Components/Navbar/Navbar";
import Footer from "../../assets/Components/Footer/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;