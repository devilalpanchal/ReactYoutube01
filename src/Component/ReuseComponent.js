import React from "react";
import { Table } from "react-bootstrap";
import User from "./User";

function ReuseComp() {
    const person = [
        {
            name: "John Doe",
            birthday: "1990-05-15",
            mobileNumber: "+1234567890",
            city: "New York",
            country: "USA"
        },
        {
            name: "Alice Smith",
            birthday: "1985-10-20",
            mobileNumber: "+1987654321",
            city: "London",
            country: "UK"
        },
        {
            name: "Dk Patel",
            birthday: "1988-07-25",
            mobileNumber: "+1122334455",
            city: "Mumbai",
            country: "India"
        },
        {
            name: "Jeet Kumar",
            birthday: "1995-03-12",
            mobileNumber: "+919876543210",
            city: "Kolkata",
            country: "India"
        },
        {
            name: "Navneet Singh",
            birthday: "1992-11-30",
            mobileNumber: "+918765432109",
            city: "Delhi",
            country: "India"
        },
    ]
    return (
        <div className="App">
            <h3>hello devilall Resuse Component</h3>
            <Table>
                <tbody>
                   
                    {
                        person.map((data, i) => {
                            <User data2={data} />

                        })
                    }
                </tbody>

            </Table>
        </div>


    )
}

export default ReuseComp;