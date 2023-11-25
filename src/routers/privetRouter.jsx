import Layout from "../layouts/Layout";
import Dashboard from "../pages/admin/Dashboard/Dashboard";

const privetRoutes = [
    {
        element: <Layout />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
        ],
    },
];

export default privetRoutes;
