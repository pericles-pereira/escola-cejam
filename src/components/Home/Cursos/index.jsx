"use client";

import styled from "@emotion/styled";
import { Box } from "@mui/material";

export default function Cursos() {
  return (
    <Container>
      <h3>
        Cursos
        <div></div>
      </h3>

      <div>
        <h1>Novidades em Breve</h1>
        <div>
            <img src="/images/home/courses-img1.png" alt="Cursos - Imagem 1" />
            <img src="/images/home/courses-img2.png" alt="Cursos - Imagem 2" />
        </div>
      </div>
    </Container>
  );
}

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-inline: 123px;
  row-gap: 14px;

  h3 {
    font-family: "Jost", sans-serif;
    font-size: 64px;
    line-height: auto;
    letter-spacing: 0%;
    display: flex;
    flex-direction: column;

    div {
      margin-top: 10px;
      margin-right: auto;
      max-width: 299px;
      width: 100%;
      height: 4px;
      background-color: #072d8f;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;

    h1 {
      font-family: "Jost", sans-serif;
      font-size: 96px;
      line-height: auto;
      letter-spacing: 0%;
      margin-top: auto;
      margin-bottom: auto;
    }

    div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
      gap: 95px;

      img {
        margin-top: auto;
        margin-bottom: auto;
        max-width: 414px;
        width: auto;
        max-height: 608px;
        height: auto;
        object-fit: cover;
      }
    }
  }
`;
