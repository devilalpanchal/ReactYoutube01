import React from "react";
import { Button, Table } from "react-bootstrap";


function MapFucnBoot() {


    const Student = [

        { name: "devilal", contact: 25852255, email: "DEvila@gmai;l.com" },
        { name: "jeet", contact: 25852255, email: "DEvila@gmai;l.com" },
        { name: "devi", contact: 25852255, email: "DEvila@gmai;l.com" },
        { name: "devi", contact: 25852255, email: "DEvila@gmai;l.com" },
        { name: "devi", contact: 2585565654255, email: "DEvila@gmai;l.com" },
    ]
    return (




        <div className="app">
            <h1>Map Method  Using Bootsrap List & Table </h1>
            <Table striped bordered hover variant="dark">
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Contact</td>
                        <td>Email</td>
                    </tr>
                    {

                        Student.map((item, index) =>
                            // <tr key={index}>
                            //     <td>{item.name}</td>
                            //     <td>{item.contact}</td>
                            //     <td>{item.email}</td>
                            // </tr>
                            item.contact === 25852255 ?
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.contact}</td>
                                    <td>{item.email}</td>
                                </tr> : null
                        )


                    }
                </tbody>


            </Table>


        </div>

    )


}

export default MapFucnBoot;

// Purpose Of add Uniqe key To identify By react that it is a separate element and Dom Works is properly