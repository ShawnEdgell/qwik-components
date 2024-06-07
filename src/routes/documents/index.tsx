import { component$ } from "@builder.io/qwik";
import { LoremIpsum } from "~/components/lorem-ipsum/lorem-ipsum";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="container">
      <h1>Documents Page</h1>
      <p>This is the documents page content.</p>
      <br></br>
      <LoremIpsum />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Documents - Qwik Components",
  meta: [
    {
      name: "description",
      content: "Access various documents related to Qwik Components.",
    },
  ],
};
