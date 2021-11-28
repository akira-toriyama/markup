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
    <Media />
    <Card />
    <CardCol3 />
    <HorizontalTable />
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

const Media: React.VFC = () => (
  <S.Section>
    <h1>メディア</h1>
    <S.MediaSection>
      <S.MediaImgWrapper>
        <S.MediaImg
          src="/food_konbini_onigiri.png"
          alt="コンビニのおにぎり"
          width="100%"
        />
      </S.MediaImgWrapper>
      <S.MediaBody>
        <S.MediaTitle>コンビニのおにぎり</S.MediaTitle>
        <S.MediaTxt>
          おにぎりの説明 おにぎりの説明 おにぎりの説明 おにぎりの説明
          おにぎりの説明 おにぎりの説明 おにぎりの説明 おにぎりの説明
          おにぎりの説明 おにぎりの説明 おにぎりの説明 おにぎりの説明
        </S.MediaTxt>
      </S.MediaBody>
    </S.MediaSection>
    <details>
      <summary>コード</summary>
      <CssSyntaxHighlight>{S.MediaSection}</CssSyntaxHighlight>
      <CssSyntaxHighlight>{S.MediaImgWrapper}</CssSyntaxHighlight>
    </details>
    <details>
      <summary>解説</summary>
      <dl>
        <dt>display: flex;とalign-items: center;</dt>
        <dd>画像と、テキストを横並び&上下中央にしたい場合</dd>
      </dl>
      <dl>
        <dt>flex: 0 1 27.58333%;</dt>
        <dd>
          <ul>
            <li>
              1番目: flex-grow
              <br />
              余白があった場合どのくらい広げるか？ 数字が大きいほうが、広がる
            </li>
            <li>
              2番目: flex-shrink
              <br />
              はみ出した場合どのくらい縮めるか？ 数字が小さいほうが、縮む
            </li>
            <li>
              3番目: flex-basis
              <br />
              flex-basisは子要素の基準となるサイズを指定します。
            </li>
          </ul>
          <br />

          <br />
        </dd>
      </dl>
    </details>
  </S.Section>
);

const Card: React.VFC = () => (
  <S.Section>
    <h1>カード</h1>
    <S.Card>
      <S.CardBadge>
        <S.CardBadgeTxt>New</S.CardBadgeTxt>
      </S.CardBadge>
      <S.CardImgWrapper>
        <S.CardImg src="/code.jpg" alt="コード" />
      </S.CardImgWrapper>
      <S.CardBody>
        <S.CardTitle>コード</S.CardTitle>
        <S.CardTxt>
          HTML HTML HTML HTML HTML HTML HTML HTML HTML HTML HTML HTML HTML HTML
        </S.CardTxt>
      </S.CardBody>
    </S.Card>

    <S.CardWithLink href="#">
      <S.CardImgWrapper>
        <S.CardImg src="/code.jpg" alt="コード" />
      </S.CardImgWrapper>
      <S.CardBody>
        <S.CardTitle>コード</S.CardTitle>
        <S.CardTxt>
          HTML HTML HTML HTML HTML HTML HTML HTML HTML HTML HTML HTML HTML HTML
        </S.CardTxt>
      </S.CardBody>
    </S.CardWithLink>

    <details>
      <summary>コード</summary>
      <CssSyntaxHighlight>{S.CardImgWrapper}</CssSyntaxHighlight>
      <CssSyntaxHighlight>{S.CardImg}</CssSyntaxHighlight>
      <CssSyntaxHighlight>{S.CardBadge}</CssSyntaxHighlight>
    </details>
    <details>
      <summary>解説</summary>
      <dl>
        <dt>position: relative; padding-top: 56.25%;</dt>
        <dd>
          下記の上下中央揃え用に、position:
          relative;その場合高さが確保できないので、padding-topで指定
          56.25にすると おおよそ 16:9
        </dd>
        <dt>position: absolute; top: 50%; transform: translateY(-50%);</dt>
        <dd>上下中央揃え</dd>

        <dt>
          border-width: 3.75rem 3.75rem 0 0; border-style: solid; border-color:
          #e25c00 transparent transparent transparent;
        </dt>
        <dd>
          三角形を作る
          <br />
          http://apps.eky.hk/css-triangle-generator/
        </dd>
      </dl>
    </details>
  </S.Section>
);

