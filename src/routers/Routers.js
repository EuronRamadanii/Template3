import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
// import Industry from "../components/UI/IndustrySection";
import Services from '../pages/Services'
import AboutSection from "../components/UI/AboutSection";
import Managment from "../components/UI/Managment";
import Locations from "../components/UI/Locations";
import CompanyActivities from "../components/UI/CompanyActivities";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/client" element={<AboutSection />} />
      <Route path="/managment" element={<Managment />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/activities" element={<CompanyActivities />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
