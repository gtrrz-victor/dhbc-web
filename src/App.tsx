import React from 'react';
import './styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import road from './road-1200x450.jpg';
import Juniors from './components/Juniors'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import { Container, Row, Image } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Header />
      <Container fluid >
            <Row className="justify-content-end">
                <Image src={road} fluid />
                <span className="dhbc-title">DULWICH HILL BICYCLE CLUB</span>
            </Row>
        </Container>
      <Home />
      <Juniors />
      <Footer />
    </div>
  );
}

export default App;
