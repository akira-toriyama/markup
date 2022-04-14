import React from "react";
import * as S from "./styles";
import s from "./styles.module.css";
import { randomColor } from "~/presenter/lib/randomColor";

export const CheatSheet: React.FC = () => (
  <>
    <S.Item color={randomColor()}>Item1</S.Item>
    <S.Text>Text</S.Text>
    <h1>
      Title<S.Strong>だ!</S.Strong>
    </h1>
    <h1>
      Title<S.Little>だよ</S.Little>
    </h1>
    <p className={s["font-size:base"]}>txt</p>
  </>
);
