import type { NextPage } from "next";
import { Link } from "~/presenter/component/lib/Link";

const Page: NextPage = () => (
  <ul>
    <li>
      <Link href="/css-grid/step1">
        <a>css-grid/step1</a>
      </Link>
    </li>
  </ul>
);

// ts-prune-ignore-next
export default Page;
