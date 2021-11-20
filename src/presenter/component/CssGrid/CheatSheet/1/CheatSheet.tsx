// jscpd:ignore-start

import React from "react";
import * as S from "./styles";
import { randomColor } from "~/presenter/lib/randomColor";
import { CssSyntaxHighlight } from "~/presenter/component/lib/SyntaxHighlight";

export const CheatSheet: React.VFC = () => (
  <>
    <CssGrid1 />
    <CssGrid2 />
    <CssGrid3 />
    <CssGrid4 />
    <CssGrid5 />
    <CssGrid6 />
    <CssGrid7 />
    <CssGrid8 />
    <CssGrid9 />
    <CssGrid10 />
    <CssGrid11 />
    <CssGrid12 />
    <CssGrid13 />
    <CssGrid14 />
    <CssGrid15 />
    <CssGrid16 />
    <CssGrid17 />
  </>
);

const CssGrid1: React.VFC = () => (
  <S.Section>
    <p>基本的な使い方</p>
    <CssSyntaxHighlight>{S.Container1}</CssSyntaxHighlight>
    <S.Container1>
      {[...Array(6)].map((_, k) => (
        <S.Item1 key={k} color={randomColor()}>
          <S.Txt>item{k}</S.Txt>
        </S.Item1>
      ))}
    </S.Container1>
  </S.Section>
);

const CssGrid2: React.VFC = () => (
  <S.Section>
    <p>最低限の指定</p>
    <CssSyntaxHighlight>{S.Container2}</CssSyntaxHighlight>
    <S.Container2>
      {[...Array(3)].map((_, k) => (
        <S.Item2 key={k} color={randomColor()}>
          <S.Txt>item{k}</S.Txt>
        </S.Item2>
      ))}
    </S.Container2>
  </S.Section>
);

const CssGrid3: React.VFC = () => (
  <S.Section>
    <p>
      右端に1frを使用
      <br />
      余白分伸びる Container
    </p>
    <CssSyntaxHighlight>{S.Container3}</CssSyntaxHighlight>

    <S.Container3>
      {[...Array(3)].map((_, k) => (
        <S.Item3 key={k} color={randomColor()}>
          <S.Txt>item{k}</S.Txt>
        </S.Item3>
      ))}
    </S.Container3>
  </S.Section>
);

const CssGrid4: React.VFC = () => (
  <S.Section>
    <p>
      frを複数箇所で指定
      <br />
      frを合計して母数とし、分割する 1fr + 5fr = 6fr
      <br />
    </p>
    <CssSyntaxHighlight>{S.Container4}</CssSyntaxHighlight>
    <S.Container4>
      {[...Array(4)].map((_, k) => (
        <S.Item4 key={k} color={randomColor()}>
          <S.Txt>item{k}</S.Txt>
        </S.Item4>
      ))}
    </S.Container4>
  </S.Section>
);

const CssGrid5: React.VFC = () => (
  <S.Section>
    <p>
      autoを指定
      <br />
      中身に応じて横幅が決まる
    </p>
    <CssSyntaxHighlight>{S.Container5}</CssSyntaxHighlight>
    <S.Container5>
      <S.Item5 color={randomColor()}>
        <S.Txt>
          item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1
          item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1
        </S.Txt>
      </S.Item5>
      <S.Item5 color={randomColor()}>
        <S.Txt>item2</S.Txt>
      </S.Item5>
      <S.Item5 color={randomColor()}>
        <S.Txt>item3</S.Txt>
      </S.Item5>
    </S.Container5>
  </S.Section>
);

const CssGrid6: React.VFC = () => (
  <S.Section>
    <p>
      1frを複数指定
      <br />
      CssGrid5との違いは、中身に関係なく均等なサイズ
    </p>
    <CssSyntaxHighlight>{S.Container6}</CssSyntaxHighlight>
    <S.Container6>
      <S.Item6 color={randomColor()}>
        <S.Txt>
          item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1
          item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1
          item1 item1 item1 item1 item1 item1 item1 item1
        </S.Txt>
      </S.Item6>
      <S.Item6 color={randomColor()}>
        <S.Txt>item2</S.Txt>
      </S.Item6>
      <S.Item6 color={randomColor()}>
        <S.Txt>item3</S.Txt>
      </S.Item6>
    </S.Container6>
  </S.Section>
);

const CssGrid7: React.VFC = () => (
  <S.Section>
    <p>
      1列目の内容が小さければ、残り2列は大きくなる
      <br />
      1列目の内容が大きければ、残り2列は小さくなる Container
    </p>
    <CssSyntaxHighlight>{S.Container7}</CssSyntaxHighlight>

    <S.Container7>
      {[...Array(3)].map((_, k) => (
        <S.Item7 key={k} color={randomColor()}>
          <S.Txt>item{k}</S.Txt>
        </S.Item7>
      ))}
    </S.Container7>

    <S.Container7>
      <S.Item7 color={randomColor()}>
        <S.Txt>item1 item1 item1 item1</S.Txt>
      </S.Item7>
      <S.Item7 color={randomColor()}>
        <S.Txt>item2</S.Txt>
      </S.Item7>
      <S.Item7 color={randomColor()}>
        <S.Txt>item3</S.Txt>
      </S.Item7>
    </S.Container7>
  </S.Section>
);

