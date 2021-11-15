import React from "react";
import * as S from "./styles";
import { randomColor } from "~/presenter/lib/randomColor";

export const CheatSheet: React.VFC = () => (
  <S.Area>
    <S.Section color={randomColor()}>
      <p>text</p>
    </S.Section>
    <S.Section color={randomColor()}>
      <p>text</p>
    </S.Section>
  </S.Area>
);
