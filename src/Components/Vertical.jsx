import React from 'react';
import './Vertical.css';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar';
import Grid from './Grid';
import Piechart from './Piechart';
import Cale from './Cale.jpg';
const Vertical = () => {
    return (
        <div className="vertical-grid-container">

            <div className="sidebar">
                <Sidebar />
            </div>

            <div className="main-content">
                <Grid />
                <br /><br />
                <Piechart />
            </div>

            <div className="main">
                <img  style={{height:"90%", width:"110%"}} src={Cale} />
            </div>

        </div>
    );
};

export default Vertical;
