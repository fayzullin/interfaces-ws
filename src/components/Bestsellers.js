import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import exterior from "../assets/img/exterior.webp"
import kitchen from "../assets/img/kitchen.webp"
import bedroom1 from "../assets/img/bedroom-1.webp"
import bedroom2 from "../assets/img/bedroom-2.webp"
import bedroom3 from "../assets/img/bedroom-3.webp"
import dining from "../assets/img/dining.webp"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Bestsellers = () => {

  const bestsellers = [
    {
      title: "Exterior",
      imgUrl: exterior,
    },
    {
      title: "Kitchen",
      imgUrl: kitchen,
    },
    {
      title: "Dining",
      imgUrl: dining,
    },
    {
      title: "Bedroom 1",
      imgUrl: bedroom1,
    },
    {
      title: "Bedroom 2",
      imgUrl: bedroom2,
    },
    {
      title: "Bedroom 3",
      imgUrl: bedroom3,
    },
  ];

  return (
    <section className="bestseller" id="bestseller">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Bestsellers</h2>
                <p>Here are our bestsellers</p>
                <Tab.Container id="bestsellers-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          bestsellers.map((bestseller, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...bestseller}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
