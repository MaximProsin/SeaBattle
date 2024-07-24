import { A, useNavigate } from "@solidjs/router";
import { createSignal } from "solid-js";
import { identificationApi } from "../shared/lib";
import { toast } from "solid-sonner";

const RegisterPage = () => {
  const [username, setUsername] = createSignal("");
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const res = await identificationApi.registerPostRaw({
        createUserRequest: {
          userName: username(),
          email: email(),
          password: password(),
        },
      });

      if (res.raw.ok) {
        toast.info("Вы успешно зарегистрировались");
        navigate("/rooms");
      } else {
        toast.error("Произошла ошибка при регистрации");
      }
    } catch (e) {
      toast.error("Неизвестная ошибка: ", {
        description: (e as Error).message,
      });
    }
  };

  return (
    <div class="flex flex-col items-center justify-center h-[100dvh] dark:bg-neutral-950 dark:text-white">
      <div class="rounded-3xl min-w-[300px] flex flex-col gap-2">
        <span class="text-xl">Регистрация</span>
        <div>
          <label for="username" class="text-gray-700 dark:text-gray-100">
            Имя пользователя:
          </label>
          <input
            id="username"
            type="text"
            class="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            placeholder="Имя пользователя..."
            value={username()}
            onInput={(e) => setUsername(e.currentTarget.value)}
          />
        </div>
        <div>
          <label for="email" class="text-gray-700 dark:text-gray-100">
            Email:
          </label>
          <input
            id="email"
            type="text"
            class="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            placeholder="Email..."
            value={email()}
            onInput={(e) => setEmail(e.currentTarget.value)}
          />
        </div>
        <div>
          <label for="password" class="text-gray-700 dark:text-gray-100">
            Пароль:
          </label>
          <input
            id="password"
            type="password"
            class="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            placeholder="Пароль..."
            value={password()}
            onInput={(e) => setPassword(e.currentTarget.value)}
          />
        </div>
        <div class="flex gap-2 items-center">
          <button
            type="button"
            onClick={handleSubmit}
            class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none"
          >
            Зарегистрироваться
          </button>
          <A href="/login">
            <button class="text-gray-500 dark:text-gray-50">Войти</button>
          </A>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
