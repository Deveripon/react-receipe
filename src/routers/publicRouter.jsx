import Home from "../pages/Home/Home";
import About from "../pages/about/About";
import Blog from "../pages/blog/Blog";
import Contact from "../pages/contact/Contact";
import Receipe from "../pages/Receipe/Receipe";
import Singlle from "../single/Singlle";
import Auth from "../pages/admin/login/Auth";
import Layout from "../layouts/Layout";
import Documentation from "../pages/about/pages/Documentation";
import Team from "../pages/about/pages/Team";
import Mentor from "../pages/about/pages/Mentor";
import Abouts from "../pages/about/pages/Abouts";

const publicRoutes = [
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
                children: [
                    {
                        path: "documentation",
                        element: <Documentation />,
                    },
                    {
                        path: "team",
                        element: <Team />,
                    },
                    {
                        path: "mentors",
                        element: <Mentor />,
                    },
                    {
                        path: "about",
                        element: <Abouts />,
                    },
                ],
            },
            {
                path: "/blog",
                element: <Blog />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/receipe",
                element: <Receipe />,
            },
            {
                path: "/receipe:slug",
                element: <Singlle />,
            },
            {
                path: "/auth",
                element: <Auth />,
            },
        ],
    },
];

export default publicRoutes;
