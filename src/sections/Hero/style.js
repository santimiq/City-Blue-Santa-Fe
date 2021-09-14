import styled from "styled-components/macro"
import { Box, Heading, Button, Paragraph } from "~styled"

const Hero = styled(Box)`
  padding-top: 125px;
  padding-bottom: 60px;
  background-size: cover;
  background-position: right top;
  position: relative;
  z-index: 10000;
  @media (min-width: 768px) {
    padding-top: 145px;
    padding-bottom: 80px;
  }

  @media (min-width: 992px) {
    padding-top: 350px;
    padding-bottom: 80px;
  }

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: linear-gradient(
      261.26deg,
      rgba(0, 0, 0, 0.96) 14.9%,
      #000 10%,
      #000 10%
    );
    opacity: 0.3;
    position: absolute;
    z-index: -1;
  }
`

Hero.Content = styled(Box)``
Hero.Text = styled(Paragraph)`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: normal;
  line-height: 1.619;
  margin-bottom: 28px;
  opacity: 1;
  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 992px) {
    font-size: 21px;
  }
`
Hero.Title = styled(Heading)`
  font-size: 35px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.2;
  margin-bottom: 10px;
  font-family: "Campton-SemiBold";

  @media (min-width: 480px) {
    font-size: 40px;
  }

  @media (min-width: 768px) {
    font-size: 50px;
  }

  @media (min-width: 992px) {
    font-size: 60px;
  }
`
Hero.Button = styled(Button)`
  min-width: 180px;
  height: 56px;
  font-size: 15px;
  color: #002e6d !important;
  box-shadow: 0 20px 20px rgb(0 0 0 / 0%);
  background-color: #fff;
  border-color: #fff;
  transition: 0.4s;
  border-radius: 500px;

  &:hover {
    box-shadow: 0 20px 20px rgb(0 46 109 / 30%);
    color: #fff !important;
    background-color: rgb(0, 46, 109);
    border-color: #002e6d;
  }
`

export default Hero
