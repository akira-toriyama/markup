import React from "react";
import * as S from "./styles";
import { Img } from "~/presenter/lib/Img";

export const Section1: React.VFC = () => {
  return (
    <S.Area>
      <>
        <h2>
          <span>SPOT</span>
          <span>1.</span>
          新鮮採れたて野菜がおいしい
          <br />
          ハンバーガー
        </h2>
        <figure>
          <Img src="/food-burger.jpg" alt="" width="100" height="100" />
        </figure>
        <p>
          肉汁たっぷりなお肉と新鮮な野菜を一緒に楽しむなら、ここのハンバーガーが一押しです。トマトにレタス、キュウリ、玉ねぎ、アボガド、ピクルスなどなど、いろいろな野菜が用意されていて、好きなものを組み合わせてオリジナルのバーガーを作ることもできます。
        </p>

        <div>
          <h3>FLESHカフェ 恵比寿中央店</h3>
          <Img src="/shop01.jpg" alt="" width="100" height="100" />
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
