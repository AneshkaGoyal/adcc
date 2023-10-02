import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import {Container,Row,Col} from "react-bootstrap";
import dummyImg from "../assets/img/dummyClinicImg.jpeg"
import patientTreatment from "../assets/img/patientTreatment.jpeg"
import clinicChair from "../assets/img/ClinicChair.jpeg"
import clinicBoard from "../assets/img/ClinicBoard.jpeg"
import clinicBoardTwo from "../assets/img/ClinicBoardTwo.jpeg"
import clinicWaiting from "../assets/img/ClinicWaitingImg1.jpeg"
import clinicWaiting2 from "../assets/img/ClinicWaitingImg2.jpeg"
import clinicWaiting3 from "../assets/img/ClinicWaiting3.jpeg"


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
                            <p>Aneshka Dental Care Centre is a premier dental clinic in sector 10 A Gurugram, since last 25+ years.
                               <br/>Dr.Ritu Goyal, a passionate professional dentist who holds an experience of more than 25 years. She has an expertise
                               in all dental procedures and has a line up of happy patients.<br/>
                               Dr.(Major) Y.K Goyal, with an additional experience of Indian Defence Services as dental surgeon has 25 plus
                               years of professional experience also provides consulting dental services at other clinics.<br/>
                               Our dental clinic offers state-of-the-art dental treatment meeting international standards and follows all the
                               sterlisation protocols. We use modern equipped hightech dental chairs. We have in depth knowlege to provide you perfect smile.
                               Ours is one of the best dental clinics in Gurugram than provides you a wide range of dental services to meet all your dental needs under one roof.
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider" autoPlay={true}>
                                <div className="item">
                                    <img src={clinicChair} alt="Images"/>
                                </div>
                                <div className="item">
                                    <img src={clinicBoard} alt="Images"/>
                                </div>
                                <div className="item">
                                    <img src={clinicBoardTwo} alt="Images"/>
                                </div>
                                <div className="item">
                                    <img src={patientTreatment} alt="Images"/>
                                </div>
                                <div className="item">
                                    <img src={clinicWaiting} alt="Images"/>
                                    <h5>Waiting</h5>
                                </div>
                                <div className="item">
                                    <img src={clinicWaiting2} alt="Images"/>
                                </div>
                                {/*<div className="item">*/}
                                {/*    <img src={clinicWaiting3} alt="Images"/>*/}
                                {/*</div>*/}
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    )

}

export default SuccessMetrics;
