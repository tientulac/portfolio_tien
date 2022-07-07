import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form'
import { getResumeById } from '../../../api/resume';
import { useNavigate } from "react-router-dom"
const ResumeEdit = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  useEffect(() => {
    const getResumeEdit = async () => {
      const { data } = await getResumeById(id);
      reset(data)
    }
    getResumeEdit();
  }, [])
  const handlerSubmit = (data) => {
    props.handlerEditResume(data)
    navigate("/admin/resume");
  }
  return (
    <div><div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Info Update</h4>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit(handlerSubmit)}>
              <div className="form-group">
                <label >Title</label>
                <input {...register('title', { required: true })} type="text" className="form-control" id="title" />
                {errors.title && <p style={{ "color": "Red" }}>Startup must enter this field!</p>}
              </div>
              <div className="form-group">
                <label >Time</label>
                <input {...register('time', { required: true })} type="text" className="form-control" id="time" />
                {errors.time && <p style={{ "color": "Red" }}>Startup must enter this field!</p>}
              </div>
              <div className="form-group">
                <label >Description</label>
                <input {...register('description', { required: true })} type="text" className="form-control" id="description" />
                {errors.description && <p style={{ "color": "Red" }}>Startup must enter this field!</p>}
              </div>
              <div className="form-group">
                <button className="btn btn-success w-100 mt-4">Edit</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div></div>
  )
}

export default ResumeEdit