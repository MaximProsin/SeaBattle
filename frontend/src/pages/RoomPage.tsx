import { useParams } from "@solidjs/router";
import { createSignal, For, Match, Switch } from "solid-js";
import { toast } from "solid-sonner";

const RoomPage = () => {
  const { id } = useParams();

  if (id) {
    toast("ID комнаты не задан верно");
  }

  const [field, setField] = createSignal<number[][]>(
    Array.from({ length: 10 }, () => Array(10).fill(0))
  );

  return (
    <div class="container mx-auto">
      <div class="mt-2">Комната ${id}; Состояние: игра</div>
      <div class="flex justify-between mt-2">
        <div>
          Мое поле:
          <For each={field()}>
            {(row, rowId) => (
              <div class="flex">
                <For each={row}>
                  {(cell, cellId) => (
                    <div
                      class="w-10 h-10 border flex items-center justify-center cursor-pointer"
                      onClick={() => {
                        setField((field) => {
                          const newField = field.map((r) => [...r]);
                          newField[rowId()][cellId()] = 1;
                          return newField;
                        });
                      }}
                    >
                      <Switch>
                        <Match when={cell == 1}>X</Match>
                      </Switch>
                    </div>
                  )}
                </For>
              </div>
            )}
          </For>
        </div>
        <div>
          Вражеское поле:
          <For each={field()}>
            {(row) => (
              <div class="flex">
                <For each={row}>
                  {(cell) => (
                    <div class="w-10 h-10 border flex items-center justify-center"></div>
                  )}
                </For>
              </div>
            )}
          </For>
        </div>
      </div>
    </div>
  );
};

export default RoomPage;
