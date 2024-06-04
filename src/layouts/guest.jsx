"use client";

import styled from "@emotion/styled";
import { Box, ButtonBase, IconButton } from "@mui/material";

export default function GuestLayout({ children }) {
  return (
    <Container>
      <AppBar>
        <img src="/images/logo.png" alt="Logo - Escola Cejam" />
        <AppBarItensContainer>
          <AppBarButton>Inicio</AppBarButton>
          <AppBarButton>A Escola</AppBarButton>
          <AppBarButton>Cursos</AppBarButton>
          <AppBarButton>Contato</AppBarButton>
        </AppBarItensContainer>
      </AppBar>
      <section className="min-h-screen h-full">{children}</section>
      <Footer>
        <FooterBox>
          <span className="mb-3.5">Redes Sociais</span>
          <FooterActionsContainer>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/social-media/facebook.png" alt="Facebook" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/social-media/instagram.png" alt="Instagram" />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/social-media/youtube.png" alt="Youtube" />
            </a>
            <a
              href="https://www.whatsapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/social-media/whatsapp.png" alt="Whatsapp" />
            </a>
          </FooterActionsContainer>
        </FooterBox>
      </Footer>
    </Container>
  );
}

const Container = styled.main`
  padding-top: 69px;
  padding-left: 54px;
  padding-right: 67px;
  padding-bottom: 79px;
`;

const AppBar = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-height: 155px;
  height: auto;
  width: 100%;
  border-bottom: 2px solid #164174;

  img {
    margin-left: 40px;
    margin-bottom: 30px;
    object-fit: cover;
  }
`;

const AppBarItensContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 44px;
  margin-right: 120px;
  margin-bottom: 47px;
`;

const AppBarButton = styled(ButtonBase)`
  font-family: "Jost", sans-serif;
  font-size: 32px;
  line-height: auto;
  letter-spacing: 0%;
  color: black;
  padding: 0px;
  margin: 0px;

  :hover {
    color: #ffe500;
  }
`;

const Footer = styled.footer`
  font-family: "Jost", sans-serif;
  font-size: 32px;
  line-height: auto;
  letter-spacing: 0%;
  text-transform: uppercase;
  max-height: 133px;
  height: auto;
  border-top: 2px solid #164174;
  align-items: end;
`;

const FooterBox = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 92px;
  margin-top: 59px;

  span {
    text-align: center;
    margin-top: auto;
    margin-bottom: auto;
  }
`;

const FooterActionsContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: auto;
  gap: 18px;
  max-height: 74px;
  height: auto;

  img {
    max-height: 74px;
    max-width: 74px;
    height: auto;
    width: auto;
  }
`;
