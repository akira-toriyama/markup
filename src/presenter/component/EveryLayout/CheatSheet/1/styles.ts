import styled from "styled-components";

/**
 * `box-sizing`に関して
 * 予測がしやすいので、枠線を内側に書く
 */
export const Item = styled.div<{
  color: string;
}>`
  box-sizing: border-box;
  background-color: ${(props) => props.color};

  width: 100px;
  height: 100px;
  border: solid 1px black;
`;

// フォントサイズの相対性
/**
 * 良くない例
 * 960px に意味があるか？
 * 959px ではだめなのか？
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BadText = styled.p`
  font-size: 100%;
  @media (min-width: 960px) {
    /* 960pxで 25%拡大 */
    font-size: 125%;
  }
`;

/**
 * `rem` 文書のルート要素、つまりhtml要素のfont-sizeを基準にする
 *
 * ブロック要素のサイズと相性が良い
 */
export const Text = styled.p`
  font-size: calc(1rem + 0.5vw);
`;

/**
 * `em` 親要素のfont-sizeを基準にする
 * インライン要素と相性が良い
 *
 * ```tsx
 * <h1>
 *   タイトル<strong>!!</strong>
 * </h1>
 * ```
 */
export const Strong = styled.strong`
  font-size: 1.125em;
`;

/**
 * `em` 親要素のfont-sizeを基準にする
 * インライン要素と相性が良い
 *
 * ```tsx
 * <h1>
 *   タイトル<strong>!!</strong>
 * </h1>
 * ```
 */
export const Little = styled.span`
  font-size: 0.75em;
`;
