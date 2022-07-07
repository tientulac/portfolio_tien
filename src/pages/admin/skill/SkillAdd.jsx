import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'

const SkillAdd = (props) => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (dataPost) => {
        props.handlerAddSkill(dataPost)
        navigate("/admin/skill")
    }
    return (
        <div><div className="row">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Skill Add</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label >Skill Name</label>
                                <input {...register('skillName', { required: true })} type="text" className="form-control" id="skillName" />
                                {errors.skillName && <p style={{ "color": "Red" }}>Startup must enter this field!</p>}
                            </div>
                            <div className="form-group">
                                <label >Skill Progress</label>
                                <input {...register('skillProgress', { required: true })} type="text" className="form-control" id="skillProgress" />
                                {errors.skillProgress && <p style={{ "color": "Red" }}>Startup must enter this field!</p>}
                            </div>
                            <div className="form-group">
                                <button className="btn btn-success w-100 mt-4">Add</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div></div>
    )
}

export default SkillAdd