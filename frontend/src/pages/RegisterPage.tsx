import { A } from "@solidjs/router";

const RegisterPage = () => {
  return (
    <div class="flex flex-col items-center justify-center h-screen">
      <div class="rounded-3xl min-w-[400px] flex flex-col gap-2">
        <span class="text-xl">Регистрация</span>
        <div>
          <label for="username" class="text-gray-700">
            Имя пользователя:
          </label>
          <input
            id="username"
            type="text"
            class="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            placeholder="Имя пользователя..."
          />
        </div>
        <div>
          <label for="email" class="text-gray-700">
            Email:
          </label>
          <input
            id="email"
            type="text"
            class="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            placeholder="Email..."
          />
        </div>
        <div>
          <label for="password" class="text-gray-700">
            Пароль:
          </label>
          <input
            id="password"
            type="password"
            class="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            placeholder="Пароль..."
          />
        </div>
        <div class="flex gap-2 items-center">
          <button
            type="button"
            class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none"
          >
            Зарегистрироваться
          </button>
          <A href="/login">
            <button class="text-gray-500">Войти</button>
          </A>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
