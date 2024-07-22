import { A } from "@solidjs/router";
import { Component, JSXElement } from "solid-js";

interface HeaderProps {
  current?: "rooms" | "stats";
  children: JSXElement;
}

export const Header: Component<HeaderProps> = ({ children }) => {
  return (
    <div class={"px-2 md:px-[200px] py-2 flex items-center justify-between"}>
      <div class="flex gap-4 items-center">
        <A href="/rooms" class="text-xl">
          Комнаты
        </A>
        <A href="/stats" class="text-gray-600">
          Статистика
        </A>
      </div>
      <div class="flex gap-2 items-center">{children}</div>
    </div>
  );
};
