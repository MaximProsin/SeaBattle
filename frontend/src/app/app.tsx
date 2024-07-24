import { RouteDefinition, Router } from "@solidjs/router";
import { Component } from "solid-js";
import { Toaster } from "solid-sonner";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import RoomsPage from "../pages/RoomPage";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/register",
    component: RegisterPage,
  },
  {
    path: "/rooms",
    component: RoomsPage,
  },
] satisfies RouteDefinition[];

export const App: Component = () => {
  return (
    <>
      <Router>{routes}</Router>
      <Toaster />
    </>
  );
};
