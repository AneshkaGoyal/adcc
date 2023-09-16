import {useEffect} from "react";
import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";

function Review (){
    useEffect(() => {
        const script = document.createElement('script');

        script.src = "https://widgets.sociablekit.com/google-reviews/widget.js";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);
    return (
        <div id="reviews">
            <Container>
                <Row>
                    <Col sm={12} md={9} xl={9}>
                        <h1>What our Patient's Say</h1>
                    </Col>
                    <Col sm={12} md={3} xl={3}>
                        <a target="_blank" href="https://www.google.com/maps/place/ANESHKA+DENTAL+CARE+CENTRE/@28.4474231,77.0110774,15z/data=!4m8!3m7!1s0x390d182465e660a5:0x3e4afc710f193cbe!8m2!3d28.4443991!4d77.0070797!9m1!1b1!16s%2Fg%2F1tjv1wxz?entry=ttu">Leave us your thoughts</a>
                    </Col>
                </Row>
            </Container>
            <div className='sk-ww-google-reviews' data-embed-id='188806'/>
        </div>
    )

}

export default Review;