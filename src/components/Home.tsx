import React from 'react';
import social from '../social-1200x450.jpg';
import {
    ListGroup,
    Container,
    Row,
    Col,
    Card,
} from 'react-bootstrap';

function Home() {
    return (
        <Container>
            <Row id="home" className="text-center">
                <Col className="col-12 pb-5">
                    <Card >
                        <Card.Img variant="top" src={social} />
                        <Card.Body>
                            <Card.Title>Dulwich Hill Bicycle Club</Card.Title>
                            <Card.Text>
                                <Row>
                                    <Col className="col-12 col-md-4 p-2">
                                        DHBC is located in the Inner West of Sydney, Australia. We are a non-profit Incorporated Association. Our members share the common goal to participate in, promote and organise competitive and recreational bicycle riding whilst having lots of fun.
                                    </Col>
                                    <Col className="col-12 col-md-4 p-2">
                                        We are an inclusive club and cater for all levels of fitness, age, participation and cycling preference, be it road, track, gravel, cyclocross, mountain biking or even vintage and classic bicycles. Members are also active in cyclists rights advocacy and road safety initiatives.
                                    </Col>
                                    <Col className="col-12 col-md-4 p-2">So whether you ride a road bike, gravel bike, track bike, mountain bike, hybrid commuter, fixie or a vintage steel Malvern Star; and whether you just want to come on social rides like Saturday Slowies or you want to be the next Richie Porte, Caleb Ewan, Cameron Meyer, Sarah Roy or Amanda Spratt go to the join page (or you can ‘try before you buy for a couple of rides before joining), then go to Road Rides to pick your first ride and start your cycling with DHBC.</Col>
                                </Row>
                                <Row className="pt-4">
                                    <Col className="col-12">
                                        <h2>We look forward to seeing you on a club ride soon.</h2>
                                    </Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="col-12 col-md-4 pb-2">
                    <Card>
                        <Card.Body>
                            <Card.Title>COMMITTEE MEMBERS</Card.Title>
                            <Card.Text>
                                <ListGroup variant="flush">
                                    <ListGroup.Item><b>President:</b> Adam Farrar</ListGroup.Item>
                                    <ListGroup.Item><b>Vice President:</b> Katie Uther</ListGroup.Item>
                                    <ListGroup.Item><b>Secretary:</b> Jo Lees</ListGroup.Item>
                                    <ListGroup.Item><b>Treasurer:</b> Lindsay Munks</ListGroup.Item>
                                    <ListGroup.Item><b>Road Captain:</b> Simon Berry</ListGroup.Item>
                                    <ListGroup.Item><b>Track Captain:</b> Charles Dale</ListGroup.Item>
                                    <ListGroup.Item><b>Public Officer:</b> Simon Mitchell</ListGroup.Item>
                                </ListGroup>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="col-12 col-md-4 pb-2">
                    <Card>
                        <Card.Body>
                            <Card.Title>Links <i className='fa fa-external-link'></i></Card.Title>
                            <Card.Text>
                                <ListGroup variant="flush">
                                    <ListGroup.Item><a target="_blank" rel="noreferrer noopener" href="https://www.facebook.com/dhbc.org.au">Facebook Page</a></ListGroup.Item>
                                    <ListGroup.Item><a target="_blank" rel="noreferrer noopener" href="https://dhbc.org.au/register">Buncheur Rides</a></ListGroup.Item>
                                    <ListGroup.Item><a target="_blank" rel="noreferrer noopener" href="https://www.strava.com/clubs/DulwichHillBicycleClubMembers">Strava (Members)</a></ListGroup.Item>
                                    <ListGroup.Item><a target="_blank" rel="noreferrer noopener" href="https://www.strava.com/clubs/Dulwich-Hill-Bicycle-Club-Fans">Strava (Fans)</a></ListGroup.Item>
                                    <ListGroup.Item><a target="_blank" rel="noreferrer noopener" href="https://twitter.com/DulwichHillBC">@DulwichHillBC Twitter</a></ListGroup.Item>
                                    <ListGroup.Item><a target="_blank" rel="noreferrer noopener" href="https://www.instagram.com/dulwichhillbc/">@dulwichillbc Instagram</a></ListGroup.Item>
                                    <ListGroup.Item><a target="_blank" rel="noreferrer noopener" href="https://www.instagram.com/dhracingteam/">@dhracingteam Instagram</a></ListGroup.Item>
                                    <ListGroup.Item><a target="_blank" rel="noreferrer noopener" href="/result">Race Result Form</a></ListGroup.Item>
                                </ListGroup>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="col-12 col-md-4 pb-2">
                    <Card >
                        <Card.Body>
                            <Card.Title>Facebook groups <i className='fa fa-external-link'></i></Card.Title>
                            <Card.Text>
                                <ListGroup variant="flush">
                                    <ListGroup.Item><a target="_blank" rel="noreferrer noopener" href="https://www.facebook.com/groups/dhbcmembers">Members</a></ListGroup.Item>
                                    <ListGroup.Item><a target="_blank" rel="noreferrer noopener" href="https://www.facebook.com/groups/dhbcjuniors">Juniors</a></ListGroup.Item>
                                    <ListGroup.Item><a target="_blank" rel="noreferrer noopener" href="https://www.facebook.com/groups/dhbctrack">Track</a></ListGroup.Item>
                                    <ListGroup.Item><a target="_blank" rel="noreferrer noopener" href="https://www.facebook.com/groups/dhbcmod">Ministry of Dirt</a></ListGroup.Item>
                                    <ListGroup.Item><a target="_blank" rel="noreferrer noopener" href="https://www.facebook.com/groups/dhbcracing/">Racing</a></ListGroup.Item>
                                    <ListGroup.Item><a target="_blank" rel="noreferrer noopener" href="https://www.facebook.com/groups/dhbcrides">Rides (ad-hoc rides)</a></ListGroup.Item>
                                    <ListGroup.Item><a target="_blank" rel="noreferrer noopener" href="https://www.facebook.com/dhbc.org.au/groups">There's more!</a></ListGroup.Item>
                                </ListGroup>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
export default Home