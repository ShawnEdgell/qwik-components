import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Button } from "~/components/button/button";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="hero flex flex-grow flex-col items-center">
      <h1>Hi 👋</h1>
      <div>
        Can't wait to see what you build with Qwik!
        <br />
        Happy coding.
      </div>
      <div class="mt-4 space-x-4">
        <Link href="/about">
          <Button label="About Us" variant="primary" />
        </Link>
        <Link href="/contact">
          <Button label="Contact Us" variant="secondary" />
        </Link>
        <Link href="/documents">
          <Button label="Documents" variant="tertiary" />
        </Link>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik Components",
  meta: [
    {
      name: "description",
      content:
        "Discover Qwik Components - a collection of optimized Qwik components.",
    },
  ],
};
