import {Accordion} from "react-bootstrap";

function Faq() {

    return(
        <section id="faq">
            <h2>Frequently Asked Questions</h2>
            <Accordion className="mt-5 mb-5 p-3">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What are clinic Timings</Accordion.Header>
                    <Accordion.Body>
                        The clinic timings are - 10:00am to 1:00pm in the morning and 5:00pm to 9:00pm in the evening, from Monday to Saturday.Sunday we are working
                        by appointment only.
                        It is preferred to take prior appointment on telephone to avoid waiting time.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Is online payment acceptable</Accordion.Header>
                    <Accordion.Body>
                        Yes. We also promote digital payments.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>How frequently should I visit a dentist</Accordion.Header>
                    <Accordion.Body>
                        You should visit a dentist at least twice in a year. As Prevention is better than Cure.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </section>
    )
}

export default Faq;
