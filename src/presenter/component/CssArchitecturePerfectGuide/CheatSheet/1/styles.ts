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
  /* stylelint-disable */
  ${buttonStyle}
  position: relative;

  > svg {
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
  }
  /* stylelint-enable */
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
  font-size: 1.75rem;
  color: #fff;
  text-align: center;
  background-color: #e25c00;
`;

export const PageTitleText = styled.span`
  position: relative;
  display: inline-block;
  transform: translateY(-20%);

  &::after {
    position: absolute;
    bottom: -10px;
    left: 50%;
    width: 80px;
    height: 1px;
    content: "";
    background-color: currentColor;
    transform: translateX(-50%);
  }
`;

export const MediaSection = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const MediaImgWrapper = styled.figcaption`
  flex: 0 1 27.5833%;
  margin-right: 3.3333%;
`;

export const MediaImg = styled.img``;

export const MediaBody = styled.div``;

export const MediaTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 1.125rem;
  font-weight: bold;
`;

export const MediaTxt = styled.p``;

export const Card = styled.div`
  box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
`;

export const CardWithLink = styled.a`
  display: block;
  color: currentColor;
  text-decoration: none;
  box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
  transition: 0.25s;

  &:focus,
  &:hover {
    opacity: 0.75;
  }
`;

export const CardImgWrapper = styled.figcaption`
  position: relative;
  padding-top: 56.25%;
  overflow: hidden;
`;

export const CardBadge = styled.b`
  position: relative;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 0;
    height: 0;
    content: "";
    border-color: #e25c00 transparent transparent;
    border-style: solid;
    border-width: 3.75rem 3.75rem 0 0;
  }
`;

export const CardBadgeTxt = styled.span`
  position: absolute;
  top: 0.5rem;
  left: 0.3125rem;
  z-index: 2;
  font-size: 0.875rem;
  font-weight: bold;
  color: #fff;
  transform: rotate(-45deg);
`;

export const CardImg = styled.img`
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
`;

export const CardBody = styled.div`
  padding: 15px;
`;
export const CardTitle = styled.h3`
  margin-bottom: 5px;
  font-size: 1.125rem;
  font-weight: bold;
`;
export const CardTxt = styled.p`
  color: #777;
`;

