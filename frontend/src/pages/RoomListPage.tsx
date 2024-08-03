import { Component } from "solid-js";
import { Header } from "../widgets/header";
import { Button } from "../shared/ui/button";

const RoomsPage: Component = () => {
  return (
    <>
      <Header>
        <Button>Создать комнату</Button>
      </Header>
    </>
  );
};

export default RoomsPage;
