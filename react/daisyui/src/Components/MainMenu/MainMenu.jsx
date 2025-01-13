
const MainMenu = () => {
    return (
        <div className="navbar bg-primary text-primary-content">
            <div className="container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-primary rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li>
                                <a>About</a>
                                <ul className="p-2">
                                    <li><a>Our History</a></li>
                                    <li><a>Our Team</a></li>
                                </ul>
                            </li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Batch 86 E</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li>
                            <details>
                                <summary>About</summary>
                                <ul className="p-2 bg-primary w-max rounded-none -translate-x-1/2 left-1/2">
                                    <li><a>Our History</a></li>
                                    <li><a>Our Team</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MainMenu;