import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import BecomeDriverSection from "./BecomeDriverSection";
import CommonSection from "./CommonSection";
import driveImg from "../../assets/all-images/drive.jpg";
// import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";
import photo1 from "../../assets/all-images/Max_Mustermann.jpg";
import photo2 from "../../assets/all-images/max2.jpg";

const Managment = ({ aboutClass }) => {
  return (
    <>
      <CommonSection title="Managment" />
      <section
        className="about__section"
        style={
          aboutClass === "aboutPage"
            ? { marginTop: "0px" }
            : { marginTop: "0px" }
        }
      >
        <Container>
          <h1>
            CONTEXT ist inhabergeführt und konzernunabhängig. Den Vorstand
            bilden Herr Egerer und Herr Schuster.
          </h1>
          <Row>
            <Col lg="6" md="6">
              {/* <div className="about__section-content">
                <h4 className="section__subtitle">Clients</h4>
                <h2 className="section__title">Clients</h2>
                <p className="section__description">
                  226 / 5,000 Translation results Our customers are technology
                  and process-oriented companies that develop and manufacture
                  complex products. The majority of these are function-critical
                  components and safety-relevant overall systems.
                </p>

                <div className="about__section-item d-flex align-items-center">
                  <p className="section__description d-flex align-items-center gap-2">
                    <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor
                    sit amet.
                  </p>

                  <p className="section__description d-flex align-items-center gap-2">
                    <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor
                    sit amet.
                  </p>
                </div>

                <div className="about__section-item d-flex align-items-center">
                  <p className="section__description d-flex align-items-center gap-2">
                    <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor
                    sit amet.
                  </p>

                  <p className="section__description d-flex align-items-center gap-2">
                    <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor
                    sit amet.
                  </p>
                </div>
              </div> */}
            </Col>

            <Col lg="6" md="6">
              {/* <div className="about__img"> */}
              {/* <img src={aboutImg} alt="" className="w-100" /> */}
              {/* </div> */}
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="about__img">
                <img
                  style={{ height: "300px" }}
                  src={photo1}
                  alt=""
                  className="w-100"
                />
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="about__section-content">
                {/* <h4 className="section__subtitle">Clients</h4> */}
                <h2 className="section__title">Stefan Egerer</h2>
                {/* <p className="section__description">Stefan Egerer</p> */}

                <div className="about__section-item d-flex align-items-center">
                  <p className="section__description d-flex align-items-center gap-2">
                    <i class="ri-checkbox-circle-line"></i> Studium: FH München
                    sit amet.
                  </p>

                  {/* <p className="section__description d-flex align-items-center gap-2">
                    <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor
                    sit amet.
                  </p> */}
                </div>

                <div className="about__section-item d-flex align-items-center">
                  <p className="section__description d-flex align-items-center gap-2">
                    <i class="ri-checkbox-circle-line"></i> Abschluss:
                    Dipl.-Ing.
                  </p>

                  {/* <p className="section__description d-flex align-items-center gap-2">
                    <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor
                    sit amet.
                  </p> */}
                </div>
                <div className="about__section-item d-flex align-items-center">
                  <p className="section__description d-flex align-items-center gap-2">
                    <i class="ri-checkbox-circle-line"></i> Wurzeln:
                    Entwicklungsdienstleistung
                  </p>
                </div>
                <div className="about__section-item d-flex align-items-center">
                  <p className="section__description d-flex align-items-center gap-2">
                    <i class="ri-checkbox-circle-line"></i> Funktion: Vorstand
                  </p>
                </div>
                <div className="about__section-item d-flex align-items-center">
                  <p className="section__description d-flex align-items-center gap-2">
                    <i class="ri-checkbox-circle-line"></i> Fachgebiete:
                    Technische Risikoanalysen (FMEA, FTA), Methodenberatung und
                    -entwicklung, Innovations- und Kreativitätsmethoden
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="about__section-content">
                {/* <h4 className="section__subtitle">Clients</h4> */}
                <h2 className="section__title">Karsten Schuster</h2>
                {/* <p className="section__description">Stefan Egerer</p> */}

                <div className="about__section-item d-flex align-items-center">
                  <p className="section__description d-flex align-items-center gap-2">
                    <i class="ri-checkbox-circle-line"></i> Studium: Universität
                    Jena, TU München
                  </p>

                  {/* <p className="section__description d-flex align-items-center gap-2">
                    <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor
                    sit amet.
                  </p> */}
                </div>

                <div className="about__section-item d-flex align-items-center">
                  <p className="section__description d-flex align-items-center gap-2">
                    <i class="ri-checkbox-circle-line"></i> Abschluss:
                    Dipl.-Ing., Dipl.-Wirtsch.-Ing.
                  </p>

                  {/* <p className="section__description d-flex align-items-center gap-2">
                    <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor
                    sit amet.
                  </p> */}
                </div>
                <div className="about__section-item d-flex align-items-center">
                  <p className="section__description d-flex align-items-center gap-2">
                    <i class="ri-checkbox-circle-line"></i> Wurzeln:
                    Unternehmensberatung, Entwicklungsdienstleistung
                  </p>
                </div>
                <div className="about__section-item d-flex align-items-center">
                  <p className="section__description d-flex align-items-center gap-2">
                    <i class="ri-checkbox-circle-line"></i> Funktion: Vorstand
                  </p>
                </div>
                <div className="about__section-item d-flex align-items-center">
                  <p className="section__description d-flex align-items-center gap-2">
                    <i class="ri-checkbox-circle-line"></i> Fachgebiete:
                    Prozessmanagement
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="about__img">
                <img
                  style={{ height: "300px" }}
                  src={photo2}
                  alt=""
                  className="w-100"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Container>
        <Row>
          {/* <Col lg="6" md="6" sm="12">
            <div className="about__page-img">
              <img src={driveImg} alt="" className="w-100 rounded-3" />
            </div>
          </Col> */}
          {/* <Col lg="6" md="6" sm="12"> */}
          <h1>
            CONTEXT wurde 1997 von einem Expertenteam für Methodenanwendung und
            -entwicklung mit der Idee gegründet, Technologieunternehmen bei der
            Lösung ihrer qualitäts- und prozessspezifischen Herausforderungen zu
            unterstützen. Heute zählt CONTEXT zu den professionellen Partnern
            von technologiegetriebenen Unternehmen im Bereich
            Qualitätsmanagement.
          </h1>
          {/* <div className="about__page-content">
              <h2 className="section__title">
                We Are Committed To Provide Safe Ride Solutions
              </h2>

              <p className="section__description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eveniet veniam assumenda aperiam accusantium ex autem
                perferendis repellendus nostrum delectus. Nemo et dolore est
                tempore rem minima adipisci magni dolorum ipsam.
              </p>

              <p className="section__description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eveniet veniam assumenda aperiam accusantium ex autem
                perferendis repellendus nostrum delectus. Nemo et dolore est
                tempore rem minima adipisci magni dolorum ipsam.
              </p>
            </div>
          </div>
        </Row>
      </Container>
      <Container>
        <Row>
          <iframe
            style={{ width: "50%", height: "300px" }}
            src="https://maps.google.com/maps?q=Bremer%20Stra%C3%9Fe%2011%2080807%20M%C3%BCnchen&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>

          <iframe
            style={{ width: "50%", height: "300px" }}
            src="https://maps.google.com/maps?q=Dr.-Auner-Str.%2022%20A-8074%20Raaba&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>

          <div style={{ marginTop: "20px" }}>
            <iframe
              style={{ width: "100%", height: "300px" }}
              src="https://maps.google.com/maps?q=Lessingstra%C3%9Fe%2072,%2038440,%20Wolfsburg&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
        </Row>
      </Container>
      <Container style={{ marginBottom: "50px" }}>
        <h3>Firmenaktivitäten</h3>
        <p>
          In dieser Sektion finden Sie unser News-Archiv, das wir zur besseren
          Übersicht nach Themenblöcken und chronologisch geordnet haben.
        </p>
        <Row>
          <div className="boxes2">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "30px",
              }}
            >
              <div className="box2">
                <h3>Organisation</h3>
                <ul style={{ listStyleType: "circle" }}>
                  <li>
                    07/2017: CONTEXT begeht sein 20-jähriges Firmenjubiläum
                  </li>
                  <li>
                    03/2014: CONTEXT automotive GmbH nimmt Betrieb in Wolfsburg
                    auf
                  </li>
                  <li>
                    07/2012: CONTEXT begeht sein 15-jähriges Firmenjubiläum
                  </li>
                  <li>
                    01/2012: CONTEXT wächst weiter und eröffnet Niederlassung in
                    der Steiermark
                  </li>
                </ul>
              </div>
              <div className="box2">
                <h3>Engagement</h3>
                <ul style={{ listStyleType: "circle" }}>
                  <li>
                    CONTEXT macht PC-Kurse mit Kindern vom{" "}
                    <b>
                      {" "}
                      <a href="http://lichtblick-hasenbergl.org/">
                        {" "}
                        Lichtblick Hasenbergl
                      </a>
                    </b>
                  </li>
                  <li>
                    CONTEXT ist Fördermitglied der{" "}
                    <b>
                      {" "}
                      <a href="http://kinder-unfallhilfe-online.de/foerdermitglieder/">
                        {" "}
                        Aktion Kinder-Unfallhilfe e.V.
                      </a>
                    </b>
                  </li>
                  <li>
                    CONTEXT-Vorstand ist Kurator der Studierendeninitiative{" "}
                    <b>
                      {" "}
                      <a href="https://www.teg-ev.de/ueber-uns"> TEG e.V.</a>
                    </b>
                  </li>
                </ul>
              </div>
            </div> */}
          {/* </Col> */}
        </Row>
      </Container>
      <BecomeDriverSection />
    </>
  );
};

export default Managment;
