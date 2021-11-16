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
  </>
);

const CssGrid1: React.VFC = () => (
  <S.Section>
    <p>基本的な使い方</p>

    <CssSyntaxHighlight>{S.Container1}</CssSyntaxHighlight>

    <S.Container1>
      <S.Item1 color={randomColor()}>
        <S.Txt>CssGrid1</S.Txt>
      </S.Item1>
      <S.Item1 color={randomColor()}>
        <S.Txt>CssGrid1</S.Txt>
      </S.Item1>
      <S.Item1 color={randomColor()}>
        <S.Txt>CssGrid1</S.Txt>
      </S.Item1>
      <S.Item1 color={randomColor()}>
        <S.Txt>CssGrid1</S.Txt>
      </S.Item1>
      <S.Item1 color={randomColor()}>
        <S.Txt>CssGrid1</S.Txt>
      </S.Item1>
      <S.Item1 color={randomColor()}>
        <S.Txt>CssGrid1</S.Txt>
      </S.Item1>
    </S.Container1>
  </S.Section>
);

const CssGrid2: React.VFC = () => (
  <S.Section>
    <p>最低限の指定</p>

    <CssSyntaxHighlight>{S.Container2}</CssSyntaxHighlight>

    <S.Container2>
      <S.Item2 color={randomColor()}>
        <S.Txt>CssGrid2</S.Txt>
      </S.Item2>
      <S.Item2 color={randomColor()}>
        <S.Txt>CssGrid2</S.Txt>
      </S.Item2>
      <S.Item2 color={randomColor()}>
        <S.Txt>CssGrid2</S.Txt>
      </S.Item2>
    </S.Container2>
  </S.Section>
);

const CssGrid3: React.VFC = () => (
  <S.Section>
    <p>
      右端に1frを使用
      <br />
      余白分伸びる
    </p>
    <CssSyntaxHighlight>{S.Container3}</CssSyntaxHighlight>

    <S.Container3>
      <S.Item3 color={randomColor()}>
        <S.Txt>CssGrid3</S.Txt>
      </S.Item3>
      <S.Item3 color={randomColor()}>
        <S.Txt>CssGrid3</S.Txt>
      </S.Item3>
      <S.Item3 color={randomColor()}>
        <S.Txt>CssGrid3</S.Txt>
      </S.Item3>
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
      <S.Item4 color={randomColor()}>
        <S.Txt>CssGrid4</S.Txt>
      </S.Item4>
      <S.Item4 color={randomColor()}>
        <S.Txt>CssGrid4</S.Txt>
      </S.Item4>
      <S.Item4 color={randomColor()}>
        <S.Txt>CssGrid4</S.Txt>
      </S.Item4>
      <S.Item4 color={randomColor()}>
        <S.Txt>CssGrid4</S.Txt>
      </S.Item4>
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
          CssGrid5 CssGrid5 CssGrid5 CssGrid5 CssGrid5 CssGrid5 CssGrid5
          CssGrid5 CssGrid5 CssGrid5 CssGrid5 CssGrid5 CssGrid5 CssGrid5
          CssGrid5 CssGrid5
        </S.Txt>
      </S.Item5>
      <S.Item5 color={randomColor()}>
        <S.Txt>CssGrid5</S.Txt>
      </S.Item5>
      <S.Item5 color={randomColor()}>
        <S.Txt>CssGrid5</S.Txt>
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
          CssGrid6 CssGrid6 CssGrid6 CssGrid6 CssGrid6 CssGrid6 CssGrid6
          CssGrid6 CssGrid6 CssGrid6 CssGrid6 CssGrid6 CssGrid6 CssGrid6
          CssGrid6 CssGrid6
        </S.Txt>
      </S.Item6>
      <S.Item6 color={randomColor()}>
        <S.Txt>CssGrid6</S.Txt>
      </S.Item6>
      <S.Item6 color={randomColor()}>
        <S.Txt>CssGrid6</S.Txt>
      </S.Item6>
    </S.Container6>
  </S.Section>
);

const CssGrid7: React.VFC = () => (
  <S.Section>
    <p>
      1列目の内容が小さければ、残り2列は大きくなる
      <br />
      1列目の内容が大きければ、残り2列は小さくなる
    </p>
    <CssSyntaxHighlight>{S.Container7}</CssSyntaxHighlight>

    <S.Container7>
      <S.Item7 color={randomColor()}>
        <S.Txt>CssGrid7</S.Txt>
      </S.Item7>
      <S.Item7 color={randomColor()}>
        <S.Txt>CssGrid7</S.Txt>
      </S.Item7>
      <S.Item7 color={randomColor()}>
        <S.Txt>CssGrid7</S.Txt>
      </S.Item7>
    </S.Container7>

    <S.Container7>
      <S.Item7 color={randomColor()}>
        <S.Txt>CssGrid7 CssGrid7 CssGrid7 CssGrid7</S.Txt>
      </S.Item7>
      <S.Item7 color={randomColor()}>
        <S.Txt>CssGrid7</S.Txt>
      </S.Item7>
      <S.Item7 color={randomColor()}>
        <S.Txt>CssGrid7</S.Txt>
      </S.Item7>
    </S.Container7>
  </S.Section>
);

const CssGrid8: React.VFC = () => (
  <S.Section>
    <p>repeatで繰り返し</p>

    <CssSyntaxHighlight>{S.Container8}</CssSyntaxHighlight>

    <S.Container8>
      <S.Item8 color={randomColor()}>
        <S.Txt>CssGrid8</S.Txt>
      </S.Item8>
      <S.Item8 color={randomColor()}>
        <S.Txt>CssGrid8</S.Txt>
      </S.Item8>
      <S.Item8 color={randomColor()}>
        <S.Txt>CssGrid8</S.Txt>
      </S.Item8>
      <S.Item8 color={randomColor()}>
        <S.Txt>CssGrid8</S.Txt>
      </S.Item8>
      <S.Item8 color={randomColor()}>
        <S.Txt>CssGrid8</S.Txt>
      </S.Item8>
      <S.Item8 color={randomColor()}>
        <S.Txt>CssGrid8</S.Txt>
      </S.Item8>
    </S.Container8>
  </S.Section>
);

const CssGrid9: React.VFC = () => (
  <S.Section>
    <p>repeatで繰り返し</p>

    <CssSyntaxHighlight>{S.Container9}</CssSyntaxHighlight>

    <S.Container9>
      <S.Item9 color={randomColor()}>
        <S.Txt>CssGrid9</S.Txt>
      </S.Item9>
      <S.Item9 color={randomColor()}>
        <S.Txt>CssGrid9</S.Txt>
      </S.Item9>
      <S.Item9 color={randomColor()}>
        <S.Txt>CssGrid9</S.Txt>
      </S.Item9>
      <S.Item9 color={randomColor()}>
        <S.Txt>CssGrid9</S.Txt>
      </S.Item9>
    </S.Container9>
  </S.Section>
);

// jscpd:ignore-end
