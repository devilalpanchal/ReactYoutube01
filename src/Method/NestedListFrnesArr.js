import React from "react";
import { Table } from "react-bootstrap";
function Neast() {

    const DevilalDeveloper = [
        { name: "devilal", contact: 25852255, email: "DEva@gmai;l.com", address: [{ Hn: "10", City: "joara" }] },
        { name: "jeet", contact: 25852255, email: "DEvilai;l.com", address: [{ Hn: "10", City: "joara" }] },
        { name: "devi", contact: 25852255, email: "DEvila@i;l.com", address: [{ Hn: "10", City: "joara" }] },
        { name: "mayank", contact: 25852255, email: "Dmai;l.com", address: [{ Hn: "10", City: "joara" }] },
    ]
    return (

        <div className="devilal">
            <h5 className="White">Nested Array and Lsit</h5>
            <Table striped="columns">
                <tbody>
                    <tr>
                        <td>Sr.No.. </td>
                        <td>Name </td>
                        <td>Email </td>
                        <td>Address </td>
                        <td>City </td>
                    </tr>
                    {

                        DevilalDeveloper.map((data1,i) => 
                            <tr key={i}>
                                <td>{i+1} </td>
                                <td>{data1.name} </td>
                                <td>{data1.contact} </td>
                                <td>{data1.email}</td>
                                <td>{
                                    data1.address.map((item,i) => 
                                        <tr key={i}>
                                            <td>{item.City}</td>
                                            <td>{item.Hn}</td>
                                        </tr>
                                    )
                                }</td>
                            </tr>
                        )
                    }
                </tbody>

            </Table>

        </div>
    )
}

export default Neast;