import React from 'react'
import { Link } from 'react-router-dom';

const SoftSkillManager = (props) => {
  const { softSkill } = props;
  const handlerRemoveSoftSkill = (id) => {
    props.onpushIdRemoveSoftSkill(id)
  }
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header row">
              <h4 className="card-title col-9">Soft Skill</h4>
              <Link to="/admin/soft-skill/add" className="col-3 with-50 align-right btn btn-primary">Add</Link>

            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table header-border table-hover verticle-middle">
                  <thead>
                    <tr>
                      <th scope="col">Index</th>
                      <th scope="col">Name</th>
                      <th scope="col">Icons</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {softSkill?.map((val, index) => (
                      <tr key={index + 1}>
                        <td>{index + 1}</td>
                        <td>{val.name}</td>
                        <td>{val.icons}</td>
                        <td>
                          <Link to={`/admin/soft-skill/${val?._id}/edit`} className="btn btn-success">Edit</Link>
                          <button className="btn btn-danger" onClick={() => { handlerRemoveSoftSkill(val._id) }} >Remove</button>
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

export default SoftSkillManager