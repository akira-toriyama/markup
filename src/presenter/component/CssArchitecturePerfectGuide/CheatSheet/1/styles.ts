// jscpd:ignore-start
import styled from "styled-components";

export const Area = styled.div`
  display: flex;
  gap: 16px;
`;

export const ButtonSection = styled.div`
  padding: 8px;
  margin: 16px;
  text-align: center;
  border: solid 1px black;
`;

export const ButtonSectionL = styled(ButtonSection)`
  text-align: left;
`;

export const ButtonSectionR = styled(ButtonSection)`
  text-align: right;
`;

export const Button = styled.a`
  display: inline-block;
  width: 300px;
  max-width: 100%;
  padding: 20px 10px;
  font-size: 1.125rem;
  color: #fff;
  text-align: center;
  text-decoration: none;
  background-color: #e25c00;
  border: 2px solid transparent;
  box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
  transition: 0.25s;

  &:focus,
  &:hover {
    color: #e25c00;
    background-color: #fff;
    border-color: currentColor;
  }
`;

export const Button2 = styled(Button)`
  width: auto;
  min-width: 300px;
`;

// jscpd:ignore-end
