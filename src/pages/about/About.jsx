import { Link, Outlet, useLocation } from "react-router-dom";
import { getActiveRoute } from "../../helpers/helper";
const About = () => {
    const location = useLocation();

    return (
        <>
            <section className="home-section grid grid-cols-[1fr,_3fr] bg-gray-800 h-screen">
                <div className="left-panel ml-12 border-l-[1px] font-paragraph text-cyan-500 border-gray-500 px-3  overflow-y-scroll">
                    <ul className="flex flex-col gap-1">
                        <li
                            className={`border border-gray-700 hover:bg-slate-800 rounded-md p-2 ${
                                getActiveRoute(location.pathname, "documentation")
                                    ? "nav-active"
                                    : ""
                            }`}>
                            <Link to="documentation">Documentation</Link>
                        </li>

                        <li
                            className={`border border-gray-700 hover:bg-slate-800 rounded-md p-2 ${
                                getActiveRoute(location.pathname, "team") ? "nav-active" : ""
                            }`}>
                            <Link to="team">Our team</Link>
                        </li>
                        <li
                            className={`border border-gray-700 hover:bg-slate-800 rounded-md p-2 ${
                                getActiveRoute(location.pathname, "mentors") ? "nav-active" : ""
                            }`}>
                            <Link to="mentors">Our mentors</Link>
                        </li>
                    </ul>
                </div>
                <div className="content overflow-y-scroll h-screen">
                    <Outlet />
                </div>
            </section>
        </>
    );
};

export default About;
