// jscpd:ignore-start
import styled from "styled-components";

export const Area = styled.div`
  display: flex;
  gap: 16px;
`;

export const ButtonSection = styled.div`
  padding: 8px;
  margin: 16px;
  border: solid 1px black;
  text-align: center;
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
  background-color: #e25c00;
  border: 2px solid transparent;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  color: #fff;
  font-size: 1.125rem;
  text-align: center;
  text-decoration: none;
  transition: 0.25s;

  &:focus,
  &:hover {
    background-color: #fff;
    border-color: currentColor;
    color: #e25c00;
  }
`;

export const Button2 = styled(Button)`
  min-width: 300px;
  width: auto;
`;

// jscpd:ignore-end
