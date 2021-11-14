import styled from "styled-components";

export const Area = styled.div`
  display: grid;
  border: 1px solid black;
  box-sizing: border-box;
`;

export const Section = styled.div<{ color: string }>`
  border: 1px solid black;
  box-sizing: border-box;
  background-color: ${(props) => props.color};
`;
