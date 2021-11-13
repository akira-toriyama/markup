import React from "react";
import * as S from "./styles";
import { Img } from "~/presenter/lib/Img";

export const Section3: React.VFC = () => {
  return (
    <S.Area>
      <>
        <h2>
          <span>SPOT</span>
          <span>3.</span>
          ふわもち
          <br />
          チョコカップケーキ
        </h2>
        <figure>
          <Img src="/food-cake.jpg" alt="" width="100" height="100" />
        </figure>
        <p>
          お餅のようなもっちりさと、ふわふわの柔らかさが楽しめるカップケーキです。カリッと食感のチョコチップがアクセントになっています。
        </p>

        <div>
          <h3>ショコラティエ</h3>
          <Img src="/shop03.jpg" alt="" width="100" height="100" />
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
