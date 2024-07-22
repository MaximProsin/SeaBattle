import { RouteDefinition, Router } from "@solidjs/router";
import { Component, lazy } from "solid-js";
import HomePage from "../pages/HomePage";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/login",
    component: lazy(() => import("../pages/LoginPage")),
  },
  {
    path: "/register",
    component: lazy(() => import("../pages/RegisterPage")),
  },
] satisfies RouteDefinition[];

export const App: Component = () => {
  return <Router>{routes}</Router>;
};
