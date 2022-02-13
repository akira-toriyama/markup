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
