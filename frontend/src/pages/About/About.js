import React from "react";
import "./About.css";
import photo from "../../assets/profile.jpg";
import { Bounce } from "react-awesome-reveal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
const About = () => {
  return (
    <>
      <Bounce>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src={photo} alt="profile_pic" className="img-fluid" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1 className="text-uppercase">About me</h1>
              <p>
                I am an Electronics Engineer with a strong passion for
                technology and software development. With hands-on experience in
                MERN stack, GSAP animations, and Python-based AI models. An
                ambitious, persistent and hardworking engineer, interested in
                Full Stack Web Development and Cloud Computing . My main
                interest lies in the field of full stack development. I like to
                create innovative and interesting user interfaces using
                html,css,sass and javascript. I am very well aware of various
                javascript frameworks. I prefer backend-development with nodejs
                and express js. I extensively use mongoDB and mySQL as
                databases. I have also made some small computer vision projects
                using python libraries. Currently I am learning Python-based AI
                models. I embody the qualities like empathy and desire to help
                others and make world a better place. I am always eager to
                collaborate and create cutting-edge solutions.
              </p>
              <Container className="d-flex justify-content-center align-items-center mt-n3 button-style">
                <a href="#contact">
                  <Button
                    variant="info"
                    size="lg"
                    className="btn py-2 text-center "
                  >
                    Let’s Connect 🚀
                  </Button>
                </a>
              </Container>
            </div>
          </div>
        </div>
      </Bounce>
    </>
  );
};

export default About;