export const CardCol3 = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -30px;

  > div {
    width: 31.707%;
    margin-right: 2.439%;
    margin-bottom: 30px;

    :nth-of-type(3n) {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 768px) {
    margin-bottom: -20px;

    > div {
      width: 100%;
      margin-right: 0;
      margin-bottom: 20px;
    }
  }
`;

export const HorizontalWrapper = styled.div`
  border: 1px solid #ddd;

  @media screen and (max-width: 768px) {
    overflow-x: auto;
    border-right-width: 0;
  }
`;

export const HorizontalTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const HorizontalTableHeader = styled.th`
  width: 20%;
  padding: 15px;
  font-weight: bold;
  vertical-align: middle;
  background-color: #efefef;
  border-bottom: 1px solid #ddd;
`;

export const HorizontalTableData = styled.td`
  padding: 15px;
  border-bottom: 1px solid #ddd;

  @media screen and (max-width: 768px) {
    white-space: nowrap;
  }
`;

export const HorizontalTableRow = styled.tr`
  :last-child {
    > th {
      border-bottom-width: 0;
    }

    > td {
      border-bottom-width: 0;
    }
  }
`;

export const Pager = styled.ul`
  display: flex;
  gap: 8px;
  margin: 0;
  list-style: none;
`;

export const PagerItem = styled.li`
  margin: 0;
`;

const pagerItemLinkStyle = {
  active: css`
    color: #fff;
    pointer-events: none;
    background-color: #e25c00;
  `,
  base: css`
    color: #e25c00;
  `,
};
export const PagerItemLink = styled.a<{ isActive?: boolean }>`
  /* stylelint-disable */
  ${(props) =>
    props.isActive ? pagerItemLinkStyle.active : pagerItemLinkStyle.base}

  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid currentColor;
  text-decoration: none;
  transition: 0.25s;

  &:focus,
  &:hover {
    color: #fff;
    background-color: #e25c00;
    opacity: 75%;
  }
  /* stylelint-enable */
`;

export const TabSection = styled.nav`
  @media screen and (max-width: 768px) {
    overflow-x: auto;
  }
`;

export const Tabs = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  list-style: none;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-wrap: nowrap;
    justify-content: flex-start;
    margin-bottom: 0;
    white-space: nowrap;
  }
`;

export const Tab = styled.li`
  margin: 0;
`;

export const TabTxt = styled.span`
  display: inline-block;
  padding-right: 30px;
  padding-bottom: 10px;
  padding-left: 30px;
  margin-bottom: 10px;
  border-bottom: 4px solid #efefef;
  text-decoration: none;
  transition: 0.25s;
  border-bottom-color: currentColor;
  color: #e25c00;
  pointer-events: none;
`;

export const TabLink = styled.a`
  display: inline-block;
  padding-right: 30px;
  padding-bottom: 10px;
  padding-left: 30px;
  margin-bottom: 10px;
  border-bottom: 4px solid #efefef;
  color: #777;
  text-decoration: none;
  transition: 0.25s;

  &:focus,
  &:hover {
    border-bottom-color: currentColor;
    color: #e25c00;
    opacity: 0.75;
  }
`;

export const CTA = styled.div`
  padding: 16px 30px 8px;
  background-color: rgba(221 116 44 5%);
  border: 1px solid #e25c00;
  text-align: center;
`;

export const CTATitle = styled.h2`
  margin: 0;
  padding-bottom: 10px;
  border-bottom: 1px solid currentColor;
  color: #e25c00;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const FAQ = styled.div``;

export const FAQQWrapper = styled.dt`
  margin: 0;
  position: relative;
  display: flex;
  align-items: flex-start;
  box-sizing: content-box;
  min-height: 45px;
  padding-left: 60px;
  margin-bottom: 15px;
`;

export const FAQAWrapper = styled.dd`
  margin: 0;
  position: relative;
  display: flex;
  align-items: flex-start;
  box-sizing: content-box;
  min-height: 45px;
  padding-left: 60px;
`;

export const FAQQIcon = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  font-weight: normal;
  line-height: 45px;
  text-align: center;
  background-color: #e25c00;
  color: #fff;
`;

export const FAQAIcon = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  font-weight: normal;
  line-height: 45px;
  text-align: center;
  background: #efefef;
  color: #e25c00;
`;

export const FAQQTxt = styled.span`
  padding-top: 12px;
  font-weight: bold;
`;

export const FAQATxt = styled.p`
  margin-bottom: 20px;
`;

export const Accordion = styled.dl``;

export const AccordionTitle = styled.dt``;

export const AccordionTitleInner = styled.button`
  position: relative;
  display: block;
  width: 100%;
  padding: 10px 40px 10px 15px;
  background-color: #e25c00;
  border: 2px solid #e25c00;
  color: #fff;
  font-size: 1.125rem;
  text-align: left;
  cursor: pointer;
  transition: 0.25s;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    right: 15px;
    display: block;
    width: 20px;
    height: 2px;
    background-color: currentColor;
    transform: translateY(-50%);
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 24px;
    display: block;
    width: 2px;
    height: 20px;
    background-color: currentColor;
    transform: translateY(-50%);
  }

  &:focus,
  &:hover {
    background-color: #fff;
    color: #e25c00;
  }
`;

export const AccordionTitleInner2 = styled.button`
  position: relative;
  display: block;
  width: 100%;
  padding: 10px 40px 10px 15px;
  background-color: #e25c00;
  border: 2px solid #e25c00;
  color: #fff;
  font-size: 1.125rem;
  text-align: left;
  cursor: pointer;
  transition: 0.25s;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    right: 15px;
    display: block;
    width: 20px;
    height: 2px;
    background-color: currentColor;
    transform: translateY(-50%);
  }

  &:focus,
  &:hover {
    background-color: #fff;
    color: #e25c00;
  }
`;

export const AccordionDescription = styled.dd`
  margin: 0;
  padding: 15px;
  border: 1px solid #ddd;
`;

export const AccordionDescriptionInner = styled.p`
  margin: 0;
`;

// jscpd:ignore-end
