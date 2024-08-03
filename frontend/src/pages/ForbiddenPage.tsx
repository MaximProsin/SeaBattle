import { A } from "@solidjs/router";
import { Button } from "../shared/ui/button";

const ForbiddenPage = () => {
  return (
    <main class="flex items-center justify-center h-screen">
      <div class="flex flex-col gap-2">
        <p class="text-bold text-6xl">401</p>
        <p>Вы авторизованы</p>
        <A href="/login" class="w-fit">
          <Button>Войти</Button>
        </A>
      </div>
    </main>
  );
};

export default ForbiddenPage;
