import React from 'react';
import { Container, Row, Col } from "reactstrap";
const FeatureBox = (props) => {
  return (
    <>
    {
      props.features.map((feature, key) =>
      (feature.id % 2 !== 0) ?
        <Row key={key} className={feature.id === 1 ? "align-items-center" : "align-items-center mt-5"}>
          <Col md={5} >
            <div>
              <img src={feature.img} alt="" className="img-fluid d-block mx-auto"/>
            </div>
          </Col>
            <Col md={{size:6, offset:1}}>
              <div className="mt-5 mt-sm-0 mb-4">
                <div className="my-4">
                  <i className={feature.icon}></i>
                </div>
                <h5 className="text-dark font-weight-normal mb-3 pt-3">{feature.title}</h5>
                <p className="text-muted mb-3 f-15">{feature.desc}</p>
                <a href={feature.link} className="f-16 text-warning">Ver màs <span className="right-icon ml-2">&#8594;</span></a>
              </div>
            </Col>
        </Row>
      :
      <Row key={key} className="align-items-center mt-5">
        <Col md={6}>
          <div className="mb-4">
            <div className="my-4">
              <i className="mdi mdi-account-group"></i>
            </div>
            <h5 className="text-dark font-weight-normal mb-3 pt-3">{feature.title}</h5>
            <p className="text-muted mb-3 f-15">{feature.desc}</p>
            <a href={feature.link} className="f-16 text-warning">Ver màs <span className="right-icon ml-2">&#8594;</span></a>
          </div>
        </Col>
        <Col md={{size:5, offset:1}} className="mt-5 mt-sm-0">
          <div>
            <img src={feature.img} alt="" className="img-fluid d-block mx-auto"/>
          </div>
        </Col>
      </Row>
      )
    }
    </>
  );
}
const Feature = () => {
const features = [
    {id : 1, img : "/maq1.png", title : "CAFEÍNA 01 DUAL", desc : " cuenta con dos salidas para espresso y un espumador automático. Es ideal para negocios en donde el mayor desplazamiento son espressos o capuccinos. ", link : "/"},
    {id : 2, img : "/maq2.png", title : "CAFEÍNA 01 FULL", desc : "Esencial para aquellos lugares en donde el café americano tenga mayor desplazamiento, ya que tiene salida de café, salida de agua caliente y el espumador automático. ", link : "/"},
    {id : 3, img : "/maq3.png", title : "CAPUCCINADOR 01", desc : "Nos ayudará a poder hacer las extracciones de leche gracias a su espumador automático, el cual nos ayudará a controlar tanto la cantidad de espuma como la temperatura de la leche.", link : "/"},
  ];
return (
    <section className="section" id="feature">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-warning">MÁQUINAS PARA ESPRESSO</span></h3>
              <p className="text-muted">Tenemos máquinas de espresso profesional, con tecnología 100% mexicana para preparar la taza perfecta. La patente de está máquina consiste en mantener la temperatura al máximo, separando el vapor, logrando así el espresso perfecto.</p>
            </div>
          </Col>
        </Row>
        <FeatureBox features={features} />
      </Container>
    </section>
  );
}
export default Feature;