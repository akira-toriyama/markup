import styled from "styled-components";

export const Area = styled.div`
  box-sizing: border-box;
  display: grid;
  border: 1px solid black;
`;

export const Section = styled.div<{ color: string }>`
  box-sizing: border-box;
  background-color: ${(props) => props.color};
  border: 1px solid black;
`;
