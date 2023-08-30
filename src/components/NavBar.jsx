import {useState, useEffect} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/call.svg';

function NavBar() {
    const [activeLink, setActiveLink] = useState('about-us')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const updateActiveLink = (activeLinkName) => {
        setActiveLink(activeLinkName);
    }
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled":""}>
            <Container>
                <Navbar.Brand href="#about-us">
                    <img src={logo} alt="ADCC"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"/>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#about-us" className={activeLink === 'about-us'? "active navbar-link": "navbar-link"} onClick={() => updateActiveLink('about-us')}>About Us</Nav.Link>
                        <Nav.Link href="#services" className={activeLink === 'services'? "active navbar-link": "navbar-link"} onClick={() => updateActiveLink('services')}>Services</Nav.Link>
                        <Nav.Link href="#reviews" className={activeLink === 'reviews'? "active navbar-link": "navbar-link"} onClick={() => updateActiveLink('reviews')}>Reviews</Nav.Link>
                        <Nav.Link href="#faq" className={activeLink === 'faqs'? "active navbar-link": "navbar-link"} onClick={() => updateActiveLink('faqs')}>FAQs</Nav.Link>
                       <span className="navbar-text">
                           <div className="social-icon">
                               <a href="#"><img src={navIcon1} alt=""/></a>
                           </div>
                           <button className="vvd" onClick={() => console.log("button clicked")}><span>Book Appointment</span></button>
                       </span>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;