"use client";

import useBreakpoints from "@/src/hooks/useBreakpoints";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { forwardRef } from "react";

const Cursos = forwardRef((props, ref) => {
  const { isDesktop, isMobile, isTablet } = useBreakpoints();

  const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    margin-inline: ${isMobile
      ? "26px"
      : isTablet
      ? "28px"
      : isDesktop
      ? "32px"
      : "123px"};
    row-gap: 24px;

    h3 {
      font-family: "Jost", sans-serif;
      font-size: ${isMobile
        ? "42px"
        : isTablet
        ? "48px"
        : isDesktop
        ? "48px"
        : "64px"};
      line-height: auto;
      letter-spacing: 0%;
      display: flex;
      flex-direction: column;

      div {
        margin-top: 10px;
        margin-right: auto;
        max-width: ${isMobile
          ? "210px"
          : isTablet
          ? "210px"
          : isDesktop
          ? "210px"
          : "299px"};
        width: 100%;
        height: 4px;
        background-color: #072d8f;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      }
    }

    div {
      display: flex;
      flex-direction: row;
      width: ${isMobile || isTablet ? "100%" : ""};
      justify-content: space-between;
      flex-wrap: wrap;

      h1 {
        font-family: "Jost", sans-serif;
        font-size: ${isMobile
          ? "46px"
          : isTablet
          ? "64px"
          : isDesktop
          ? "86px"
          : "96px"};
        line-height: auto;
        letter-spacing: 0%;
        margin-top: auto;
        margin-bottom: auto;
        max-width: ${isMobile
          ? "auto"
          : isTablet
          ? "auto"
          : isDesktop
          ? "340px"
          : "auto"};
      }

      div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;

        gap: ${isMobile
          ? "35px"
          : isTablet
          ? "35px"
          : isDesktop
          ? "35px"
          : "95px"};

        img {
          margin-top: auto;
          margin-bottom: auto;
          max-width: ${isMobile
            ? "auto"
            : isTablet
            ? "314px"
            : isDesktop
            ? "314px"
            : "414px"};
          width: auto;
          max-height: ${isMobile
            ? "auto"
            : isTablet
            ? "508px"
            : isDesktop
            ? "508px"
            : "608px"};
          height: auto;
          object-fit: cover;
        }
      }
    }
  `;

  return (
    <Container ref={ref}>
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
})

export default Cursos;

