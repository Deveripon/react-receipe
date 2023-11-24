import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <>
            <section className="header-section shadow-md">
                <div className="container m-auto flex justify-between items-center py-5">
                    <div className="brand">
                        <Link to="/">
                            <h3 className="font-heading font-bold text-3xl text-green-600">
                                devripon <span>.io</span>
                            </h3>
                        </Link>
                    </div>
                    <div className="menu font-heading font-bold text-xl">
                        <ul className="flex gap-10">
                            <li>
                                <NavLink className="nav-item hover:text-green-700" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-item hover:text-green-700" to="/blog">
                                    Blog
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-item hover:text-green-700" to="/about">
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-item hover:text-green-700" to="/contact">
                                    Contct
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-item hover:text-green-700" to="/receipe">
                                    Receipe
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="text-white bg-green-600 py-2 px-4 rounded-full hover:bg-green-800  transform transition duration-300 hover:ring-2 ring-green-600 ring-offset-2"
                                    to="/auth">
                                    Login | Sign Up
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Header;
