import React from "react";
import { Container, Row, Col, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaMicrosoft, FaHeart, FaCalendar, FaWeixin, FaWpforms, FaTwitch, FaReact, FaShare } from 'react-icons/fa'
import logo from './logo.png'


const Sidebar = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    {/* Sidebar */}
                    <Col sm={100} md={1} className="bg-light sidebar">
                        <Nav className="flex-column">
                            <Nav.Link href="#"><img style={{ height: "70px", width: "70px" }} src={logo} /></Nav.Link> <br />
                            <Nav.Link href="#"><FaMicrosoft size={30} color="black" /></Nav.Link> <br />
                            <Nav.Link href="#"><FaHeart size={30} color="black" /></Nav.Link> <br />
                            <Nav.Link href="#"><FaCalendar size={30} color="black" /></Nav.Link> <br />
                            <Nav.Link href="#"><FaWeixin size={30} color="black" /></Nav.Link> <br />
                            <Nav.Link href="#"><FaWpforms size={30} color="black" /></Nav.Link> <br />
                            <Nav.Link href="#"><FaTwitch size={30} color="black" /></Nav.Link> <br />
                            <Nav.Link href="#"><FaReact size={30} color="black" /></Nav.Link>
                        </Nav>
                    </Col>
                </Row>


                
            </Container>



        </>
    );
};
export default Sidebar;