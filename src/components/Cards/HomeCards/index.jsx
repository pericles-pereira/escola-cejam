"use client";

import useBreakpoints from "@/src/hooks/useBreakpoints";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { forwardRef } from "react";

const HomeCards = forwardRef((props, ref) => {
  const { isDesktop, isMobile, isTablet } = useBreakpoints();

  const Container = styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: ${isMobile ? "30px" : isTablet ? "48px" : isDesktop ? "62px" : "78px"};
    row-gap: 64px;
    margin-bottom: ${isMobile
      ? "50px"
      : isTablet
      ? "60px"
      : isDesktop
      ? "80px"
      : "105px"};
    margin-top: ${isMobile
      ? "60px"
      : isTablet
      ? "80px"
      : isDesktop
      ? "100px"
      : "120px"};
  `;

  const Card = styled(Box)`
    display: flex;
    flex-direction: column;
    padding-inline: ${isMobile
      ? "14px"
      : isTablet
      ? "16px"
      : isDesktop
      ? "20px"
      : "24px"};
    padding-top: ${isMobile
      ? "34px"
      : isTablet
      ? "44px"
      : isDesktop
      ? "54px"
      : "84px"};
    padding-bottom: ${isMobile
      ? "24px"
      : isTablet
      ? "28px"
      : isDesktop
      ? "32px"
      : "42px"};
    border-radius: ${isMobile
      ? "24px"
      : isTablet
      ? "26px"
      : isDesktop
      ? "28px"
      : "32px"};
    background-color: #f6f6f6;
    box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.2);
    max-width: ${isMobile
      ? "374px"
      : isTablet
      ? "374px"
      : isDesktop
      ? "344px"
      : "474px"};
    width: auto;
    height: auto;
    cursor: pointer;

    :hover {
      scale: 1.1;
    }

    img {
      margin-inline: auto;
      margin-bottom: 32px;
    }

    div {
      margin-inline: auto;
      max-width: ${isMobile
        ? "210px"
        : isTablet
        ? "210px"
        : isDesktop
        ? "210px"
        : "299px"};
      width: 100%;
      height: 4px;
      background-color: #ffe500;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }

    h1 {
      font-family: "JostSemiBold", sans-serif;
      font-size: ${isMobile
        ? "29px"
        : isTablet
        ? "29px"
        : isDesktop
        ? "29px"
        : "32px"};
      line-height: auto;
      letter-spacing: 0%;
      text-align: center;
      margin-top: 48px;
    }

    span {
      font-family: "Jost", sans-serif;
      font-size: ${isMobile
        ? "24px"
        : isTablet
        ? "24px"
        : isDesktop
        ? "24px"
        : "26px"};
      line-height: auto;
      letter-spacing: 0%;
      text-align: center;
      margin-top: 24px;
      width: 100%;
    }
  `;

  return (
    <Container ref={ref}>
      <Card>
        <img src="/images/home/missao.png" alt="Missão" />
        <div></div>
        <h1>Nossa Missão</h1>
        <span>
          Oferecer um ensino de excelência, visando a formação de profissionais
          éticos e competentes, capazes de acompanhar o desenvolvimento
          cientifico, técnico e cultural, através do pensamento critico.
        </span>
      </Card>
      <Card>
        <img src="/images/home/visao.png" alt="Visão" />
        <div></div>
        <h1>Nossa Visão</h1>
        <span>
          Valorizar as relações humanas para a transformação da instituição numa
          comunidade de aprender, formando profissionais com excelência para
          atuação no mercado em equipes interprofissionais.
        </span>
      </Card>
      <Card>
        <img src="/images/home/valor.png" alt="Valores" />
        <div></div>
        <h1>Nossos Valores</h1>
        <span>
          Ética e transparência; Compromisso social; Conhecimento; Qualidade na
          Gestão; Equidade (buscando a igualdade sem diferenças); Competências;
          Atitude.
        </span>
      </Card>
    </Container>
  );
});

export default HomeCards;
