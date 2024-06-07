import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Sidebar = component$(() => {
  return (
    <aside class="bg-surface-900 hidden p-4 lg:block lg:w-64">
      <nav>
        <ul>
          <li>
            <Link
              href="/"
              class="text-base-100 hover:text-primary-500 block p-2"
            >
              Document 1
            </Link>
          </li>
          <li>
            <Link
              href="/"
              class="text-base-100 hover:text-primary-500  block p-2"
            >
              Document 2
            </Link>
          </li>
          <li>
            <Link
              href="/"
              class="text-base-100 hover:text-primary-500  block p-2"
            >
              Document 3
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
});
