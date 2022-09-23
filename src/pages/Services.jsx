import React from "react";
import ServicesList from "../components/UI/ServicesList";
import { Col } from "reactstrap";
import "../styles/services-list.css";
import servicesData from "../assets/data/serviceData";

const Services = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {servicesData.map((item) => (
        <ServiceItem item={item} key={item.id} />
      ))}
    </div>
  );
};

const ServiceItem = ({ item }) => (
  <Col lg="6" md="4" sm="6" className="mb-3">
    <div className="service__item">
      <span
        className="mb-3 d-flex"
        style={{ alignItems: "flex-end", justifyContent: "flex-start" }}
      >
        <i class={item.icon} style={{marginRight: '5px'}} />
        <h1>{item.title}</h1>
      </span>

      <p className="section__description">{item.desc}</p>
      {item.subLinks.map((sub) => (
        <div style={{ marginLeft: "40px" }}>
          <h4>{sub.title}</h4>
          <p>{sub.text}</p>
          {sub.subTexts.map((t) => (
            <div style={{ marginLeft: "40px" }}>
              <h5> {t.title}</h5>
              <ul>
                {t.paragraphs.map((p) => (
                  <p>{p}</p>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  </Col>
);

export default Services;
