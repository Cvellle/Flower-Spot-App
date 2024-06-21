import type { RouteObject } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/home.page";

import User from "../pages/user.page";
import FlowerPage from "../pages/flowerPage.page";
import SightingDetailPage from "../pages/sightingDetailPage.page";
import NewSighting from "../pages/newSighting.page";
import Sightings from "../pages/sightings.page";

// useAuth().authenticated ? <Outlet/> : <Navigate to='/login'/>
let auth = { token: true };

const protectedRoutes: RouteObject = {
  path: "*",
};

const normalRoutes: RouteObject = {
  path: "*",
  element: <Layout />,
  children: [
    {
      index: true,
      element: <HomePage />,
    },
    {
      index: true,
      path: "user/:userId",
      element: <User />,
    },
    {
      index: true,
      path: "flower/:flowerId",
      element: <FlowerPage />,
    },
    {
      index: true,
      path: "sightings/:sightingId",
      element: <SightingDetailPage />,
    },
    {
      index: true,
      path: "flower/:flowerId/newSighting",
      element: <NewSighting />,
    },
    {
      index: true,
      path: "sightings",
      element: <Sightings />,
    },
  ],
};

const routes: RouteObject[] = [protectedRoutes, normalRoutes];

export default routes;
