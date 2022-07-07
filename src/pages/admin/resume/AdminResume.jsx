import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getResume } from '../../../api/resume';

const AdminResume = (props) => {
  const { resume } = props;
  const handlerIdremoveResume = (id) => {
    props.handlerRemove(id)
  }
  return (
    <div>  <div>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header row">
              <h4 className="card-title col-9">Resume</h4>
              <Link to="/admin/resume/add" className="col-3 with-50 align-right btn btn-primary">Add</Link>

            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table header-border table-hover verticle-middle">
                  <thead>
                    <tr>
                      <th scope="col">Index</th>
                      <th scope="col">Name</th>
                      <th scope="col">Time</th>
                      <th scope="col">Description</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {resume?.map((val, index) => (
                      <tr key={index + 1}>
                        <td>{index + 1}</td>
                        <td>{val.title}</td>
                        <td>{val.time}</td>
                        <td>{val.description}</td>
                        <td>
                          <Link to={`/admin/resume/${val?._id}/edit`} className="btn btn-success">Edit</Link>
                          <button className="btn btn-danger" onClick={() => { handlerIdremoveResume(val._id) }}>Remove</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></div>
  )
}

export default AdminResume