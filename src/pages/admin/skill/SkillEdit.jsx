import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { getSkillById } from '../../../api/skill';
import { useParams } from "react-router"
const SkillEdit = (props) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    useEffect(() => {
        const getSkill = async () => {
            const { data } = await getSkillById(id);
            reset(data)
        }
        getSkill();
    }, [])
    const onSubmit = (dataEdit) => {
        props.handlerEditSkill(dataEdit)
        navigate("/admin/skill")
    }
    return (
        <div><div className="row">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Skill Edit</h4>
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
                                <button className="btn btn-success w-100 mt-4">Update</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div></div>
    )
}

export default SkillEdit