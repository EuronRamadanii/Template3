import React, { useEffect } from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";

import { useParams } from "react-router-dom";
import blogData from "../assets/data/blogData.js";
import Helmet from "../components/Helmet/Helmet";
import { Link } from "react-router-dom";

import commentImg from "../assets/all-images/ava-1.jpg";

import "../styles/blog-details.css";

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogData.find((blog) => blog.title === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blog]);

  return (
    <Helmet title={blog.title}>
      <section>
        <Container>
          <Row>
            <Col lg="8" md="8">
              <div className="blog__details">
                <img src={blog.imgUrl} alt="" className="w-100" />
                <h2 className="section__title mt-4">{blog.author}</h2>

                <div className="blog__publisher d-flex align-items-center gap-4 mb-4">
                  {/* <span className="blog__author">
                    <i class="ri-user-line"></i> {blog.author}
                  </span> */}

                  {/* <span className=" d-flex align-items-center gap-1 section__description">
                    <i class="ri-calendar-line"></i> {blog.date}
                  </span> */}

                  {/* <span className=" d-flex align-items-center gap-1 section__description">
                    <i class="ri-time-line"></i> {blog.time}
                  </span> */}
                </div>
                <div style={{ width: "70%" }}>
                  <h4>{blog.date1}</h4>
                  <div className="about__section-item d-flex align-items-center">
                    <p className=" d-flex align-items-center gap-2">
                      {" "}
                      <i class="ri-checkbox-circle-line"> </i>
                      {blog.description1}
                    </p>
                  </div>
                  <div className="about__section-item d-flex align-items-center">
                    <p className=" d-flex align-items-center gap-2">
                      {" "}
                      <i class="ri-checkbox-circle-line"> </i>
                      {blog.description2}
                    </p>
                  </div>
                  <div className="about__section-item d-flex align-items-center">
                    <p className=" d-flex align-items-center gap-2">
                      {" "}
                      <i class="ri-checkbox-circle-line"> </i>
                      {blog.description3}
                    </p>
                  </div>
                  <div className="about__section-item d-flex align-items-center">
                    <p className=" d-flex align-items-center gap-2">
                      {" "}
                      <i class="ri-checkbox-circle-line"> </i>
                      {blog.description4}
                    </p>
                  </div>
                  <div className="about__section-item d-flex align-items-center">
                    <p className=" d-flex align-items-center gap-2">
                      {" "}
                      <i class="ri-checkbox-circle-line"> </i>
                      {blog.description5}
                    </p>
                  </div>
                </div>

                <div style={{ width: "70%" }}>
                  <h4>{blog.date2}</h4>
                  <div className="about__section-item d-flex align-items-center">
                    <p className=" d-flex align-items-center gap-2">
                      {" "}
                      <i class="ri-checkbox-circle-line"> </i>
                      {blog.description11}
                    </p>
                  </div>
                  <div className="about__section-item d-flex align-items-center">
                    <p className=" d-flex align-items-center gap-2">
                      {" "}
                      <i class="ri-checkbox-circle-line"> </i>
                      {blog.description22}
                    </p>
                  </div>
                  <div className="about__section-item d-flex align-items-center">
                    <p className=" d-flex align-items-center gap-2">
                      {" "}
                      <i class="ri-checkbox-circle-line"> </i>
                      {blog.description33}
                    </p>
                  </div>
                  <div className="about__section-item d-flex align-items-center">
                    <p className=" d-flex align-items-center gap-2">
                      {" "}
                      <i class="ri-checkbox-circle-line"> </i>
                      {blog.description44}
                    </p>
                  </div>
                  <div className="about__section-item d-flex align-items-center">
                    <p className=" d-flex align-items-center gap-2">
                      {" "}
                      <i class="ri-checkbox-circle-line"> </i>
                      {blog.description55}
                    </p>
                  </div>
                </div>
                <div style={{ width: "70%" }}>
                  <h4>{blog.date3}</h4>
                  <div className="about__section-item d-flex align-items-center">
                    <p className=" d-flex align-items-center gap-2">
                      {" "}
                      <i class="ri-checkbox-circle-line"> </i>
                      {blog.description111}
                    </p>
                  </div>
                  <div className="about__section-item d-flex align-items-center">
                    <p className=" d-flex align-items-center gap-2">
                      {" "}
                      <i class="ri-checkbox-circle-line"> </i>
                      {blog.description222}
                    </p>
                  </div>
                  <div className="about__section-item d-flex align-items-center">
                    <p className=" d-flex align-items-center gap-2">
                      {" "}
                      <i class="ri-checkbox-circle-line"> </i>
                      {blog.description333}
                    </p>
                  </div>
                </div>

                <h6 className="fw-normal">
                  <blockquote className=" fs-4">{blog.quote}</blockquote>
                </h6>
                <p className="section__description">{blog.description}</p>
              </div>
              </Col>
              {/* <div className="comment__list mt-5">
                <h4 className="mb-5">3 Comments</h4>

                <div className="single__comment d-flex gap-3">
                  <img src={commentImg} alt="" />
                  <div className="comment__content">
                    <h6 className=" fw-bold">David Visa</h6>
                    <p className="section__description mb-0">14 July, 2022</p>
                    <p className="section__description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eos nobis totam eius laborum molestias itaque minima
                      distinctio, quae velit tempore!
                    </p>

                    <span className="replay d-flex align-items-center gap-1">
                      <i class="ri-reply-line"></i> Replay
                    </span>
                  </div>
                </div>

                =============== comment form ============ 
                <div className="leave__comment-form mt-5">
                  <h4>Leave a Comment</h4>
                  <p className="section__description">
                    You must sign-in to make or comment a post
                  </p>

                  <Form>
                    <FormGroup className=" d-flex gap-3">
                      <Input type="text" placeholder="Full name" />
                      <Input type="email" placeholder="Email" />
                    </FormGroup>

                    <FormGroup>
                      <textarea
                        rows="5"
                        className="w-100 py-2 px-3"
                        placeholder="Comment..."
                      ></textarea>
                    </FormGroup>

                    <button className="btn comment__btn mt-3">
                      Post a Comment
                    </button>
                  </Form>
                </div>
              </div> */}
           

            {/* <Col lg="4" md="4">
              <div className="recent__post mb-4">
                <h5 className=" fw-bold">Recent Posts</h5>
              </div>
              {blogData.map((item) => (
                <div className="recent__blog-post mb-4" key={item.id}>
                  <div className="recent__blog-item d-flex gap-3">
                    <img src={item.imgUrl} alt="" className="w-25 rounded-2" />
                    <h6>
                      <Link to={`/blogs/${item.title}`}>{blog.title}</Link>
                    </h6>
                  </div>
                </div>
              ))}
            </Col> */}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default BlogDetails;
