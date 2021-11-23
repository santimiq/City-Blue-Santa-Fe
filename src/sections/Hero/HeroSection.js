import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Video from "~components/VideoModal"
import { Images } from "~data"
import Hero from "./style"
import Slide from "react-reveal/Slide"

export default function HeroSection() {
  return (
    <Hero style={{ backgroundImage: `url(${Images.bannerImagen.bannerImg})` }}>
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col className="col-xl-9">
            <Slide bottom>
              <Hero.Content className="text-center">
                <Hero.Title as="h1" fontColor="#fff">
                  El concepto que
                  <br /> faltaba en Santa Fe
                </Hero.Title>
                <Hero.Text fontColor="#fff">
                  Residential, Amenities & Offices
                </Hero.Text>
                <Hero.Button
                  className="btn-primary btn-1 text-white"
                  as={Video}
                  id="UDdMbKIROvI"
                >
                  Ver Video
                </Hero.Button>
              </Hero.Content>
            </Slide>
          </Col>
        </Row>
      </Container>
    </Hero>
  )
}
