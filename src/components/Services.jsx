import {Col, Container, Row, TabContainer, TabContent, TabPane} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import ServiceCard from "./ServiceCard";
import projImg1 from "../assets/img/rootCanalImg.jpeg"

function Services() {
    const services = [
        {
            title: "Root Canal",
            description: "PRocedured description in a couple of line goes here",
            imageUrl: projImg1
        },
        {
            title: "Root Canal",
            description: "PRocedured description in a couple of line goes here",
            imageUrl: projImg1
        },
        {
            title: "Root Canal",
            description: "PRocedured description in a couple of line goes here",
            imageUrl: projImg1
        },
        {
            title: "Root Canal",
            description: "PRocedured description in a couple of line goes here",
            imageUrl: projImg1
        },
        {
            title: "Root Canal",
            description: "PRocedured description in a couple of line goes here",
            imageUrl: projImg1
        },
        {
            title: "Root Canal",
            description: "PRocedured description in a couple of line goes here",
            imageUrl: projImg1
        }
    ]
    const services1 = [
        {
        title: "Root Canal",
        description: "PRocedured description in a couple of line goes here",
        imageUrl: projImg1
        },
        {
            title: "Root Canal",
            description: "PRocedured description in a couple of line goes here",
            imageUrl: projImg1
        },
        {
            title: "Root Canal",
            description: "PRocedured description in a couple of line goes here",
            imageUrl: projImg1
        },
        {
            title: "Root Canal",
            description: "PRocedured description in a couple of line goes here",
            imageUrl: projImg1
        },
        {
            title: "Root Canal",
            description: "PRocedured description in a couple of line goes here",
            imageUrl: projImg1
        },
        {
            title: "Root Canal",
            description: "PRocedured description in a couple of line goes here",
            imageUrl: projImg1
        }
        ]
    const services2 = [
        {
            title: "Root Canal",
            description: "PRocedured description in a couple of line goes here",
            imageUrl: projImg1
        },
        {
            title: "Root Canal",
            description: "PRocedured description in a couple of line goes here",
            imageUrl: projImg1
        },
        {
            title: "Root Canal",
            description: "PRocedured description in a couple of line goes here",
            imageUrl: projImg1
        }
    ]
    return (
        <section className="project" id="services">
            <Container>
                <Row>
                    <Col sm={12} md={12} xl={12}>
                        <h2>Services</h2>
                        <p>We conduct all latest procedures in safe and higenic environment. Or Add someother service description</p>
                        <TabContainer id="services-tabs" defaultActiveKey="first">
                        <Nav variant="pills" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">
                                    Tab Three
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                            <TabContent>
                                <TabPane eventKey="first">
                                    <Row>
                                        {services.map((service, index) => {
                                            return <ServiceCard key = {index} title={service.title} description={service.description} imageUrl={service.imageUrl}/>

                                        })}
                                    </Row>
                                </TabPane>
                                <TabPane eventKey="second">
                                    <Row>
                                        {services1.map((service) => {
                                            return <ServiceCard title={service.title} description={service.description} imageUrl={service.imageUrl}/>

                                        })}
                                    </Row>
                                </TabPane>
                                <TabPane eventKey="third">
                                    <Row>
                                        {services2.map((service) => {
                                            return <ServiceCard title={service.title} description={service.description} imageUrl={service.imageUrl}/>

                                        })}
                                    </Row>
                                </TabPane>
                            </TabContent>
                        </TabContainer>
                    </Col>
                </Row>
            </Container>
        </section>

    );

}

export default Services;