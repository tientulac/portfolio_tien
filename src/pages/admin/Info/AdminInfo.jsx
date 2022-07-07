import React from 'react'
import { Link } from 'react-router-dom';

const AdminInfo = ({ info }) => {
  // console.log(info);
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Info</h4>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table header-border table-hover verticle-middle">
                <thead>
                  <tr>
                    <th scope="col">Type</th>
                    <th scope="col">Value</th>

                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>{info?.name}</td>
                  </tr>
                  <tr>
                    <td>Birthday</td>
                    <td>{info?.birthday}</td>
                  </tr>
                  <tr>
                    <td>Phone</td>
                    <td>{info?.phone}</td>
                  </tr>
                  <tr>
                    <td>Address</td>
                    <td>{info?.address}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>{info?.email}</td>
                  </tr>
                  <tr>
                    <td>Facebook</td>
                    <td>{info?.facebook}</td>
                  </tr>
                  <tr>
                    <td>Career Goals</td>
                    <td>{info?.careerGoals}</td>
                  </tr>
                  <tr>
                    <td>Avatar</td>
                    <td><img src={info?.avatar} alt="" style={{ "width": "300px"}} /></td>
                  </tr>
                  <tr>
                    <td>Banner</td>
                    <td><img src={info?.image} alt="" style={{ "width": "50%","height": "50%"}} /></td>
                  </tr>
                </tbody>
              </table>
             <Link to={`${info?._id}/edit`}  ><a className="btn btn-success width d-block text-right font-medium text-base text-green-500 hover:text-indigo-900">Edit</a></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminInfo