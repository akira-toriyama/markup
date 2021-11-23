// jscpd:ignore-start

import React from "react";
import * as S from "./styles";
import { CssSyntaxHighlight } from "~/presenter/component/lib/SyntaxHighlight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const CheatSheet: React.VFC = () => (
  <S.Area>
    <Button />
    <IconButton />
    <NextLink />
    <PageTitle />
  </S.Area>
);

const Button: React.VFC = () => (
  <S.Section>
    <h1>ボタン</h1>
    <S.Button>Click me!!</S.Button>
    <details>
      <summary>コード</summary>
      <CssSyntaxHighlight>{S.Button}</CssSyntaxHighlight>
    </details>
    <details>
      <summary>解説</summary>
      <dl>
        <dt>display: inline-block;</dt>
        <dd>
          親要素で指定しているtext-align: center;を継承する為使い勝手が良い
        </dd>
        <dt>width: 300px;</dt>
        <dd>
          プロジェクトでは、ボタン幅は統一されている場合が多い
          <br />
          改行させたく無い場合は、
          <CssSyntaxHighlight>{S._Button}</CssSyntaxHighlight>
        </dd>
        <dt>max-width: 100%;</dt>
        <dd>親ボックスからはみ出ないようにする。</dd>

        <dt>padding: 20px 10px;</dt>
        <dd>
          heightを指定しては、ダメ。長いテキストが入るとはみ出るため
          <br />
          長いテキストが入っても最低限の見た目を確保する為にpaddingを指定
        </dd>

        <dt>border: 2px solid transparent; と border-color: currentColor;</dt>
        <dd>
          ホバー時に、border:
          2pxとするとボタンが大きくなるのでダメ。ホバー前から確保する。
          currentColorは、background-colorと連動が良い。
        </dd>

        <dt>font-size: 1.125rem;</dt>
        <dd>
          18pxとしたいが、フォントサイズを大きくしている人などに対応する為。
          <br />
          remの基準のルート要素(html要素)のfont-sizeは、16pxなので、それの1.125倍が18px
        </dd>
      </dl>
    </details>
  </S.Section>
);

const IconButton: React.VFC = () => (
  <S.Section>
    <h1>アイコン付きボタン</h1>
    <S.IconButton>
      Click me!!
      <FontAwesomeIcon icon={faArrowRight} />
    </S.IconButton>
    <details>
      <summary>コード</summary>
      <CssSyntaxHighlight>{S.IconButton}</CssSyntaxHighlight>
    </details>
    <details>
      <summary>解説</summary>
      <dl>
        <dt>position: relative;とposition: absolute;</dt>
        <dd>この組み合わせでsvg iconの位置を調整する</dd>
      </dl>

      <dl>
        <dt>top: 50%; と transform: translateY(-50%);</dt>
        <dd>上下の中央揃え</dd>
      </dl>
    </details>
  </S.Section>
);

const NextLink: React.VFC = () => (
  <S.Section>
    <h1>進む</h1>
    <S.NextLink href="#">進む</S.NextLink>
    <details>
      <summary>コード</summary>
      <CssSyntaxHighlight>{S.NextLink}</CssSyntaxHighlight>
    </details>
    <details>
      <summary>解説</summary>
      <dl>
        <dt>transform: rotate(45deg) translateY(-50%)</dt>
        <dd>回転させて矢印のように見せる</dd>
      </dl>
    </details>
  </S.Section>
);

const PageTitle: React.VFC = () => (
  <S.Section>
    <h1>ページタイトル</h1>
    <S.PageTitle>
      <S.PageTitleText>ページタイトル</S.PageTitleText>
    </S.PageTitle>
    <details>
      <summary>コード</summary>
      <CssSyntaxHighlight>{S.PageTitle}</CssSyntaxHighlight>
    </details>
    <details>
      <summary>解説</summary>
      <dl>
        <dt>display: inline-block;とtransform: translateY(-20%);</dt>
        <dd>ページタイトルのテキストを少し上に上げる</dd>
      </dl>
      <dl>
        <dt>left: 50%;とtransform: translateX(-50%);</dt>
        <dd>
          左右中央揃え
          <br />
          left: 100%;だと一番右
          <br />
          left: 0%;だと一番左
        </dd>
      </dl>
    </details>
  </S.Section>
);

// jscpd:ignore-end
