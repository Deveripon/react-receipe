import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/about/About";
import Blog from "../pages/blog/Blog";
import Contact from "../pages/contact/Contact";
import Receipe from "../pages/Receipe/Receipe";
import Singlle from "../single/Singlle";
import Auth from "../pages/admin/login/Auth";
import Dashboard from "../pages/admin/Dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
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
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
]);

export default router;
