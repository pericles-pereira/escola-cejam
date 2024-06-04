"use client";

import HomeCards from "@/src/components/Cards/HomeCards";
import Contatos from "@/src/components/Home/Contatos";
import Cursos from "@/src/components/Home/Cursos";
import GuestLayout from "@/src/layouts/guest";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <GuestLayout>
      <Header>
        <span>
          Desde 2005, a Escola de Saúde CEJAM oferece cursos técnicos, livres e
          de pós-graduação em saúde. Com foco na ética e na qualidade do ensino,
          contribuiu com a formação de milhares de profissionais já ingressados
          no mercado de trabalho.
          <br />
          Credenciada pela AMERICAN HEART ASSOCIATION, seu CENTRO DE TREINAMENTO
          promove cursos de Suporte Básico a Vida (BLS) com reconhecimento
          internacional.
        </span>
        <img src="/images/home/banner-img.png" alt="Escola Cejam - Banner" />
      </Header>
      <HomeCards />
      <Cursos/>
      <Contatos/>
    </GuestLayout>
  );
}

const Header = styled(Box)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 135px;
  row-gap: 50px;
  margin-top: 82px;
  margin-bottom: 120px;

  span {
    font-family: "Jost", sans-serif;
    font-size: 32px;
    line-height: auto;
    letter-spacing: 0%;
    margin-top: auto;
    margin-bottom: auto;
    max-width: 802px;
    width: auto;
    text-align: justify;

    @media (min-width: 1921px) {
      margin-left: 93px;
    }
  }

  img {
    max-width: 757px;
    width: auto;
    max-height: 505px;
    height: auto;
    object-fit: cover;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    @media (min-width: 1921px) {
      margin-right: 13px;
    }
  }
`;
