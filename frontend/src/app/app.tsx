import { Component, lazy } from "solid-js";
import { RouteDefinition, Router } from "@solidjs/router";

const routes = [
  {
    path: "/",
    component: lazy(() => import("../pages/HomePage")),
  },
] satisfies RouteDefinition[];

export const App: Component = () => {
  return <Router>{routes}</Router>;
};
