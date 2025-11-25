import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import schoolImg1 from "../assets/images/school-img-1.png"
import schoolImg2 from "../assets/images/school-img-2.png"  
import schoolImg3 from "../assets/images/school-img-3.png"  
import "./Hero.css";

const slides = [
  {
    id: 1,
    title: "Welcome to Mercy Prestige Academy",
    description: "Remoulding the crack in education.",
    image: schoolImg1,
  },
  {
    id: 2,
    title: "Quality Education & Care",
    description: "Providing the best educational resources for your child.",
    image: schoolImg2,
  },
  
  {
    id: 3,
    title: "Enroll Your Child Today",
    description:
      "Give your child the best start with our dedicated teachers and friendly environment.",
    image: schoolImg3,
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      <div className="hero-slides">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === currentIndex ? "active" : ""}`}
          >
            <img src={slide.image} alt={slide.title} className="hero-image" />
            <div className="hero-text">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>

          <div className="hero-buttons">
           <button className="hero-btn primary"><Link to="/about">More <FaArrowRight/></Link></button>
            <button className="hero-btn secondary"><Link to="/contacts">Contact Us <FaArrowRight/></Link></button>
            <button className="hero-btn enroll"><Link to="/admissions">Enroll Now <FaArrowRight /></Link></button>
          </div>
            </div>
          </div>
        ))}
      </div>
  </div>
  );
};

export default Hero;
