import { component$, Slot } from "@builder.io/qwik";
import { Sidebar } from "~/components/sidebar/sidebar";

export default component$(() => {
  return (
    <div class="flex w-full flex-grow flex-col">
      <div class="flex w-full flex-grow">
        <Sidebar />
        <main class="flex-grow">
          <Slot />
        </main>
      </div>
    </div>
  );
});
