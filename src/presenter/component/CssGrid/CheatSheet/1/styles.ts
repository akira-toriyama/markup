// jscpd:ignore-start
import styled from "styled-components";
import { css } from "styled-components";

export const Section = styled.div`
  border: 3px solid black;
  margin: 30px;
  padding: 10px;
`;

export const Txt = styled.p`
  margin: 0;
  font-weight: bold;
  color: black;

  &::before {
    color: white;
    content: "(";
  }

  &::after {
    color: white;
    content: ")";
  }
`;

type ItemProps = {
  color: string;
};

const containerStyle = css`
  box-sizing: border-box;
  margin: 30px;
  border: 1px solid black;
`;

const itemStyle = css`
  box-sizing: border-box;
  border: 1px solid black;
`;

export const Container1 = styled.div`
  ${containerStyle}
  display: grid;
  grid-template-rows: 50px 100px 150px;
  grid-template-columns: 150px 100px;
`;

export const Item1 = styled.div<ItemProps>`
  ${itemStyle}
  background-color: ${(props) => props.color};
`;

export const Container2 = styled.div`
  ${containerStyle}
  display: grid;
`;

export const Item2 = styled.div<ItemProps>`
  ${itemStyle}
  background-color: ${(props) => props.color};
`;

export const Container3 = styled.div`
  ${containerStyle}
  display: grid;
  grid-template-columns: 50px 100px 1fr;
`;

export const Item3 = styled.div<ItemProps>`
  ${itemStyle}
  background-color: ${(props) => props.color};
`;

export const Container4 = styled.div`
  ${containerStyle}
  display: grid;
  grid-template-columns: 50px 1fr 50px 5fr;
`;

export const Item4 = styled.div<ItemProps>`
  ${itemStyle}
  background-color: ${(props) => props.color};
`;

export const Container5 = styled.div`
  ${containerStyle}
  display: grid;
  grid-template-columns: auto auto auto;
`;

export const Item5 = styled.div<ItemProps>`
  ${itemStyle}
  background-color: ${(props) => props.color};
`;

export const Container6 = styled.div`
  ${containerStyle}
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const Item6 = styled.div<ItemProps>`
  ${itemStyle}
  background-color: ${(props) => props.color};
`;

export const Container7 = styled.div`
  ${containerStyle}
  display: grid;
  grid-template-columns: auto 1fr 1fr;
`;

export const Item7 = styled.div<ItemProps>`
  ${itemStyle}
  background-color: ${(props) => props.color};
`;

export const Container8 = styled.div`
  ${containerStyle}
  display: grid;
  grid-template-columns: repeat(5, 1fr) auto;
`;

export const Item8 = styled.div<ItemProps>`
  ${itemStyle}
  background-color: ${(props) => props.color};
`;

/**
 * repeatで繰り返し
 */
export const Container9 = styled.div`
  ${containerStyle}
  display: grid;
  grid-template-columns: repeat(2, 50px 100px);
`;

export const Item9 = styled.div<ItemProps>`
  ${itemStyle}
  background-color: ${(props) => props.color};
`;
// jscpd:ignore-end
