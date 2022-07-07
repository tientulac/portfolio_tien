import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router'
import { useNavigate } from "react-router-dom"
import { getProjectById } from '../../../api/project';
const ProjectEdit = (props) => {
    const { id } = useParams();
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    useEffect(() => {
        const getProject = async () => {
            const { data } = await getProjectById(id);
            reset(data)
        }
        getProject()
    }, [])
    const handlerPushDataEditProject = (dataEdit) => {
        props.pushDataProjectEdit(dataEdit)
        navigate("/admin/project")
    }
    return (
        <div><div className="row">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Project Edit</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(handlerPushDataEditProject)}>
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
                                <button className="btn btn-success w-100 mt-4">Update</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div></div>
    )
}

export default ProjectEdit