import {Col} from "react-bootstrap";

function ServiceCard({title, description, imageUrl}) {
    return (
        <Col sm={6} md={4} xs={12}>
            <div className="proj-imgbx">
                <img src={imageUrl}/>
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
            </div>
        </Col>
    )
}

export default ServiceCard;
