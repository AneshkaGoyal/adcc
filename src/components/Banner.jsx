import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import TeethImg from '../assets/img/tooth.png';
import {useEffect, useState} from "react";
import "animate.css";
import TrackVisibility from 'react-on-screen';

function Banner () {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const toRotate = ["served 1000+ happy patients", "25+ years of expertise", "250+ procedures carried out"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker)
        };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
        return (
            <section className="banner" id="about-us">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} xl={7}>
                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                        <span className="tagline">Welcome to Aneshka Dental Care Center</span>
                                        <h1>{`We have `} <span className="wrap">{text}</span></h1>
                                        <p>Aneshka Dental Care center About the Clinic and Doctors Dummy Text. Aneshka
                                            Dental Care
                                            center About the Clinic and Doctors Dummy Text. Aneshka Dental Care center
                                            About the
                                            Clinic and Doctors Dummy Text. Aneshka Dental Care center About the Clinic
                                            and Doctors
                                            Dummy Text</p>
                                        <button onClick={() => {
                                            console.log("clicked from banner")
                                        }}>Book Appointment<ArrowRightCircle size={25}/></button>
                                    </div>}
                            </TrackVisibility>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <img src={TeethImg} alt="Header Img" width={680} height={614}/>
                        </Col>
                    </Row>
                </Container>

            </section>

        )
}

export default Banner;