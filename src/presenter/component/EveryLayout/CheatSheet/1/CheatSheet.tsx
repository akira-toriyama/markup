import React from "react";
import * as S from "./styles";
import { randomColor } from "~/presenter/lib/randomColor";

export const CheatSheet: React.VFC = () => (
  <S.Contents>
    <S.Items1 color={randomColor()}>Item1</S.Items1>
    <S.Text>Text</S.Text>
    <h1>
      Title<S.Strong>だ!</S.Strong>
    </h1>
    <h1>
      Title<S.Little>だよ</S.Little>
    </h1>
  </S.Contents>
);
