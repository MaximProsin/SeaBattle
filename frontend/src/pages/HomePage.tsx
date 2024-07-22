import { Component } from "solid-js";
import { A } from "@solidjs/router";

const HomePage: Component = () => {
  return (
    <div class="flex flex-col items-center justify-center h-[100dvh] dark:bg-neutral-950 dark:text-white">
      <h1 class="text-4xl font-bold">Seabattle</h1>
      <p class="text-lg max-md:text-sm text-center">
        Мультиплеер для классического морского боя
      </p>
      <div class="flex gap-2 mt-2">
        <A href="/register">
          <button
            type="button"
            class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-emerald-500 text-white hover:bg-emerald-700 focus:outline-none focus:bg-emerald-700 disabled:opacity-50 disabled:pointer-events-none"
          >
            Зарегистрироваться
          </button>
        </A>
        <A href="/login">
          <button
            type="button"
            class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-teal-500 text-white hover:bg-teal-700 focus:outline-none focus:bg-teal-700 disabled:opacity-50 disabled:pointer-events-none"
          >
            Войти
          </button>
        </A>
      </div>
    </div>
  );
};

export default HomePage;
