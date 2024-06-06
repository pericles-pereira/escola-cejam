"use client";

import styled from "@emotion/styled";
import { Box, ButtonBase } from "@mui/material";
import useBreakpoints from "../hooks/useBreakpoints";
import Link from "next/link";

export default function GuestLayout({
  children,
  paraInicio,
  paraEscola,
  paraCursos,
  paraContato,
}) {
  const { isDesktop, isMobile, isTablet } = useBreakpoints();

  const Container = styled.main`
    padding-top: ${isMobile
      ? "20px"
      : isTablet
      ? "24px"
      : isDesktop
      ? "28px"
      : "69px"};
    padding-left: ${isMobile
      ? "12px"
      : isTablet
      ? "28px"
      : isDesktop
      ? "30px"
      : "54px"};
    padding-right: ${isMobile
      ? "12px"
      : isTablet
      ? "28px"
      : isDesktop
      ? "30px"
      : "67px"};
    padding-bottom: ${isMobile
      ? "20px"
      : isTablet
      ? "24px"
      : isDesktop
      ? "28px"
      : "79px"};
  `;

  const AppBar = styled.header`
    display: flex;
    flex-direction: ${isMobile ? "column" : "row"};
    justify-content: ${isMobile ? "center" : "space-between"};
    max-height: ${isMobile
      ? "85px"
      : isTablet
      ? "85px"
      : isDesktop
      ? "85px"
      : "155px"};
    height: auto;
    width: 100%;
    padding-top: ${isMobile ? "60px" : "0px"};
    padding-bottom: ${isMobile ? "70px" : "0px"};
    border-bottom: 2px solid #164174;

    img {
      margin-left: ${isMobile
        ? "auto"
        : isTablet
        ? "18px"
        : isDesktop
        ? "20px"
        : "40px"};
      margin-right: ${isMobile ? "auto" : "0px"};
      margin-bottom: ${isMobile
        ? "16px"
        : isTablet
        ? "18px"
        : isDesktop
        ? "20px"
        : "30px"};
      object-fit: cover;
      max-width: ${isMobile
        ? "180px"
        : isTablet
        ? "180px"
        : isDesktop
        ? "180px"
        : "363px"};
      width: auto;
      height: auto;
    }
  `;

  const AppBarItensContainer = styled(Box)`
    display: flex;
    flex-direction: row;
    flex-wrap: ${isMobile ? "wrap" : "nowrap"};
    justify-content: center;
    gap: ${isMobile ? "8px" : isTablet ? "16px" : isDesktop ? "18px" : "44px"};
    margin-right: ${isMobile
      ? "0px"
      : isTablet
      ? "36px"
      : isDesktop
      ? "45px"
      : "120px"};
    margin-bottom: ${isMobile
      ? "0px"
      : isTablet
      ? "0px"
      : isDesktop
      ? "0px"
      : "47px"};
  `;

  const AppBarButton = styled.button`
    font-family: "Jost", sans-serif;
    font-size: ${isMobile
      ? "21px"
      : isTablet
      ? "25px"
      : isDesktop
      ? "27px"
      : "32px"};
    line-height: auto;
    letter-spacing: 0%;
    color: black;
    padding-inline: ${isMobile ? "2px" : "8px"};

    :hover {
      color: #ffe500;
    }
  `;

  const Footer = styled.footer`
    font-family: "Jost", sans-serif;
    font-size: ${isMobile
      ? "22px"
      : isTablet
      ? "24px"
      : isDesktop
      ? "26px"
      : "32px"};
    line-height: auto;
    letter-spacing: 0%;
    text-transform: uppercase;
    max-height: ${isMobile
      ? "auto"
      : isTablet
      ? "60px"
      : isDesktop
      ? "60px"
      : "133px"};
    height: auto;
    border-top: 2px solid #164174;
    align-items: end;
  `;

  const FooterBox = styled(Box)`
    display: flex;
    flex-direction: ${isMobile ? "column" : "row"};
    gap: ${isMobile ? "18px" : isTablet ? "50px" : isDesktop ? "50px" : "92px"};
    margin-top: ${isMobile
      ? "22px"
      : isTablet
      ? "22px"
      : isDesktop
      ? "22px"
      : "59px"};

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
    gap: ${isMobile ? "14px" : isTablet ? "14px" : isDesktop ? "14px" : "18px"};
    max-height: ${isMobile
      ? "56px"
      : isTablet
      ? "56px"
      : isDesktop
      ? "56px"
      : "74px"};
    height: auto;

    img {
      max-height: ${isMobile
        ? "35px"
        : isTablet
        ? "45px"
        : isDesktop
        ? "45px"
        : "74px"};
      max-width: ${isMobile
        ? "35px"
        : isTablet
        ? "45px"
        : isDesktop
        ? "45px"
        : "74px"};
      height: auto;
      width: auto;
    }
  `;

  return (
    <Container>
      <AppBar>
        <Link href="/">
          <img src="/images/logo.png" alt="Logo - Escola Cejam" />
        </Link>
        <AppBarItensContainer>
          <AppBarButton onClick={paraInicio}>Inicio</AppBarButton>
          <AppBarButton onClick={paraEscola}>A Escola</AppBarButton>
          <AppBarButton onClick={paraCursos}>Cursos</AppBarButton>
          <AppBarButton onClick={paraContato}>Contato</AppBarButton>
        </AppBarItensContainer>
      </AppBar>
      <section className="min-h-screen h-full">{children}</section>
      <Footer>
        <FooterBox>
          <span className="mb-3.5">Redes Sociais</span>
          <FooterActionsContainer>
            <a
              href="https://www.facebook.com/escoladesaude.cejam?mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/social-media/facebook.png" alt="Facebook" />
            </a>
            <a
              href="https://www.instagram.com/escolacejam?igsh=MXIyMGpudmlwY2VodA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/social-media/instagram.png" alt="Instagram" />
            </a>
            <a
              href="https://youtube.com/@escolacejam?si=3v1Mbe_x9O6hl-ux"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/social-media/youtube.png" alt="Youtube" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=21890799"
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