const CssGrid8: React.VFC = () => (
  <S.Section>
    <p>repeatで繰り返し</p>
    <CssSyntaxHighlight>{S.Container8}</CssSyntaxHighlight>
    <S.Container8>
      {[...Array(6)].map((_, k) => (
        <S.Item8 key={k} color={randomColor()}>
          <S.Txt>item{k}</S.Txt>
        </S.Item8>
      ))}
    </S.Container8>
  </S.Section>
);

const CssGrid9: React.VFC = () => (
  <S.Section>
    <p>repeatで繰り返し</p>
    <CssSyntaxHighlight>{S.Container9}</CssSyntaxHighlight>
    <S.Container9>
      {[...Array(4)].map((_, k) => (
        <S.Item9 key={k} color={randomColor()}>
          <S.Txt>item{k}</S.Txt>
        </S.Item9>
      ))}
    </S.Container9>
  </S.Section>
);

const CssGrid10: React.VFC = () => (
  <S.Section>
    <p>
      auto-fillで繰り返し埋める
      <br />
      親要素にスペースが余る場合、空のグリッドが作られます
    </p>
    <CssSyntaxHighlight>{S.Container10}</CssSyntaxHighlight>
    <S.Container10>
      {[...Array(7)].map((_, k) => (
        <S.Item10 key={k} color={randomColor()}>
          <S.Txt>item{k}</S.Txt>
        </S.Item10>
      ))}
    </S.Container10>
  </S.Section>
);

const CssGrid11: React.VFC = () => (
  <S.Section>
    <p>
      auto-fitで繰り返し埋める
      <br />
      親要素にスペースが余る場合、グリッド・アイテムの幅が変わってスペースが埋められます
    </p>
    <CssSyntaxHighlight>{S.Container11}</CssSyntaxHighlight>
    <S.Container11>
      {[...Array(2)].map((_, k) => (
        <S.Item11 key={k} color={randomColor()}>
          <S.Txt>item{k}</S.Txt>
        </S.Item11>
      ))}
    </S.Container11>
  </S.Section>
);

const CssGrid12: React.VFC = () => (
  <S.Section>
    <p>高さに関しての調整</p>
    <CssSyntaxHighlight>{S.Container12}</CssSyntaxHighlight>
    <S.Container12>
      {[...Array(4)].map((_, k) => (
        <S.Item12 key={k} color={randomColor()}>
          <S.Txt>item{k}</S.Txt>
        </S.Item12>
      ))}
    </S.Container12>
  </S.Section>
);

const CssGrid13: React.VFC = () => (
  <S.Section>
    <p>縦方向に並べる</p>
    <CssSyntaxHighlight>{S.Container13}</CssSyntaxHighlight>
    <S.Container13>
      {[...Array(5)].map((_, k) => (
        <S.Item13 key={k} color={randomColor()}>
          <S.Txt>item{k}</S.Txt>
        </S.Item13>
      ))}
    </S.Container13>
  </S.Section>
);

const CssGrid14: React.VFC = () => (
  <S.Section>
    <p>
      縦方向に並べる
      <br />
      grid-template-rows と grid-auto-flow: column;
      <br />
      の組み合わせは混乱を招きそう
    </p>
    <CssSyntaxHighlight>{S.Container14}</CssSyntaxHighlight>
    <S.Container14>
      {[...Array(7)].map((_, k) => (
        <S.Item14 key={k} color={randomColor()}>
          <S.Txt>item{k}</S.Txt>
        </S.Item14>
      ))}
    </S.Container14>
  </S.Section>
);

const CssGrid15: React.VFC = () => (
  <S.Section>
    <p>縦横の指定</p>
    <CssSyntaxHighlight>{S.Container15}</CssSyntaxHighlight>
    <S.Container15>
      {[...Array(7)].map((_, k) => (
        <S.Item15 key={k} color={randomColor()}>
          <S.Txt>item{k}</S.Txt>
        </S.Item15>
      ))}
    </S.Container15>
  </S.Section>
);

const CssGrid16: React.VFC = () => (
  <S.Section>
    <p>
      minmax()
      関数を使うと、グリッドの行や列のサイズを定義する際に、最小サイズを設定してコンテンツに合わせて広げられるようにすることができます。
    </p>
    <CssSyntaxHighlight>{S.Container16}</CssSyntaxHighlight>
    <S.Container16>
      {[...Array(6)].map((_, k) => (
        <S.Item16 key={k} color={randomColor()}>
          <S.Txt>item{k}</S.Txt>
        </S.Item16>
      ))}
    </S.Container16>
  </S.Section>
);

const CssGrid17: React.VFC = () => (
  <S.Section>
    <p>
      minmax()を使用し、広がらないようにする。hiddenを使いはみ出た分を非表示に
    </p>
    <CssSyntaxHighlight>{S.Container17}</CssSyntaxHighlight>
    <S.Container17>
      {[...Array(6)].map((_, k) => (
        <S.Item17 key={k} color={randomColor()}>
          <S.Txt>item{k}</S.Txt>
          <S.Txt>item{k}</S.Txt>
          <S.Txt>item{k}</S.Txt>
        </S.Item17>
      ))}
    </S.Container17>
  </S.Section>
);

// jscpd:ignore-end
