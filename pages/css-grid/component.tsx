import type { NextPage } from "next";
import { Step1 } from "~/presenter/component/CssGrid/Step1";
import { CSR } from "~/presenter/component/lib/CSR";

export const Page: NextPage = () => (
  <CSR>
    <Step1 />
  </CSR>
);
