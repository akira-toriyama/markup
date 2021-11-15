import type { NextPage } from "next";
import { Link } from "~/presenter/component/lib/Link";

const Page: NextPage = () => (
  <ul>
    <li>
      <Link href="/css-grid/cheat-sheet">
        <a>css-grid/cheat-sheet</a>
      </Link>
    </li>
  </ul>
);

// ts-prune-ignore-next
export default Page;
