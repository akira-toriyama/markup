// jscpd:ignore-start

import React from "react";
import * as S from "./styles";
import { randomColor } from "~/presenter/lib/randomColor";
import { CssSyntaxHighlight } from "~/presenter/component/lib/SyntaxHighlight";

export const CheatSheet: React.VFC = () => (
  <>
    <h1>css gridのベストの使い方</h1>
    <h2>CssGrid25</h2>
    <CssGrid25 />

    <h1>css gridの基本的な使い方</h1>
    <h2>CssGrid1</h2>
    <CssGrid1 />

    <h1>css gridの使い方</h1>
    <h2>CssGrid2</h2>
    <CssGrid2 />
    <h2>CssGrid3</h2>
    <CssGrid3 />
    <h2>CssGrid4</h2>
    <CssGrid4 />
    <h2>CssGrid5</h2>
    <CssGrid5 />
    <h2>CssGrid6</h2>
    <CssGrid6 />
    <h2>CssGrid7</h2>
    <CssGrid7 />
    <h2>CssGrid8</h2>
    <CssGrid8 />
    <h2>CssGrid9</h2>
    <CssGrid9 />
    <h2>CssGrid10</h2>
    <CssGrid10 />
    <h2>CssGrid11</h2>
    <CssGrid11 />
    <h2>CssGrid12</h2>
    <CssGrid12 />
    <h2>CssGrid13</h2>
    <CssGrid13 />
    <h2>CssGrid14</h2>
    <CssGrid14 />
    <h2>CssGrid15</h2>
    <CssGrid15 />
    <h2>CssGrid16</h2>
    <CssGrid16 />
    <h2>CssGrid17</h2>
    <CssGrid17 />
    <h2>CssGrid18</h2>
    <CssGrid18 />
    <h2>CssGrid19</h2>
    <CssGrid19 />
    <h2>CssGrid20</h2>
    <CssGrid20 />
    <h2>CssGrid21</h2>
    <CssGrid21 />
    <h2>CssGrid22</h2>
    <CssGrid22 />
    <h2>CssGrid23</h2>
    <CssGrid23 />
    <h2>CssGrid24</h2>
    <CssGrid24 />
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
    <p>
      高さに関しての調整
      <br />
      grid-template-rows: 80px;とすると2行目の高さが80pxにならない
    </p>
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

const CssGrid18: React.VFC = () => (
  <S.Section>
    <p>
      minmax(100px,
      50%)とは、横幅100pxは必ず確保する。かつ親の幅の50%までは伸びる
    </p>
    <CssSyntaxHighlight>{S.Container18}</CssSyntaxHighlight>
    <S.Container18>
      {[...Array(6)].map((_, k) => (
        <S.Item18 key={k} color={randomColor()}>
          <S.Txt>item{k}</S.Txt>
        </S.Item18>
      ))}
    </S.Container18>
  </S.Section>
);

const CssGrid19: React.VFC = () => (
  <S.Section>
    <p>
      高さ100px, 幅最小200pxのレイアウトが確保される。
      <br />
      画面のサイズに合わせて行に並ぶ量が決まる
      <br />
      auto-fill
      の場合、余ったスペースに最小幅を持った空のトラックを可能な限り追加して埋める（fill
      する）動作をします。
    </p>
    <CssSyntaxHighlight>{S.Container19}</CssSyntaxHighlight>
    <S.Container19>
      {[...Array(10)].map((_, k) => (
        <S.Item19 key={k} color={randomColor()}>
          <S.Txt>item{k}</S.Txt>
        </S.Item19>
      ))}
    </S.Container19>
  </S.Section>
);

const CssGrid20: React.VFC = () => (
  <S.Section>
    <p>
      auto-fit
      の場合、余ったスペースの空の繰り返しトラックが折りたたまれ、空のトラックの幅が0pxとみなされるため、全体を
      1fr の幅の列で埋めつくされます（fit します）。
    </p>
    <CssSyntaxHighlight>{S.Container20}</CssSyntaxHighlight>
    <S.Container20>
      {[...Array(10)].map((_, k) => (
        <S.Item20 key={k} color={randomColor()}>
          <S.Txt>item{k}</S.Txt>
        </S.Item20>
      ))}
    </S.Container20>
  </S.Section>
);

const CssGrid21: React.VFC = () => (
  <S.Section>
    <p>auto-fillとauto-fitの違い</p>

    <CssSyntaxHighlight>{S.Container19}</CssSyntaxHighlight>
    <S.Container19>
      {[...Array(2)].map((_, k) => (
        <S.Item19 key={k} color={randomColor()}>
          <S.Txt>item{k}</S.Txt>
        </S.Item19>
      ))}
    </S.Container19>
    <CssSyntaxHighlight>{S.Container20}</CssSyntaxHighlight>
    <S.Container20>
      {[...Array(2)].map((_, k) => (
        <S.Item20 key={k} color={randomColor()}>
          <S.Txt>item{k}</S.Txt>
        </S.Item20>
      ))}
    </S.Container20>
  </S.Section>
);

const CssGrid22: React.VFC = () => (
  <S.Section>
    <p>gapは、行間,列間の順番</p>
    <CssSyntaxHighlight>{S.Container22}</CssSyntaxHighlight>
    <S.Container22>
      {[...Array(10)].map((_, k) => (
        <S.Item22 key={k} color={randomColor()}>
          <S.Txt>item{k}</S.Txt>
        </S.Item22>
      ))}
    </S.Container22>
  </S.Section>
);

const CssGrid23: React.VFC = () => (
  <S.Section>
    <p>3*3のgridを定義</p>
    <CssSyntaxHighlight>{S.Container23}</CssSyntaxHighlight>
    <p>
      横: 列の1~4
      <br />
      縦: 行の1~2
    </p>
    <CssSyntaxHighlight>{S.Item23_1}</CssSyntaxHighlight>
    <p>
      横: 列の1~3
      <br />
      縦: 行の2~3
    </p>
    <CssSyntaxHighlight>{S.Item23_2}</CssSyntaxHighlight>

    <S.Container23>
      <S.Item23_1 color={randomColor()}>
        <S.Txt>Item23_1</S.Txt>
      </S.Item23_1>
      <S.Item23_2 color={randomColor()}>
        <S.Txt>Item23_2</S.Txt>
      </S.Item23_2>

      <S.Item23_3 color={randomColor()}>
        <S.Txt>Item23_3</S.Txt>
      </S.Item23_3>
      <S.Item23_3 color={randomColor()}>
        <S.Txt>Item23_3</S.Txt>
      </S.Item23_3>
      <S.Item23_3 color={randomColor()}>
        <S.Txt>Item23_3</S.Txt>
      </S.Item23_3>
      <S.Item23_3 color={randomColor()}>
        <S.Txt>Item23_3</S.Txt>
      </S.Item23_3>
    </S.Container23>
  </S.Section>
);

const CssGrid24: React.VFC = () => (
  <S.Section>
    <p>areaによる指定</p>
    <CssSyntaxHighlight>{S.Container24}</CssSyntaxHighlight>
    <p>行開始番号 / 列開始番号 / 行終了番号 / 列終了番号</p>
    <CssSyntaxHighlight>{S.Item24_1}</CssSyntaxHighlight>

    <p>行開始番号 / 列開始番号 / 行終了番号 / 列終了番号</p>
    <CssSyntaxHighlight>{S.Item24_2}</CssSyntaxHighlight>

    <S.Container24>
      <S.Item24_1 color={randomColor()}>
        <S.Txt>Item24_1</S.Txt>
      </S.Item24_1>
      <S.Item24_2 color={randomColor()}>
        <S.Txt>Item24_2</S.Txt>
      </S.Item24_2>
    </S.Container24>
  </S.Section>
);

const CssGrid25: React.VFC = () => (
  <S.Section>
    <p>grid-templateで、名前をつける、幅と高さも合わせて指定する</p>
    <CssSyntaxHighlight>{S.Container25}</CssSyntaxHighlight>

    <p>grid-areaで使用する</p>
    <CssSyntaxHighlight>{S.Item25_1}</CssSyntaxHighlight>
    <CssSyntaxHighlight>{S.Item25_2}</CssSyntaxHighlight>
    <CssSyntaxHighlight>{S.Item25_3}</CssSyntaxHighlight>
    <CssSyntaxHighlight>{S.Item25_4}</CssSyntaxHighlight>

    <S.Container25>
      <S.Item25_1 color={randomColor()}>
        <S.Txt>header</S.Txt>
      </S.Item25_1>

      <S.Item25_2 color={randomColor()}>
        <S.Txt>content</S.Txt>
      </S.Item25_2>

      <S.Item25_3 color={randomColor()}>
        <S.Txt>sidebar</S.Txt>
      </S.Item25_3>

      <S.Item25_4 color={randomColor()}>
        <S.Txt>footer</S.Txt>
      </S.Item25_4>
    </S.Container25>
  </S.Section>
);

// jscpd:ignore-end
