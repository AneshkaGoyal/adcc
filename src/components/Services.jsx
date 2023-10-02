import {Col, Container, Row, TabContainer, TabContent, TabPane} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import ServiceCard from "./ServiceCard";
import projImg1 from "../assets/img/rootcanal3.png"
import fillingImg from "../assets/img/fillingFinal.png"
import scaling from "../assets/img/scaling2.png"
import implant from "../assets/img/implant.png"
import extraction from "../assets/img/extraction.png"
import bridge from "../assets/img/bridge.png"
import crown from "../assets/img/crown.png"
import ortho from "../assets/img/ortho.png"
import child from "../assets/img/pediatric.png"
import oldMan from "../assets/img/old.png"
import denture from "../assets/img/denture.png"
import toothWhitening from "../assets/img/toothWhitening.png"
import veneer from "../assets/img/veneer.png"
import laser from "../assets/img/laser.png"
import preventive from "../assets/img/preventive.png"
import advGum from "../assets/img/advGum.png"
import cosmatic from "../assets/img/cosmatic.png"

function Services() {
    const services = [
        {
            title: "Filling",
            description: "The procedure for a dental filling is used to repair minor fractures or decay in the teeth, as a form of restorative dental treatment.",
            imageUrl: fillingImg
        },
        {
            title: "Root Canal",
            description: "Root canal treatment is a dental procedure that relieves pain caused by an infected or abscessed tooth. During the root canal process, the inflamed pulp is removed. The surfaces inside the tooth are then cleaned and disinfected, and a filling is placed to seal the space.",
            imageUrl: projImg1
        },
        {
            title: "Ultrasonic Scaling",
            description: "Dental scaling is a type of cleaning that uses a special tool to reach plaque and tartar below the gum line",
            imageUrl: scaling
        },
        {
            title: "Dental Implants",
            description: "Dental implant is considered a new alternative method in restoring the esthetic and function of lost teeth in oral cavity",
            imageUrl: implant
        },
        {
            title: "Tooth Removal",
            description: "Dental extraction is the removal of a tooth from its socket in the jawbone. There are two types of dental extraction: simple and surgical. Simple extraction is for visible teeth that can be loosened and pulled out with forceps. Surgical extraction is for teeth that are broken, impacted, or not fully erupted. It involves making a small cut in the gum and removing some bone or tissue around the tooth.",
            imageUrl: extraction
        },
        {
            title: "Bridge Work",
            description: "A bridge is a fixed replacement for a missing tooth or teeth. Bridge is usually created from precious metals and porcelain and will be fixed in your mouth.",
            imageUrl: bridge
        }
    ]
    const services1 = [
        {
        title: "Crown Work",
        description: "Dental Crowns are a tooth-shaped cap which is placed on the tooth to restore the shape, size, and appearance of the tooth. It also enhances the strength of the tooth. If the major part of the tooth is missing, then the crown is the best solution for it. By placing the crown, a tooth can function normally again.",
        imageUrl: crown
        },
        {
            title: "Orthodontic Treatment",
            description: "Orthodontics is a dental specialty focused on aligning your bite and straightening your teeth. You might need to see an orthodontist if you have crooked, overlapped, twisted or gapped teeth. Common orthodontic treatments include traditional braces, clear aligners and removable retainers.",
            imageUrl: ortho
        },
        {
            title: "Pediatric Dentistry",
            description: "Pediatric dentistry is a branch of dentistry that deals with the examination and management of dental health in children.",
            imageUrl: child
        },
        {
            title: "Geriatric Dentistry",
            description: "Geriatric Dentistry is the delivery of dental care to older adults involving diagnosis, prevention, management and treatment of problems associated with age related diseases.",
            imageUrl: oldMan
        },
        {
            title: "Denture or Artificial Teeth",
            description: "A denture is a removable replacement for missing teeth and surrounding tissues. Two types of dentures are available -- complete and partial dentures. Complete dentures are used when all the teeth are missing, while partial dentures are used when some natural teeth remain.",
            imageUrl: denture
        },
        {
            title: "Teeth Whitening",
            description: "Teeth Whitening involves bleaching your teeth to make them a lighter colour. Another procedure called laser whitening can also be done.",
            imageUrl: toothWhitening
        }
        ]
    const services2 = [
        {
            title: "Dental Veneer",
            description: "Veneers are new facings for teeth that disguise a discoloured or chipped tooth.",
            imageUrl: veneer
        },
        {
            title: "Laser Dentistry",
            description: "Laser Dentistry is the use of lasers to treat a number of different dental conditions like teeth hyper sensitivity, tooth decay, gum disease, whitening teeth and TMJ problems.",
            imageUrl: laser
        },
        {
            title: "Preventive Dentistry",
            description: "Preventive Dentistry is dental care that helps maintain good oral health. It includes regular dental checkups, proper at home care, fluoride treatments, dental sealants and a healthy diet.",
            imageUrl: preventive
        },
        {
            title: "Advanced Gum Treatment",
            description: "Advanced Gum Treatment includes both surgical and non surgical techniques to restore health to the tissues that support the teeth (gums and bone).",
            imageUrl: advGum
        },
        {
            title: "Cosmetic Dentistry",
            description: "Cosmetic Dentistry focuses on improving the appearance of your smile.",
            imageUrl: cosmatic
        }
    ]
    return (
        <section className="project" id="services">
            <Container>
                <Row>
                    <Col sm={12} md={12} xl={12}>
                        <h2>Services</h2>
                        <p>We conduct all latest procedures in safe and hygienic environment, meeting international standards.</p>
                        <TabContainer id="services-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Click Me</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Click Me</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">
                                    Click Me
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
