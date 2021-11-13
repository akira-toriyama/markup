import React from "react";
import * as S from "./styles";
import { Img } from "~/presenter/lib/Img";

export const Section2: React.VFC = () => {
  return (
    <S.Area>
      <>
        <h2>
          <span>SPOT</span>
          <span>2.</span>
          甘い香りの
          <br />
          オレンジピールクッキー
        </h2>
        <figure>
          <Img width="100" height="100" src="/food-orange.jpg" alt="" />
        </figure>
        <figure>
          <Img width="100" height="100" src="/food-cookie.jpg" alt="" />
        </figure>
        <p>
          オレンジピールのちょっとほろ苦い甘さに誘われて、やめられなくなるクッキーです。オレンジピールだけを楽しむのもあり。甘いものが苦手な人にもおすすめできます。
        </p>

        <div>
          <h3>クッキー専門店 オレンジ</h3>
          <Img width="100" height="100" src="/shop02.jpg" alt="" />
          <p>
            〒123-4567
            <br />
            東京都渋谷区恵比寿12-3中央ビル
            <br />
            03-0000-0000
            <br />
            <span>OPEN</span> 11:00-22:00［月曜定休］
          </p>
        </div>
      </>
    </S.Area>
  );
};
