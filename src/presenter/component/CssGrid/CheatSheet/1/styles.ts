import styled from "styled-components";

export const Section = styled.div`
  padding: 10px;
  margin: 30px;
  border: 3px solid black;
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

export const Container1 = styled.div`
  display: grid;
  grid-template-rows: 50px 100px 150px;
  grid-template-columns: 150px 100px;
`;

const Item = styled.div<ItemProps>`
  background-color: ${(props) => props.color};
`;

export const Item1 = styled(Item)``;

export const Container2 = styled.div`
  display: grid;
`;

export const Item2 = styled(Item)``;

export const Container3 = styled.div`
  display: grid;
  grid-template-columns: 50px 100px 1fr;
`;

export const Item3 = styled(Item)``;

export const Container4 = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr 50px 5fr;
`;

export const Item4 = styled(Item)``;

export const Container5 = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
`;

export const Item5 = styled(Item)``;

export const Container6 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const Item6 = styled(Item)``;

export const Container7 = styled.div`
  display: grid;
  grid-template-columns: auto 1fr 1fr;
`;

export const Item7 = styled(Item)``;

export const Container8 = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr) auto;
`;

export const Item8 = styled(Item)``;

export const Container9 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50px 100px);
`;

export const Item9 = styled(Item)``;

export const Container10 = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
`;

export const Item10 = styled(Item)``;

export const Container11 = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
`;

export const Item11 = styled(Item)``;

export const Container12 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 80px;
`;

export const Item12 = styled(Item)``;

export const Container13 = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 50px);
  grid-auto-flow: column;
`;

export const Item13 = styled(Item)``;

export const Container14 = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 150px);
  grid-auto-flow: column;
  grid-auto-columns: 300px 100px;
`;

export const Item14 = styled(Item)``;

export const Container15 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 1fr 2fr;
`;

export const Item15 = styled(Item)``;

export const Container16 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(50px, auto);
`;

export const Item16 = styled(Item)``;

export const Container17 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(auto, 2.5rem);
  overflow: hidden;
`;

export const Item17 = styled(Item)``;
