import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import "./projects.css";
import healthmeet from "../../assets/healthmeetphoto.png";
import guesthouse from "../../assets/pic1.png";
import Roshambophoto from "../../assets/website.png";
// https://github.com/user-attachments/assets/dc3fe327-ea59-4e9e-acc4-c9bd14bddbc0
function Projects() {
  return (
    <Container className="container projects" id="projects">
      <div className="cards ">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Projects
        </h2>
        <hr />
        <div className="d-flex justify-content-center flex-wrap gap-5 cardholder">
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={healthmeet} />
            <Card.Body>
              <Card.Title className="text-center cardtitle">
                HealthMeet
              </Card.Title>
              <Card.Text className="cardtext">
                A full-stack doctor appointment platform enabling seamless
                interaction between doctors and patients.
              </Card.Text>
              <Container className="d-flex gap-3">
                <Button variant="info" size="sm">
                  <a
                    className="btn"
                    href="https://github.com/Ananyamishra08/HealthMeet"
                    target="_blank"
                  >
                    GITHUB LINK
                  </a>
                </Button>
                <Button variant="info" size="sm">
                  <a
                    className="btn"
                    href="https://healthmeet-1.onrender.com/"
                    target="_blank"
                  >
                    WEBSITE LINK
                  </a>
                </Button>
              </Container>
            </Card.Body>
          </Card>
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={guesthouse} />
            <Card.Body>
              <Card.Title className="text-center cardtitle">
                GuestHouse Booking Website
              </Card.Title>
              <Card.Text className="cardtext">
                A guesthouse booking website enabling users to search, book, and
                manage reservations.
              </Card.Text>
              <Button variant="info">
                <a
                  className="btn"
                  href="https://github.com/Ananyamishra08/NalcoGuestHouseBooking"
                  target="_blank"
                >
                  GITHUB LINK
                </a>
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={Roshambophoto} />
            <Card.Body>
              <Card.Title className="text-center cardtitle">
                Roshambo
              </Card.Title>
              <Card.Text className="cardtext">
                A Rock-paper-scissors game 🎮✨ where users can play against the
                computer with real-time results and score tracking.
              </Card.Text>
              <Container className="d-flex gap-3">
                <Button variant="info" size="sm" className="btncenter">
                  <a
                    className="btn"
                    href="https://github.com/Ananyamishra08/Roshambo"
                    target="_blank"
                  >
                    GITHUB LINK
                  </a>
                </Button>
                <Button variant="info" size="sm">
                  <a
                    className="btn"
                    href="https://roshambo-rock-papper-scissors.netlify.app/"
                    target="_blank"
                  >
                    WEBSITE LINK
                  </a>
                </Button>
              </Container>
            </Card.Body>
          </Card>
          <Card style={{ width: "20rem" }}>
            <Card.Img
              variant="top"
              src="https://github.com/user-attachments/assets/dc3fe327-ea59-4e9e-acc4-c9bd14bddbc0"
            />
            <Card.Body>
              <Card.Title className="text-center">Calculator</Card.Title>
              <Card.Text className="cardtext">
                A simple calculator 📟 using HTML, CSS, and JavaScript that
                performs basic arithmetic operations like addition, subtraction,
                multiplication, and division.
              </Card.Text>
              <Container className="d-flex gap-3">
                <Button variant="info" size="sm">
                  <a
                    className="btn"
                    href="https://github.com/Ananyamishra08/Calculator/tree/main"
                    target="_blank"
                  >
                    GITHUB LINK
                  </a>
                </Button>
                <Button variant="info" size="sm">
                  <a
                    className="btn"
                    href="https://basicscalculatorforbeginners.netlify.app/"
                    target="_blank"
                  >
                    WEBSITE LINK
                  </a>
                </Button>
              </Container>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
}

export default Projects;
