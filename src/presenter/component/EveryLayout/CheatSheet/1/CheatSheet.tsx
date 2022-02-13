// jscpd:ignore-start

import React from "react";
import * as S from "./styles";
import { randomColor } from "~/presenter/lib/randomColor";

export const CheatSheet: React.VFC = () => (
  <S.Contents>
    <S.Items1 color={randomColor()}>Item1</S.Items1>
  </S.Contents>
);

// jscpd:ignore-end
