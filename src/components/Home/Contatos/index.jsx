"use client";

import styled from "@emotion/styled";
import { Box } from "@mui/material";

export default function Contatos() {
  return (
    <Container>
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

        <Card>
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
}

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-inline: 46px;
  row-gap: 14px;
  margin-top: 105px;
  margin-bottom: 28px;

  h3 {
    font-family: "Jost", sans-serif;
    font-size: 64px;
    line-height: auto;
    letter-spacing: 0%;
    display: flex;
    flex-direction: column;

    div {
      margin-top: 7px;
      margin-right: auto;
      max-width: 299px;
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
    gap: 49px;
    margin-top: 128px;
    margin-bottom: 28px;
    align-items: start;
    flex-wrap: wrap;
`;

const Card = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 441px;
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
    font-size: 32px;
    line-height: auto;
    letter-spacing: 0%;
    margin-top: 18.5px;
    text-align: center;
  }

  span {
    font-family: "Jost", sans-serif;
    font-size: 32px;
    line-height: auto;
    letter-spacing: 0%;
    margin-top: 47px;
    text-align: center;
  }
`;
