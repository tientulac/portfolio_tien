import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { getSoftSkillById } from '../../../api/softskill';
import { useParams } from "react-router"
const SoftSkillEdit = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  useEffect(() => {
    const getSoftSkill = async () => {
      const { data } = await getSoftSkillById(id);
      reset(data)
    }
    getSoftSkill();
  }, [])
  const onSubmit = (dataEdit) => {
    props.handlerEditSoftSkill(dataEdit)
    navigate("/admin/soft-skill")
  }
  return (
    <div><div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Soft Skill Edit</h4>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label >Name</label>
                <input {...register('name', { required: true })} type="text" className="form-control" id="name" />
                {errors.name && <p style={{ "color": "Red" }}>Startup must enter this field!</p>}
              </div>
              <div className="form-group">
                <label >Icons</label>
                <input {...register('icons', { required: true })} type="text" className="form-control" id="icons" />
                {errors.icons && <p style={{ "color": "Red" }}>Startup must enter this field!</p>}
              </div>
              <div className="form-group">
                <button className="btn btn-success w-100 mt-4">Update</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div></div>
  )
}

export default SoftSkillEdit