const CardCol3: React.VFC = () => (
  <S.Section>
    <h1>3カラム</h1>
    <S.CardCol3>
      <S.Card>
        <S.CardBadge>
          <S.CardBadgeTxt>New</S.CardBadgeTxt>
        </S.CardBadge>
        <S.CardImgWrapper>
          <S.CardImg src="/code.jpg" alt="コード" />
        </S.CardImgWrapper>
        <S.CardBody>
          <S.CardTitle>コード</S.CardTitle>
          <S.CardTxt>
            HTML HTML HTML HTML HTML HTML HTML HTML HTML HTML HTML HTML HTML
            HTML
          </S.CardTxt>
        </S.CardBody>
      </S.Card>
      <S.Card>
        <S.CardBadge>
          <S.CardBadgeTxt>New</S.CardBadgeTxt>
        </S.CardBadge>
        <S.CardImgWrapper>
          <S.CardImg src="/code.jpg" alt="コード" />
        </S.CardImgWrapper>
        <S.CardBody>
          <S.CardTitle>コード</S.CardTitle>
          <S.CardTxt>
            HTML HTML HTML HTML HTML HTML HTML HTML HTML HTML HTML HTML HTML
            HTML
          </S.CardTxt>
        </S.CardBody>
      </S.Card>
      <S.Card>
        <S.CardBadge>
          <S.CardBadgeTxt>New</S.CardBadgeTxt>
        </S.CardBadge>
        <S.CardImgWrapper>
          <S.CardImg src="/code.jpg" alt="コード" />
        </S.CardImgWrapper>
        <S.CardBody>
          <S.CardTitle>コード</S.CardTitle>
          <S.CardTxt>
            HTML HTML HTML HTML HTML HTML HTML HTML HTML HTML HTML HTML HTML
            HTML
          </S.CardTxt>
        </S.CardBody>
      </S.Card>
    </S.CardCol3>

    <details>
      <summary>コード</summary>
      <CssSyntaxHighlight>{S.CardCol3}</CssSyntaxHighlight>
    </details>
    <details>
      <summary>解説</summary>
      <dl>
        <dt>特筆事項無し</dt>
        <dd></dd>
      </dl>
    </details>
  </S.Section>
);

const HorizontalTable: React.VFC = () => (
  <S.Section>
    <h1>水平 テーブル</h1>
    <S.HorizontalWrapper>
      <S.HorizontalTable>
        <tbody>
          <S.HorizontalTableRow>
            <S.HorizontalTableHeader>th</S.HorizontalTableHeader>
            <S.HorizontalTableData>td</S.HorizontalTableData>
          </S.HorizontalTableRow>

          <S.HorizontalTableRow>
            <S.HorizontalTableHeader>th</S.HorizontalTableHeader>
            <S.HorizontalTableData>
              td td td td td td td td td td td td td td td td td td td td td td
              td td td td td td td td td td
            </S.HorizontalTableData>
          </S.HorizontalTableRow>

          <S.HorizontalTableRow>
            <S.HorizontalTableHeader>th</S.HorizontalTableHeader>
            <S.HorizontalTableData>td</S.HorizontalTableData>
          </S.HorizontalTableRow>
        </tbody>
      </S.HorizontalTable>
    </S.HorizontalWrapper>
    <details>
      <summary>コード</summary>
      <CssSyntaxHighlight>{S.HorizontalWrapper}</CssSyntaxHighlight>
      <CssSyntaxHighlight>{S.HorizontalTable}</CssSyntaxHighlight>
    </details>
    <details>
      <summary>解説</summary>
      <dl>
        <dt>横スクロール</dt>
        <dd>d</dd>
      </dl>
    </details>
  </S.Section>
);
// jscpd:ignore-end
