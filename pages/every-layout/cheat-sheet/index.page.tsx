import type { NextPage } from "next";
import { Link } from "~/presenter/component/lib/Link";

const Page: NextPage = () => (
  <ul>
    <li>
      <Link href="/every-layout/cheat-sheet/1">
        <a>every-layout/cheat-sheet/1</a>
      </Link>
    </li>
  </ul>
);

// ts-prune-ignore-next
export default Page;
