import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import {Container,Row,Col} from "react-bootstrap";
import dummyImg from "../assets/img/dummyClinicImg.jpeg"

function SuccessMetrics(){

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return(
        <section className="skill" id="about-us-2">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Meet Us
                            </h2>
                            <p>One line or two about the docs and clinic. One line or two about the docs and clinic. One line or two about the docs and clinic. One line or two about the docs and clinic.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider" autoPlay={true}>
                                <div className="item">
                                    <img src={dummyImg} alt="Images"/>
                                    <h5>Clinic</h5>
                                </div>
                                <div className="item">
                                    <img src={dummyImg} alt="Images"/>
                                    <h5>Waiting</h5>
                                </div>
                                <div className="item">
                                    <img src={dummyImg} alt="Images"/>
                                    <h5>Applicance</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    )

}

export default SuccessMetrics;