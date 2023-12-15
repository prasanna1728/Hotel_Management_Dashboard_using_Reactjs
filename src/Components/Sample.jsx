import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import owner from './owner.png';
import NotificationBell from './NotificationBell';


function Sample() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#"><h1 style={{ color: "blueviolet" }}>Welcome,<span style={{ fontSize: "40px" }}> Ariana !</span></h1>
                        <h3 style={{ color: "#454545" }}>Dont't forget to check your activity</h3>
                    </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav" style={{ marginLeft: "435px" }}>
                        <Nav className="me-auto">


                            <Nav.Link href="#"><NotificationBell /></Nav.Link>

                            <Nav.Link href="#">
                                <div>
                                    <h3 style={{ color: "#454545" }}>Anjayani abraham</h3>
                                    <h5 style={{ color: "#454545" }}>Owner</h5>
                                </div>
                            </Nav.Link>
                            <NavDropdown title={<img src={owner} alt="Anjayani abraham"
                                style={{ width: '70px', height: '70px', borderRadius: '50%', marginRight: '10px' }} />} variant="success">
                                <NavDropdown.Item href="#">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
export default Sample;