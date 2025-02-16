import { NavLink } from "react-router";

const Header = () => {
    return (
        <div className="w-full bg-blue-500 text-white flex justify-between p-8">
            <h1 className="text-2xl font-semibold">My E-Commerce</h1>
            <nav className="flex gap-4">
                <NavLink to="/" className={({isActive}) => isActive ? "text-white font-bold":"text-white" }>Home</NavLink>
                <NavLink to="/all-products" className={({isActive}) => isActive ? "text-white font-bold":"text-white" }>All Products</NavLink>
            </nav>
        </div>
    );
};

export default Header;