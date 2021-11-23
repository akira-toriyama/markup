// jscpd:ignore-start
import styled, { css } from "styled-components";

export const Area = styled.div`
  padding: 8px;
  margin: 8px;
`;

export const Section = styled.div`
  padding: 8px;
  margin: 32px 0;
  border: solid 1px black;
`;

const buttonStyle = css`
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

export const Button = styled.a`
  ${buttonStyle}
`;

export const _Button = styled(Button)`
  width: auto;
  min-width: 300px;
`;

export const IconButton = styled.a`
  ${buttonStyle}
  position: relative;

  > svg {
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
  }
`;

export const NextLink = styled.a`
  position: relative;
  display: inline-block;
  color: #000;
  text-decoration: none;

  &::after {
    position: absolute;
    top: 50%;
    width: 0.375em;
    height: 0.375em;
    content: "";
    border-top: solid 2px #e25c00;
    border-right: solid 2px #e25c00;
    transform: rotate(45deg) translateY(-50%);
  }
`;

export const PageTitle = styled.h1`
  padding: 30px 10px;
  background-color: #e25c00;
  color: #ffffff;
  font-size: 1.75rem;
  text-align: center;
`;

export const PageTitleText = styled.span`
  position: relative;
  display: inline-block;
  transform: translateY(-20%);
  &::after {
    content: "";
    position: absolute;
    height: 1px;
    width: 80px;
    background-color: currentColor;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

// jscpd:ignore-end
