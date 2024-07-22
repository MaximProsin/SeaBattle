import { A } from "@solidjs/router";
import { Component } from "solid-js";

const RoomsPage: Component = () => {
  return (
    <div class="px-2 md:px-[200px] py-2">
      <div class="flex gap-4 items-center">
        <A href="/rooms" class="text-xl">
          Комнаты
        </A>
        <A href="/stats" class="text-gray-600">
          Статистика
        </A>
      </div>
    </div>
  );
};

export default RoomsPage;
