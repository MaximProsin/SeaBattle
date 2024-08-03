import { RouteDefinition, Router } from "@solidjs/router";
import { Component } from "solid-js";
import { Toaster } from "solid-sonner";
import ForbiddenPage from "../pages/ForbiddenPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import RoomsPage from "../pages/RoomListPage";
import RoomPage from "../pages/RoomPage";

const withAuth = (component: Component) => {
  if (!localStorage.getItem("token")) {
    return ForbiddenPage;
  }

  return component;
};

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
    component: withAuth(RoomsPage),
  },
  {
    path: "/rooms/:id",
    component: withAuth(RoomPage),
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
