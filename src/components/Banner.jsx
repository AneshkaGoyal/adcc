import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import {useEffect, useState} from "react";
import "animate.css";
import TrackVisibility from 'react-on-screen';

function Banner () {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const toRotate = ["served 100000+ happy patients", "25+ years of expertise", "250+ procedures carried out", "best quality affordable services"];
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
                                        <span className="tagline">Welcome to Aneshka Dental Care Centre</span>
                                        <h1>{`We have `} <span className="wrap">{text}</span></h1>
                                        <p>We are one of the best dental clinics that you can trust. We aim to provide you
                                        the dental care you deserve with our expert, compassionate, dedicated work style with
                                        international standards. Our motto "Smile with confidence"</p>
                                        <a href="#book-appointment" className="text-decoration-none">
                                        <button><span>Book Appointment<ArrowRightCircle size={25}/></span></button>
                                        </a>
                                    </div>}
                            </TrackVisibility>
                        </Col>
                    </Row>
                </Container>

            </section>

        )
}

export default Banner;
