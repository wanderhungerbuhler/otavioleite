import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1360px;
  width: 90%;
  margin: 0 auto;

  h1, h2, h3 { color: #005AFF; font-size: 2.7em; letter-spacing: -2px; }
  p { color: #999; }
`;

export const Informative = styled.div`
  height: 500px;
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 50px;

  /* a { width: 467px; height: 500px; cursor: pointer; } */
  .informative-download { width: 100%; height: 500px; background: url('./assets/informativo.png') no-repeat center center;
    background-size: 70%;}

  @media (max-width: 500px) {
    .informative-download { background: url('./assets/informativo-mobile.png') no-repeat right center;
      background-size: cover; }
  }
`;

export const Bio = styled.div`
  min-height: 700px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 70px auto;
  margin-bottom: 70px;

  a { width: 30%; background: #005AFF; color: #fff; padding: 10px; display: block; margin-top: 10px;
    text-align: center; text-decoration: none; font-size: 1em; border-radius: 7px; }

  h1 { font-size: 3em; }

  .otavioleite {
    width: 467px;
    min-height: 500px;
    background: url('./assets/otavioleite-bio.png') no-repeat center center;
    background-size: 100%;
  }

  .bio-otavioleite {
    width: 45%;
    p { color: #999; margin-top: 20px; }
  }

  @media (max-width: 500px) {
    flex-direction: column;
    .otavioleite { width: 100%; }
    .bio-otavioleite { width: 100%; }
  }
`;

export const Actions = styled.div`
  height: 700px;
  .descriptions-actions {
    width: 50%;
    margin: 0 auto;
    text-align: center;

  }

  @media (max-width: 500px) {
    .descriptions-actions { width: 100%; }
  }
`;

export const ContainerAbout = styled.div`
  .logoAbout {
    width: 150px;
    height: 107px;
    background: url('../assets/logo.svg') no-repeat center center;
    background-size: 100%;
    margin: 10px auto;
    display: block;
  }

  .content-about {
    max-width: 760px;
    width: 100%;
    margin: -70px auto;
    background: #FFF;
    padding: 5px 20px;
    color: #999;
    z-index: 1;
    position: relative;
    margin-bottom: 25px;


    p { margin-top: 25px; margin-bottom: 25px; z-index: 1; }
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 70px;

    li { list-style: none; }
  }
`;

export const SliderAboutProjects = styled.section`
  margin: 30px auto;
  display: flex;
  justify-content: flex-start;

  .active { flex: 35%; }

  article {
    width: 210px;
    height: 500px;
    overflow: hidden;
    background: #005AFF;
    transition: all .5s ease-in-out;
    flex: 0 0 16%;
    position: relative;

    @media (max-width: 500px) {
      margin-top: 10px;
      flex: 33%;
    }

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    &:hover { width: 430px; cursor: pointer; flex: 0 0 35%; left: 0;
      transition: all .5s ease-in-out; }

    .icons-projects {
      width: 40%;
      height: 100px;
      text-align: center;
      justify-content: center;
      align-items: center;
      /* border-top-left-radius: 7px;
      border-top-right-radius: 7px; */
      background: url('./assets/icon-label.png') no-repeat bottom center;
      background-size: 100%;

      span { font-size: 1em; color: #FFF; font-weight: 600; margin-top: 57px;
        text-shadow: 0 0 3px #000; display: block; z-index: 100; }
    }

  }

  article:nth-child(1) { border-top-left-radius: 10px; border-bottom-left-radius: 10px; background: url('./assets/pcds.png') no-repeat center center; background-size: cover; }
  article:nth-child(2) { background: url('./assets/turismo.png') no-repeat center center; background-size: cover; }
  article:nth-child(3) { background: url('./assets/educacao.png') no-repeat center center; background-size: cover; }
  article:nth-child(4) { background: url('./assets/escotismo.png') no-repeat center center; background-size: cover; }
  article:nth-child(5) { background: url('./assets/meioambiente.png') no-repeat center center;
    background-size: cover; border-top-right-radius: 10px; border-bottom-right-radius: 10px;
    .icons-projects { width: 150px; }
  }
`;

export const LawsandProjects = styled.div`
  min-height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px auto;

  p { width: 45%;  text-align: center; }

  @media (max-width: 500px) {
    p { width: 100%; }
  }

  .otavioleite-lawsandprojects {
    width: 467px;
    min-height: 500px;
    background: url('./assets/otavioleite-leis-e-projetos.png') no-repeat center center;
    background-size: 100%;
  }

  @media (max-width: 500px) {
    margin-top: 200px;
    .otavioleite-lawsandprojects {
      width: 100%;
    }

    ul { margin-top: -70px; }
  }

  ul { display: flex;

    li { list-style: none; padding: 0 20px; margin-top: -70px;
      .icons { width: 90px; height: 100px; display: block; background: #F0F0F5; text-indent: -9999px;
         border-radius: 7px; text-decoration: none; transition: all .7s ease-in-out; cursor: pointer; }
      .icons:hover { transform: scale(1.1); transition: all .7s ease-in-out; }

      .municipais { background: url('./assets/icon-municipal-rio.png'); background-size: cover; }
      .federais { background: url('./assets/icon-camaradosdeputados.png'); background-size: cover; }
      .estaduais { background: url('./assets/icon-alerj.png'); background-size: cover; }
    }

    li:nth-child(2) { .icons { width: 130px; height: 140px; } }
  }
`;

export const Socials = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 700px;

  p { width: 35%; text-align: center;}

  .otavioleite-socials {
    width: 467px;
    min-height: 500px;
    background: url('./assets/otavioleite-redes.png') no-repeat center center;
    background-size: 100%;
  }

  @media (max-width: 500px) {
    h3 { text-align: center; }
    .otavioleite-socials {
      width: 100%;
    }
  }

  button {
    height: 55px;
    padding: 10px 20px;
    background: #519b4a;
    box-shadow: 0 0 10px #42823c;
    cursor: pointer;
    color: #fff;
    font-size: 1.5em;
    border-radius: 100px;
    font-weight: bold;
    letter-spacing: -2px;
    border: 0;

    a { text-decoration: none; color: #fff; }
  }

  @media (max-width: 500px) {
    p { width: 90%; }
  }

`;

export const Footer = styled.footer`
  width: 100%;
  padding: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  ul {
    margin: 0 auto;
    span { font-weight: 600; color: #005AFF; display: block; }
    p { font-size: .8em; color: #323232;
      a { text-decoration: none; color: #323232; }
    }

    li { list-style: none; margin: 0 2px; display: inline-block;
      .icons-socials { width: 25px; height: 25px; cursor: pointer; background: red; display: block; text-decoration: none; text-indent: -99999px;}
      .facebook { background: url('./assets/icon-facebook.svg') no-repeat center center; background-size: cover; }
      .instagram { background: url('./assets/icon-instagram.svg') no-repeat center center; background-size: cover; }
      .twitter { background: url('./assets/icon-twitter.svg') no-repeat center center; background-size: cover; }
      .telegram { background: url('./assets/icon-telegram.svg') no-repeat center center; background-size: cover; }
      .whatsapp { background: url('./assets/icon-whatsapp.svg') no-repeat center center; background-size: cover; }
    }
  }

  @media (max-width: 500px) {
    margin-top: 150px;
    grid-template-columns: 1fr;
    text-align: center;

    ul { margin-bottom: 30px; }
  }
`;
