import {Col, Container, Row} from "react-bootstrap";
import {useState} from "react";
import contactImg from "../assets/img/contact-img.svg"

function Contact(){

    const formInitialDetails = {
        firstName: "",
        lastName: "",
        phone: "",
        message: ""
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const[buttonText, setButtonText] = useState('Book');
    const[status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
                ...formDetails,
                [category]: value
            }
        )
    }

    const isVerified = () => {
        const PHONE_REGEX =
            new RegExp("^[0-9]{10}$");
        if(!PHONE_REGEX.test(formDetails.phone)) {
            setStatus({success: false, message: 'Please input 10 digit Mobile number'});
            return false;
        }
        if (formDetails.firstName===undefined || formDetails.firstName.trim().length === 0){
            setStatus({success: false, message: 'Please input valid first name'});
            return false;
        }
        setStatus({success: true, message: ''})
        return true;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(isVerified()) {
            setButtonText("Sending...");
            let response = await fetch("/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(formDetails),
            });
            setButtonText("Send");
            let result = await response.json();
            setFormDetails(formInitialDetails);
            if (result.code == 200) {
                setStatus({success: true, message: 'Message sent successfully'});
            } else {
                setStatus({success: false, message: 'Something went wrong, please try again later.'});
            }
        }
    }

    return(
        <section id="book-appointment" className="contact">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="book-appointment"/>
                    </Col>
                    <Col md={6}>
                        <h2>Book Appointment</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col md={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e)=>onFormUpdate('firstName', e.target.value)}/>
                                </Col>
                                <Col md={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e)=>onFormUpdate('lastName', e.target.value)}/>
                                </Col>
                                <Col md={6} className="px-1">
                                    <input type="tel" value={formDetails.phone} placeholder="Mobile Number" onChange={(e)=>onFormUpdate('phone', e.target.value)}/>
                                </Col>
                                <Col>
                                    <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e)=>onFormUpdate('message', e.target.value)}/>
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? "danger":"success"}>{status.message}</p>
                                    </Col>

                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>

    )

}

export default Contact;
