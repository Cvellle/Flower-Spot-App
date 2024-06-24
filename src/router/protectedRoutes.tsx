import { Navigate, type RouteObject } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/home.page";

import User from "../pages/user.page";
import FlowerPage from "../pages/flowerPage.page";
import FlowersPage from "../pages/flowersPage.page";
import SightingDetailPage from "../pages/sightingDetailPage.page";
import NewSighting from "../pages/newSighting.page";
import Sightings from "../pages/sightings.page";

const protectedRoutes: RouteObject = {
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
      path: "flower/:flowerId/new-sighting",
      element: <NewSighting />,
    },
    {
      index: true,
      path: "flowers",
      element: <FlowersPage />,
    },
    {
      index: true,
      path: "sightings",
      element: <Sightings />,
    },
    {
      index: true,
      path: "favorites",
      element: <Navigate to="/" />,
    },
  ],
};

const routes: RouteObject[] = [protectedRoutes];

export default routes;
