import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import box1 from './box1.jpg';
import box2 from './box2.jpg';
import Total from './Total.jpg';

function Grid() {
    return (
        <Container>
            <Row>
                <Col style={{ fontSize: "30px", color: "#454545" }}><img src={box1} style={{ height: "100px", width: "100px" }} />Total Arrived<span style={{ fontSize: "40px", color: "0000FF" }}>231</span></Col>
                <Col style={{ fontSize: "30px", color: "#454545" }}><img src={Total} style={{ height: "100px", width: "100px" }} />Total Booked<span style={{ fontSize: "40px", color: "0000FF" }}>891</span></Col>
                <Col style={{ fontSize: "30px", color: "#454545" }}><img src={box2} style={{ height: "100px", width: "100px" }} />Total check in<span style={{ fontSize: "40px", color: "0000FF" }}>129</span></Col>
            </Row>
        </Container>
    );
}

export default Grid;