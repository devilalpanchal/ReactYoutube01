import React from "react";
import { Button } from "react-bootstrap";


function MapFucn() {


    const Student = [

        { name: "devilal", contact: 25852255, email: "DEvila@gmai;l.com" },
        { name: "jeet", contact: 25852255, email: "DEvila@gmai;l.com" },
        { name: "devi", contact: 25852255, email: "DEvila@gmai;l.com" },
        { name: "mayank", contact: 25852255, email: "DEvila@gmai;l.com" },
        { name: "navneet", contact: 25852255, email: "DEvila@gmai;l.com" },
        { name: "dk", contact: 25852255, email: "DEvila@gmai;l.com" },
        { name: "satsh", contact: 25852255, email: "DEvila@gmai;l.com" },
    ]
    return (




        <div className="App">
<h1>Map Method  Using Array</h1>
            <table className="app table" border={1}>

                <tr>
                    <td>Name</td>
                    <td>Contact</td>
                    <td>Email</td>
                </tr>
                {

                    Student.map((item) =>
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.contact}</td>
                            <td>{item.email}</td>
                        </tr>

                    )


                }

            </table>

            <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
        </div>

    )


}

export default MapFucn;