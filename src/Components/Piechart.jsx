import React from "react";
import {
    LineChart,
    ResponsiveContainer,
    Legend,
    Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
} from "recharts";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const pdata = [
    {
        name: "Jan",
        student: 50,
        fees: 200,
    },
    {
        name: "Feb",
        student: 70,
        fees: 100,
    },
    {
        name: "Mar",
        student: 80,
        fees: 150,
    },
    {
        name: "Apr",
        student: 50,
        fees: 100,
    },
    {
        name: "May",
        student: 80,
        fees: 80,
    },
    {
        name: "Jun",
        student: 100,
        fees: 80,
    },
    {
        name: "Jul",
        student: 120,
        fees: 100,
    },
    {
        name: "Aug",
        student: 70,
        fees: 80,
    },
    {
        name: "Sep",
        student: 140,
        fees: 80,
    },
    {
        name: "Oct",
        student: 120,
        fees: 140,
    },
    {
        name: "Nov",
        student: 150,
        fees: 120,
    },
    {
        name: "Dec",
        student: 180,
        fees: 90,
    },
];

function Piechart() {
    return (
        <>
            <div>
                <h1 className="text-heading">Campaign Overview</h1>
                <div>
                    <DropdownButton title="This Month">
                        <Dropdown.Item href="#">Jan</Dropdown.Item>
                        <Dropdown.Item href="#">Feb</Dropdown.Item>
                        <Dropdown.Item href="#">March</Dropdown.Item>
                    </DropdownButton>
                </div>
            </div>
            <ResponsiveContainer width="110%" aspect={3} style={{ marginLeft: "10px" }}>
                <LineChart data={pdata} margin={{ right: 300 }}>
                    <CartesianGrid />
                    <XAxis dataKey="name" interval={"preserveStartEnd"} />
                    <YAxis></YAxis>
                    <Legend />
                    <Tooltip />
                    <Line
                        dataKey="student"
                        stroke="black"
                        activeDot={{ r: 8 }}
                    />
                    <Line dataKey="fees" stroke="red" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
}
export default Piechart;