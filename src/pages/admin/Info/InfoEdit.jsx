import React, { useEffect } from 'react'
import { get, useForm } from 'react-hook-form'
import {  useParams } from 'react-router';
import { getInfoId } from '../../../api/info';
import {useNavigate} from "react-router-dom"

const InfoEdit = (props) => {
    const navigate = useNavigate();
    const { id } = useParams()
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    useEffect(() => {
        const getInfo = async () => {
            const { data } = await getInfoId(id);
            // console.log(data);
            reset(data);    
        }
        getInfo()
    },[])
    const handlerSubmit = (dataPost) => {
        props.handleEditInfo(dataPost)
        navigate("/admin/info")
    }

    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Info Update</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(handlerSubmit)}>
                            <div className="form-group">
                                <label >Name</label>
                                <input {...register('name', { required: true })} type="text" className="form-control" id="name" />
                                {errors.name && <p style={{ "color": "Red" }}>Startup must enter this field!</p>}
                            </div>
                            <div className="form-group">
                                <label >Career goals</label>
                                <input {...register('careerGoals', { required: true })} type="text" className="form-control" id="careerGoals" />
                                {errors.careerGoals && <p style={{ "color": "Red" }}>Startup must enter this field!</p>}
                            </div>
                            <div className="form-group">
                                <label >Birthday</label>
                                <input {...register('birthday', { required: true })} type="text" className="form-control" id="birthday" />
                                {errors.birthday && <p style={{ "color": "Red" }}>Startup must enter this field!</p>}
                            </div>
                            <div className="form-group">
                                <label >address</label>
                                <input {...register('address', { required: true })} type="text" className="form-control" id="address" />
                                {errors.address && <p style={{ "color": "Red" }}>Startup must enter this field!</p>}
                            </div>
                            <div className="form-group">
                                <label >phone</label>
                                <input {...register('phone', { required: true })} type="text" className="form-control" id="phone" />
                                {errors.phone && <p style={{ "color": "Red" }}>Startup must enter this field!</p>}
                            </div>
                            <div className="form-group">
                                <label >email</label>
                                <input {...register('email', { required: true })} type="text" className="form-control" id="email" />
                                {errors.email && <p style={{ "color": "Red" }}>Startup must enter this field!</p>}
                            </div>
                            <div className="form-group">
                                <label >github</label>
                                <input {...register('github', { required: true })} type="text" className="form-control" id="github" />
                                {errors.github && <p style={{ "color": "Red" }}>Startup must enter this field!</p>}
                            </div>
                            <div className="form-group">
                                <label >facebook</label>
                                <input {...register('facebook', { required: true })} type="text" className="form-control" id="facebook" />
                                {errors.facebook && <p style={{ "color": "Red" }}>Startup must enter this field!</p>}
                            </div>
                            <div className="form-group">
                                <label >instagram</label>
                                <input {...register('instagram', { required: true })} type="text" className="form-control" id="instagram" />
                                {errors.instagram && <p style={{ "color": "Red" }}>Startup must enter this field!</p>}
                            </div>
                            <div className="form-group">
                                <label >avatar</label>
                                <input {...register('avatar', { required: true })} type="text" className="form-control" id="avatar" />
                                {errors.avatar && <p style={{ "color": "Red" }}>Startup must enter this field!</p>}
                            </div>
                            <div className="form-group">
                                <label >image</label>
                                <input {...register('image', { required: true })} type="text" className="form-control" id="image" />
                                {errors.image && <p style={{ "color": "Red" }}>Startup must enter this field!</p>}
                            </div>
                            <div className="form-group">
                                <button className="btn btn-success w-100 mt-4">Edit</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoEdit