import React from "react";
import { Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import BlogList from "../components/UI/BlogList";
import { ScrollToTop } from "../components/UI/ScrollToTop";
import Career from "../components/UI/Career";

const Blog = () => {
  return (
    <Helmet title="Career">
      <div>
        <ScrollToTop />
      </div>
      <CommonSection title="Career" />
      <section>
        <Container>
      <Career aboutClass="aboutPage" />

          <Row>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Blog;
