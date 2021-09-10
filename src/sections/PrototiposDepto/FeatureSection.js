import React from "react"
import { Container, Col, Row } from "react-bootstrap"

import Feature from "./style"

import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

import hoja1 from "~image/depto-proto/hojas-1.600.jpg"
import hoja2 from "~image/depto-proto/hojas-2.600.jpg"
import hoja3 from "~image/depto-proto/hojas-3.600.jpg"
import hoja4 from "~image/depto-proto/hojas-4.600.jpg"
import hoja9 from "~image/depto-proto/hojas-5.600.jpg"
import hoja6 from "~image/depto-proto/hojas-6.600.jpg"

import ModalImage from "react-modal-image"
import "react-tabs/style/react-tabs.css"
export default function FeatureSection() {
  return (
    <Feature background="#e5e5e5">
      <div className="apagar-sm">
        <Row className="align-items-center justify-content-center">
          <Col xs="10" className="col-xl-10 col-lg-6 col-md-10">
            <Feature.Box>
              <Feature.TitleThree as="">Prototipos</Feature.TitleThree>
              <Feature.SubTitleThree as="">
                City | Blue Santa Fe
              </Feature.SubTitleThree>
            </Feature.Box>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="col-xl-10 col-xs-10 col-sm-10">
            <Tabs>
              <TabList>
                <Tab>
                  <span className="titulo">44.90 m2</span> <br />{" "}
                  <span className="descripcion">1 Recámara + 1 Baño</span>
                </Tab>
                <Tab>
                  <span className="titulo">60.75 m2</span> <br />{" "}
                  <span className="descripcion">1 Recámara + 1 Baño</span>
                </Tab>
                <Tab>
                  <span className="titulo">60.75 m2</span> <br />{" "}
                  <span className="descripcion">2 Recámaras + 1 Baño</span>
                </Tab>
                <Tab>
                  <span className="titulo"> 64.65 m2</span> <br />{" "}
                  <span className="descripcion">2 Recámaras + 2 Baños</span>
                </Tab>
                <Tab>
                  <span className="titulo">83.90 m2</span> <br />
                  <span className="descripcion"> 2 Recámaras + 2 Baños</span>
                </Tab>
                <Tab>
                  <span className="titulo">119.40 m2</span> <br />{" "}
                  <span className="descripcion">3 Recámaras + 2 Baños</span>
                </Tab>
              </TabList>

              <TabPanel>
                <ModalImage
                  small={hoja2}
                  large={hoja2}
                  alt="Sala"
                  className="borde-modal"
                />
              </TabPanel>
              <TabPanel>
                <ModalImage
                  small={hoja4}
                  large={hoja4}
                  alt="Sala"
                  className="borde-modal"
                />
              </TabPanel>
              <TabPanel>
                <ModalImage
                  small={hoja6}
                  large={hoja6}
                  alt="Sala"
                  className="borde-modal"
                />
              </TabPanel>
              <TabPanel>
                <ModalImage
                  small={hoja3}
                  large={hoja3}
                  alt="Sala"
                  className="borde-modal"
                />
              </TabPanel>
              <TabPanel>
                <ModalImage
                  small={hoja1}
                  large={hoja1}
                  alt="Sala"
                  className="borde-modal"
                />
              </TabPanel>
              <TabPanel>
                <ModalImage
                  small={hoja9}
                  large={hoja9}
                  alt="Sala"
                  className="borde-modal"
                />
              </TabPanel>
            </Tabs>
          </Col>
        </Row>
      </div>
      <div className="apagar-lg">
        <Row className="align-items-center justify-content-center">
          <Col xs="10" className="col-xl-10 col-lg-6 col-md-10 col-xs-10">
            <Feature.Box>
              <Feature.TitleThree as="">Prototipos</Feature.TitleThree>
              <Feature.SubTitleThree as="">
                City | Blue Santa Fe
              </Feature.SubTitleThree>
            </Feature.Box>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="10" className="col-xl-10 col-xs-10 col-md-10">
            <Tabs className="text-center">
              <TabList>
                <Tab>
                  <span className="titulo">44.90 m2</span>{" "}
                </Tab>
                <Tab>
                  <span className="titulo">60.75 m2</span>{" "}
                </Tab>
                <Tab>
                  <span className="titulo">60.75 m2</span>{" "}
                </Tab>
                <Tab>
                  <span className="titulo"> 64.65 m2</span>{" "}
                </Tab>
                <Tab>
                  <span className="titulo">83.90 m2</span>{" "}
                </Tab>
                <Tab>
                  <span className="titulo">119.40 m2</span>{" "}
                </Tab>
              </TabList>

              <TabPanel>
                <ModalImage
                  small={hoja2}
                  large={hoja2}
                  alt="Sala"
                  className="borde-modal"
                />
              </TabPanel>
              <TabPanel>
                <ModalImage
                  small={hoja4}
                  large={hoja4}
                  alt="Sala"
                  className="borde-modal"
                />
              </TabPanel>
              <TabPanel>
                <ModalImage
                  small={hoja6}
                  large={hoja6}
                  alt="Sala"
                  className="borde-modal"
                />
              </TabPanel>
              <TabPanel>
                <ModalImage
                  small={hoja3}
                  large={hoja3}
                  alt="Sala"
                  className="borde-modal"
                />
              </TabPanel>
              <TabPanel>
                <ModalImage
                  small={hoja1}
                  large={hoja1}
                  alt="Sala"
                  className="borde-modal"
                />
              </TabPanel>
              <TabPanel>
                <ModalImage
                  small={hoja9}
                  large={hoja9}
                  alt="Sala"
                  className="borde-modal"
                />
              </TabPanel>
            </Tabs>
          </Col>
        </Row>
      </div>
    </Feature>
  )
}
