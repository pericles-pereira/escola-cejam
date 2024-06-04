"use client";

import styled from "@emotion/styled";
import { Box } from "@mui/material";

export default function HomeCards() {
  return (
    <Container>
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
}

const Container = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 78px;
  margin-bottom: 105px;
`;

const Card = styled(Box)`
  display: flex;
  flex-direction: column;
  padding-inline: 24px;
  padding-top: 84px;
  padding-bottom: 42px;
  border-radius: 32px;
  background-color: #f6f6f6;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.2);
  max-width: 474px;
  width: auto;
  max-height: 616px;
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
    max-width: 299px;
    width: 100%;
    height: 4px;
    background-color: #ffe500;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  h1 {
    font-family: "JostSemiBold", sans-serif;
    font-size: 32px;
    line-height: auto;
    letter-spacing: 0%;
    text-align: center;
    margin-top: 48px;
  }

  span {
    font-family: "Jost", sans-serif;
    font-size: 26px;
    line-height: auto;
    letter-spacing: 0%;
    text-align: center;
    margin-top: 24px;
    width: 100%;
  }
`;
