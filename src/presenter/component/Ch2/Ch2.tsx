import React from "react";
import * as S from "./styles";
import { Header } from "./Header";
import { Section1 } from "./Section1";
import { Footer } from "./Footer";

export const Ch2: React.VFC = () => {
  return (
    <S.Area>
      <Header />
      <Section1 />
      <Footer />
    </S.Area>
  );
};
