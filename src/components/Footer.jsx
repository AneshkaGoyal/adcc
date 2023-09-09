import {Col, Container, Row} from "react-bootstrap";
import logo from "../assets/img/logo.svg"
import navIcon1 from '../assets/img/call.svg';

function Footer (){

    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <img src={logo} alt="Logo"/>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href=""><img src={navIcon1}/></a>
                        </div>
                        <p>CopyRight 2023. All rights reserved by Aneshka Dental Care Center</p>
                    </Col>
                </Row>
            </Container>
        </footer>

    )
}

export default Footer;