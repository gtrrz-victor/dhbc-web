import React from 'react';
import logo from './DHBC.png';
import road from './road-1200x450.jpg';
import social from './social-1200x450.jpg';
import { Link, animateScroll as scroll } from "react-scroll";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Navbar className="custom-header" fixed="top" variant="dark" >
        <Container>
          <Navbar.Brand ><img src={logo} alt="dhbc-logo" onClick={scroll.scrollToTop} /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 1
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 2
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 3
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container fluid style={{ color: "white" }}>
        <Row>
          <Row><Col>
            <Image src={road} fluid />
            <h1>DULWICH HILL BICYCLE CLUB</h1></Col></Row>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="display-content-center">
            <Card className="text-center" style={{ width: '70rem' }}>
              <Card.Img variant="top" src={social} />
              <Card.Body>
                <Card.Title>Dulwich Hill Bicycle Club</Card.Title>
                <Card.Text>
                  <p>DHBC is located in the Inner West of Sydney, Australia. We are a non-profit Incorporated Association. Our members share the common goal to participate in, promote and organise competitive and recreational bicycle riding whilst having lots of fun.</p>
                  <p>We are an inclusive club and cater for all levels of fitness, age, participation and cycling preference, be it road, track, gravel, cyclocross, mountain biking or even vintage and classic bicycles. Members are also active in cyclists rights advocacy and road safety initiatives.</p>
                  <p>
                    So whether you ride a road bike, gravel bike, track bike, mountain bike, hybrid commuter, fixie or a vintage steel Malvern Star; and whether you just want to come on social rides like Saturday Slowies or you want to be the next Richie Porte, Caleb Ewan, Cameron Meyer, Sarah Roy or Amanda Spratt go to the join page (or you can ‘try before you buy for a couple of rides before joining), then go to Road Rides to pick your first ride and start your cycling with DHBC.
                  </p>
                  <p>
                    We look forward to seeing you on a club ride soon.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card></Col>
        </Row>
        <Row>
          <Col id="section1">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
          </Col>
        </Row>
        <Row>
          <Col id="section2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
          </Col>
        </Row>
        <Row>
          <Col id="section3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
          </Col>
        </Row>
      </Container>





      <Container fluid className="custom-header steel" style={{ color: "white" }}>
        <Row><Col>Copyright © 2021 Dulwich Hill Bicycle Club. All rights reserved.</Col></Row>
        <Row><Col>Website proudly designed and developed by Victor</Col></Row>
      </Container>
    </div>
  );
}

export default App;
