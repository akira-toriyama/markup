import React from "react";
import * as S from "./styles";
import { Header } from "./Header";
import { Product } from "./Product";
import { Footer } from "./Footer";

export const Ch2: React.VFC = () => {
  return (
    <S.Area>
      <Header />
      <Product />
      <Product />
      <Product />
      <Footer />
    </S.Area>
  );
};
