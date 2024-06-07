import { component$ } from "@builder.io/qwik";
import { LoremIpsum } from "~/components/lorem-ipsum/lorem-ipsum";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="container">
      <h1>About Us</h1>
      <p>Learn more about us and what we do.</p>
      <br></br>
      <LoremIpsum />
    </div>
  );
});

export const head: DocumentHead = {
  title: "About Us - Qwik Components",
  meta: [
    {
      name: "description",
      content: "Learn more about Qwik Components and what we do.",
    },
  ],
};
