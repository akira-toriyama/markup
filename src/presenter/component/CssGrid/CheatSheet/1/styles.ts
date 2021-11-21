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
  grid-auto-columns: 300px 100px;
  grid-auto-flow: column;
`;

export const Item14 = styled(Item)``;

export const Container15 = styled.div`
  display: grid;
  grid-template-rows: 100px 1fr 2fr;
  grid-template-columns: repeat(3, 1fr);
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
  grid-auto-rows: minmax(auto, 40px);
  overflow: hidden;
`;

export const Item17 = styled(Item)``;

export const Container18 = styled.div`
  display: grid;
  grid-template-columns: minmax(100px, 50%) 1fr 1fr;
`;

export const Item18 = styled(Item)``;

export const Container19 = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 100px;
`;

export const Item19 = styled(Item)``;

export const Container20 = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 100px;
`;

export const Item20 = styled(Item)``;

export const Container22 = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 100px;
  gap: 20px 50px;
`;

export const Item22 = styled(Item)``;

export const Container23 = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 100px);
  grid-template-columns: repeat(3, 100px);
  gap: 10px;
`;

export const Item23_1 = styled(Item)`
  grid-row-start: 1/2;
  grid-column: 1/4;
`;

export const Item23_2 = styled(Item)`
  grid-row-start: 2/3;
  grid-column: 1/3;
`;

export const Item23_3 = styled(Item)``;

export const Container24 = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 100px);
  grid-template-columns: repeat(3, 100px);
  gap: 10px;
`;

export const Item24_1 = styled(Item)`
  grid-area: 1/1/2/4;
`;

export const Item24_2 = styled(Item)`
  grid-area: 2/2/4/4;
`;

export const Container25 = styled.div`
  display: grid;
  gap: 10px;
  grid-template:
    "header  header  header" 100px
    "content content sidebar" 300px
    "footer  footer  _______" 50px /
    100px 150px 70px;
`;

export const Item25_1 = styled(Item)`
  grid-area: header;
`;

export const Item25_2 = styled(Item)`
  grid-area: content;
`;

export const Item25_3 = styled(Item)`
  grid-area: sidebar;
`;

export const Item25_4 = styled(Item)`
  grid-area: footer;
`;
