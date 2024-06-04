"use client";

import HomeCards from "@/src/components/Cards/HomeCards";
import Contatos from "@/src/components/Home/Contatos";
import Cursos from "@/src/components/Home/Cursos";
import useBreakpoints from "@/src/hooks/useBreakpoints";
import GuestLayout from "@/src/layouts/guest";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { useRef } from "react";

export default function Home() {
  const { isDesktop, isMobile, isTablet } = useBreakpoints();

  const inicioRef = useRef(null);
  const escolaRef = useRef(null);
  const cursosRef = useRef(null);
  const contatoRef = useRef(null);

  const paraInicio = () => inicioRef.current.scrollIntoView({ behavior: 'smooth' });
  const paraEscola = () => escolaRef.current.scrollIntoView({ behavior: 'smooth' });
  const paraCursos = () => cursosRef.current.scrollIntoView({ behavior: 'smooth' });
  const paraContatos = () => contatoRef.current.scrollIntoView({ behavior: 'smooth' });

  const Header = styled(Box)`
    display: flex;
    flex-direction: row;
    flex-wrap: ${isMobile || isTablet ? "wrap" : "nowrap"};
    justify-content: center;
    column-gap:  ${isMobile ? "65px" : isTablet ? "85px" : isDesktop ? "100px" : "135px"};
    row-gap:  ${isMobile ? "20px" : isTablet ? "30px" : isDesktop ? "40px" : "50px"};
    margin-top:  ${isMobile ? "36px" : isTablet ? "48px" : isDesktop ? "64px" : "82px"};

    span {
      font-family: "Jost", sans-serif;
      font-size: ${isMobile ? "18px" : isTablet ? "22px" : isDesktop ? "26px" : "32px"};
      line-height: auto;
      letter-spacing: 0%;
      margin-top: auto;
      margin-bottom: auto;
      max-width:  ${isMobile ? "404px" : isTablet ? "504px" : isDesktop ? "608px" : "802px"};
      width: auto;
      text-align: justify;
      margin-left:  ${isMobile ? "0px" : isTablet ? "0px" : isDesktop ? "23px" : "93px"};
    }

    img {
      max-width:  ${isMobile ? "357px" : isTablet ? "457px" : isDesktop ? "457px" : "757px"};
      width: auto;
      max-height:  ${isMobile ? "205px" : isTablet ? "305px" : isDesktop ? "305px" : "505px"};
      margin-inline: ${isMobile || isTablet ? "16px" : "0px"};
      height: auto;
      object-fit: cover;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      margin-right: ${isMobile ? "0px" : isTablet ? "0px" : isDesktop ? "10px" : "13px"};
    }
  `;

  return (
    <GuestLayout paraContato={paraContatos} paraCursos={paraCursos} paraEscola={paraEscola} paraInicio={paraInicio}>
      <Header ref={inicioRef}>
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
      <HomeCards ref={escolaRef} />
      <Cursos ref={cursosRef} />
      <Contatos ref={contatoRef} />
    </GuestLayout>
  );
}
