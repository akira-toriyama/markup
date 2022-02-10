import type { NextPage } from "next";
import { Link } from "~/presenter/component/lib/Link";

const Page: NextPage = () => (
  <ul>
    <li>
      <Link href="/css-grid/cheat-sheet">
        <a>css-grid/cheat-sheet</a>
      </Link>
    </li>
    <li>
      <Link href="/css-architecture-perfect-guide/cheat-sheet">
        <a>css-architecture-perfect-guide/cheat-sheet</a>
      </Link>
    </li>
    <li>
      <Link href="/every-layout/cheat-sheet">
        <a>every-layout/cheat-sheet</a>
      </Link>
    </li>
  </ul>
);

// ts-prune-ignore-next
export default Page;
