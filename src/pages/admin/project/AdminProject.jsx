import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const AdminProject = (props) => {
  const { project } = props;
  const navigate = useNavigate()
  const handlePushIdRemoveProject = (id) => {
    console.log(id);
    props.pushIDRemoveProject(id);
    navigate("/admin/project")
  }
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header row">
              <h4 className="card-title col-9">Project</h4>
              <Link to="/admin/project/add" className="col-3 with-50 align-right btn btn-primary">Add</Link>

            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table header-border table-hover verticle-middle">
                  <thead>
                    <tr>
                      <th scope="col">Index</th>
                      <th scope="col">Project Name</th>
                      <th scope="col">Domains</th>
                      <th scope="col">Github</th>
                      <th scope="col">Technology</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {project?.map((val, index) => (
                      <tr key={index + 1}>
                        <td>{index + 1}</td>
                        <td>{val.name}</td>
                        <td>{val.domains}</td>
                        <td>{val.github}</td>
                        <td>{val.technology}</td>
                        <td>
                          <Link to={`/admin/project/${val._id}/edit`} className="btn btn-success">Edit</Link>
                          <button className="btn btn-danger" onClick={() => { handlePushIdRemoveProject(val._id) }}>Remove</button>
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
    </div>
  )
}

export default AdminProject