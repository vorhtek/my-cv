import * as React from "react";
import Section from "./../../components/Section";
import { Row, Col } from "./../../components/Grid";
import "./style.scss";

const Home = () => {
  return (
    <div>
      <Section>
        <Row>
          <Col span={2}>
            <div className="dp-frame">
              <img className="dp" src="/images/dp.jpg" alt="" />
            </div>
          </Col>
          <Col>
            <p>Archibal de la Cruz Gelonga</p>
            <p>Full Stack Developer</p>
          </Col>
          <Col>3</Col>
        </Row>
      </Section>
    </div>
  );
};

export default Home;
