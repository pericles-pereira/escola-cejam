"use client";

import useBreakpoints from "@/src/hooks/useBreakpoints";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { forwardRef } from "react";

const Contatos = forwardRef((props, ref) => {
  const { isDesktop, isMobile, isTablet } = useBreakpoints();

  const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    margin-inline: ${isMobile
      ? "20px"
      : isTablet
      ? "24px"
      : isDesktop
      ? "28px"
      : "46px"};
    row-gap: 14px;
    margin-top: ${isMobile
      ? "60px"
      : isTablet
      ? "70px"
      : isDesktop
      ? "90px"
      : "105px"};
    margin-bottom: ${isMobile
      ? "20px"
      : isTablet
      ? "22px"
      : isDesktop
      ? "24px"
      : "28px"};

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
        margin-top: 7px;
        margin-right: auto;
        max-width: ${isMobile
          ? "240px"
          : isTablet
          ? "240px"
          : isDesktop
          ? "240px"
          : "299px"};
        width: 100%;
        height: 4px;
        background-color: #f2d954;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      }
    }
  `;

  const CardsContainer = styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: ${isMobile ? "8px" : isTablet ? "8px" : isDesktop ? "8px" : "49px"};
    margin-top: ${isMobile
      ? "60px"
      : isTablet
      ? "70px"
      : isDesktop
      ? "80px"
      : "128px"};
    margin-bottom: ${isMobile
      ? "20px"
      : isTablet
      ? "22px"
      : isDesktop
      ? "24px"
      : "28px"};
    align-items: start;
    flex-wrap: wrap;
    row-gap: 46px;
  `;

  const Card = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: ${isMobile
      ? "300px"
      : isTablet
      ? "300px"
      : isDesktop
      ? "300px"
      : "441px"};
    width: 100%;
    height: auto;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 20.5px;

      img {
        max-width: 95px;
        max-height: 95px;
        width: auto;
        height: auto;
        margin-left: auto;
        margin-right: auto;
      }

      div {
        max-width: 163px;
        width: 100%;
        height: 2px;
        background-color: #072d8f;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        margin-left: auto;
        margin-right: auto;
      }
    }

    h6 {
      font-family: "JostSemiBold", sans-serif;
      font-size: ${isMobile
        ? "20px"
        : isTablet
        ? "24px"
        : isDesktop
        ? "26px"
        : "32px"};
      line-height: auto;
      letter-spacing: 0%;
      margin-top: 18.5px;
      text-align: center;
    }

    span {
      font-family: "Jost", sans-serif;
      font-size: ${isMobile
        ? "18px"
        : isTablet
        ? "20px"
        : isDesktop
        ? "20px"
        : "32px"};
      line-height: auto;
      letter-spacing: 0%;
      margin-top: ${isMobile
        ? "16px"
        : isTablet
        ? "18px"
        : isDesktop
        ? "20px"
        : "47px"};
      text-align: center;
    }
  `;

  return (
    <Container ref={ref}>
      <h3>
        Contatos <div></div>
      </h3>

      <CardsContainer>
        <Card>
          <div>
            <img src="/images/home/contato-img1.png" alt="Contato - Endereço" />
            <div></div>
          </div>
          <h6>Endereço</h6>
          <span>
            Rua Humaitá, 349 - <br /> Sobreloja - Bela Vista - <br /> São Paulo
            - SP
          </span>
        </Card>

        <Card>
          <div>
            <img src="/images/home/contato-img2.png" alt="Contato - Email" />
            <div></div>
          </div>
          <h6>E-mail</h6>
          <span>comercial@escolacejam.com.br</span>
        </Card>

        <Card>
          <div>
            <img src="/images/home/contato-img3.png" alt="Contato - Telefone" />
            <div></div>
          </div>
          <h6>Telefone</h6>
          <span>
            (11) 2189-0799 <br />
            (também WhatsApp)
          </span>
        </Card>

        <Card sx={{ mt: "-10px" }}>
          <div>
            <img src="/images/home/contato-img4.png" alt="Contato - Horário" />
            <div></div>
          </div>
          <h6>Horário</h6>
          <span>
            Segunda a Sexta <br />
            das 08:00 às 18:00
          </span>
        </Card>
      </CardsContainer>
    </Container>
  );
});

export default Contatos;

