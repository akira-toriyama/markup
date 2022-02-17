import styled from "styled-components";

export const Contents = styled.div``;

type ItemProps = {
  color: string;
};
const Item = styled.div<ItemProps>`
  /* 枠線を内側に書く */
  /* 予測がしやすい */
  box-sizing: border-box;
  background-color: ${(props) => props.color};
`;

export const Items1 = styled(Item)`
  width: 100px;
  height: 100px;
  border: solid 1px black;
`;

// フォントサイズの相対性

// ------------------------------------------------
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
 * `em` 親要素のfont-sizeを基準にする
 * `rem` 文書のルート要素、つまりhtml要素のfont-sizeを基準にする
 */
export const Text = styled.p`
  font-size: calc(1rem + 0.5vw);
`;
// ------------------------------------------------
