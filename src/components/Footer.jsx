import {Col, Container, Row} from "react-bootstrap";
import navIcon1 from '../assets/img/call.svg';

function Footer (){

    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={12} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="#" onClick={()=> {alert("contact us at 9810527702")}}><img src={navIcon1}/></a>
                        </div>
                        <p>CopyRight 2023. All rights reserved by Aneshka Dental Care Centre</p>
                    </Col>
                </Row>
            </Container>
        </footer>

    )
}

export default Footer;
