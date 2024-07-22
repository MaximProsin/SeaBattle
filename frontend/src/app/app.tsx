import { RouteDefinition, Router } from "@solidjs/router";
import { Component } from "solid-js";
import HomePage from "../pages/HomePage";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
] satisfies RouteDefinition[];

export const App: Component = () => {
  return <Router>{routes}</Router>;
};
