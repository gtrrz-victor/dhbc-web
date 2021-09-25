import React from 'react'
import {
    Container,
    Row,
    Col
} from 'react-bootstrap'

function Footer() {
    return (
        <Container fluid className="custom-header steel" style={{ color: "white" }}>
            <Row className="justify-content-center">
                <Col className="col-2">
                    <Row className="p-2">
                        <Col>
                            <a href="https://twitter.com/DulwichHillBC/" rel="noreferrer noopener" target="_blank"><img src="/images/logos/twitter.png" alt="" /></a>
                        </Col>
                        <Col>
                            <a href="http://app.strava.com/clubs/dulwich-hill-bicycle-club-454" rel="noreferrer noopener" target="_blank"><img src="/images/logos/strava.png" alt="" /></a>
                        </Col>
                        <Col>
                            <a href="https://www.facebook.com/pages/Dulwich-Hill-Bicycle-Club/39420165444" rel="noreferrer noopener" target="_blank"><img src="/images/logos/Facebook.png" alt="" /></a>
                        </Col>
                    </Row>
                </Col>
                <Col className="col-12">
                    <Row>
                        <Col className="col-12">Copyright © 2021 Dulwich Hill Bicycle Club. All rights reserved.</Col>
                        <Col className="col-12">Website proudly designed and developed by Victor.</Col>
                    </Row>
                </Col>
                </Row>
        </Container>
    );
}

export default Footer;
