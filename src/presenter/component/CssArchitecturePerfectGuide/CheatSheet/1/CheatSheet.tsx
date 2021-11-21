// jscpd:ignore-start

import React from "react";
import * as S from "./styles";
import { CssSyntaxHighlight } from "~/presenter/component/lib/SyntaxHighlight";

export const CheatSheet: React.VFC = () => (
  <>
    <h1>ボタン</h1>
    <CssSyntaxHighlight>{S.Button}</CssSyntaxHighlight>
    <h2>display: inline-block;</h2>
    <p>親要素で指定しているtext-align: center;を継承する為使い勝手が良い</p>
    <S.Area>
      <S.ButtonSection>
        <p>テキスト</p>
        <S.Button href="dummy">ボタン</S.Button>
      </S.ButtonSection>

      <S.ButtonSectionL>
        <p>テキスト</p>
        <S.Button href="dummy">ボタン</S.Button>
      </S.ButtonSectionL>

      <S.ButtonSectionR>
        <p>テキスト</p>
        <S.Button href="dummy">ボタン</S.Button>
      </S.ButtonSectionR>
    </S.Area>
    <h2>width: 300px;</h2>
    <p>プロジェクトでは、ボタン幅は統一されている場合が多い</p>
    改行させたく無い場合は、
    <CssSyntaxHighlight>{S.Button2}</CssSyntaxHighlight>
    <S.Area>
      <S.Button href="dummy">
        改行される改行される改行される改行される改行される改行される
      </S.Button>
      <S.Button2 href="dummy">
        改行されない改行されない改行されない改行されない
      </S.Button2>
    </S.Area>
    <h2>max-width: 100%;</h2>
    <p>親ボックスからはみ出ないようにする。</p>
    <h2>padding: 20px 10px;</h2>
    <p>
      heightを指定しては、ダメ。長いテキストが入るとはみ出るため
      <br />
      長いテキストが入っても最低限の見た目を確保する為にpaddingを指定
    </p>
    <h2>border: 2px solid transparent; と border-color: currentColor;</h2>
    <p>
      ホバー時に、border:
      2pxとするとボタンが大きくなるのでダメ。ホバー前から確保する。
      currentColorは、background-colorと連動が良い。
    </p>
    <h2>font-size: 1.125rem;</h2>
    <p>
      18pxとしたいが、フォントサイズを大きくしている人などに対応する為。
      <br />
      remの基準のルート要素(html要素)のfont-sizeは、16pxなので、それの1.125倍が18px
    </p>
  </>
);
// jscpd:ignore-end
