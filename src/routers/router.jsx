import { createBrowserRouter } from "react-router-dom";
import publicRoutes from "./publicRouter";
import privetRoutes from "./privetRouter";

const router = createBrowserRouter([...publicRoutes, ...privetRoutes]);

export default router;
