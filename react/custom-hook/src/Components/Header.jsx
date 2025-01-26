import { Link } from "react-router";

const Header = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
};

export default Header;