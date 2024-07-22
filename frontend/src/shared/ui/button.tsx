import { Component, JSXElement } from "solid-js";

export interface ButtonProps {
  children: JSXElement;
}

export const Button: Component<ButtonProps> = ({ children }) => {
  return (
    <button
      type="button"
      class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none"
    >
      {children}
    </button>
  );
};
