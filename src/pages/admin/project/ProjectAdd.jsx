import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'

const ProjectAdd = (props) => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handlerAddProject = (dataProject) => {
        props.pushDataProjectAdd(dataProject);
        navigate("/admin/project")
    }
    return (
        <div><div className="row">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Project Add</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(handlerAddProject)}>
                            <div className="form-group">
                                <label >Project Name</label>
                                <input {...register('name', { required: true })} type="text" className="form-control" id="name" />
                                {errors.name && <p style={{ "color": "Red" }}>Startup must enter this field!</p>}
                            </div>
                            <div className="form-group">
                                <label >Domains</label>
                                <input {...register('domains', { required: true })} type="text" className="form-control" id="domains" />
                                {errors.domains && <p style={{ "color": "Red" }}>Startup must enter this field!</p>}
                            </div>
                            <div className="form-group">
                                <label >Github</label>
                                <input {...register('github', { required: true })} type="text" className="form-control" id="github" />
                                {errors.github && <p style={{ "color": "Red" }}>Startup must enter this field!</p>}
                            </div>
                            <div className="form-group">
                                <label >Technology</label>
                                <input {...register('technology', { required: true })} type="text" className="form-control" id="technology" />
                                {errors.technology && <p style={{ "color": "Red" }}>Startup must enter this field!</p>}
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

export default ProjectAdd