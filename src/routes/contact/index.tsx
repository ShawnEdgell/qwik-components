import { component$ } from "@builder.io/qwik";
import { LoremIpsum } from "~/components/lorem-ipsum/lorem-ipsum";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="container">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Please reach out with any questions.</p>
      <br></br>
      <LoremIpsum />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Contact Us - Qwik Components",
  meta: [
    {
      name: "description",
      content: "Get in touch with the Qwik Components team.",
    },
  ],
};
