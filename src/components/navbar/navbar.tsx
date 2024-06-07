import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Navbar = component$(() => {
  return (
    <nav class="bg-surface-700 sticky top-0 z-50 p-5">
      <div class="mx-auto flex items-center justify-between">
        <Link
          href="/"
          class="text-base-100 hover:text-base-100 text-lg font-bold"
        >
          Qwik Components
        </Link>
        <div class="hidden space-x-6 md:flex">
          <Link href="/about" class="text-base-100 hover:text-primary-500">
            About
          </Link>
          <Link href="/contact" class="text-base-100 hover:text-primary-500">
            Contact
          </Link>
          <Link href="/documents" class="text-base-100 hover:text-primary-500">
            Documents
          </Link>
        </div>
        <div class="md:hidden">
          <button class="text-base-100 focus:outline-none">
            <svg
              class="h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
});
