import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllContacts } from '../../../api/contact'

const AdminContact = () => {
    const [contact, setContact] = useState([]);
    // console.log(contact);
    useEffect(() => {
        const getContacts = async () => {
            const { data } = await getAllContacts();
            setContact(data);
        }
        getContacts();
    }, [])
    return (
        <div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Contact</h4>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table header-border table-hover verticle-middle">
                                    <thead>
                                        <tr>
                                            <th scope="col">Index</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col">Subject</th>
                                            <th scope="col">Message</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {contact?.map((val, index) => (
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{val.name}</td>
                                                <td>{val.email}</td>
                                                <td>{val.phone}</td>
                                                <td>{val.subject}</td>
                                                <td>{val.message}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminContact