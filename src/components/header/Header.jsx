import { Link, NavLink, useLocation } from "react-router-dom";
import { getActiveRoute } from "../../helpers/helper";

const Header = () => {
    const location = useLocation();
    return (
        <>
            <section className="header-section shadow-md bg-gray-800">
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
                                <NavLink
                                    className={`nav-item hover:text-purple-500 ${
                                        location.pathname === "/" ? "nav-active" : ""
                                    }`}
                                    to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={
                                        getActiveRoute(location.pathname, "blog")
                                            ? "nav-active"
                                            : "" + `nav-item hover:text-purple-500`
                                    }
                                    to="/blog">
                                    Blog
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={`nav-item hover:text-purple-500 ${
                                        getActiveRoute(location.pathname, "about")
                                            ? "nav-active"
                                            : ""
                                    }`}
                                    to="/about">
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={`nav-item hover:text-purple-500 ${
                                        getActiveRoute(location.pathname, "contact")
                                            ? "nav-active"
                                            : ""
                                    }`}
                                    to="/contact">
                                    Contct
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={`nav-item hover:text-purple-500 ${
                                        getActiveRoute(location.pathname, "receipe")
                                            ? "nav-active"
                                            : ""
                                    }`}
                                    to="/receipe">
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
