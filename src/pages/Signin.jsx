import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, Navigate } from 'react-router-dom';
import { signin } from '../api/user';
import { setUserLocalStorage } from '../utils/localStorage';

const Signin = () => {
    const navigate = useNavigate()
    const [message, setMessage] = useState('');
    const [show, setShow] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const handlerSubmit = async (dataSignin) => {
        const { data } = await signin(dataSignin);
        // console.log(data);
        if (data.message != '') {
            setMessage(data.message);
            setShow(true);
        }
        setUserLocalStorage(data, () => {
            navigate("/admin")
        })
    }
    return (
        <div>
            <section className="vh-100" style={{
                backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvHK6Fo_8PeDtzkT4AycD5_04agyJjctYLqg&usqp=CAU)`
            }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <form className="card shadow-2-strong" onSubmit={handleSubmit(handlerSubmit)} style={{ "borderRadius": "1rem" }}>
                                <div className="card-body p-5 text-center">

                                    <h3 className="mb-5">Sign in</h3>

                                    <div className="form-outline mb-4">
                                        <input {...register('email', { required: true })} placeholder="Email" type="email" id="email" className="form-control form-control-lg" required />
                                        {errors.email && <p style={{ "color": "Red", "textAlign": "left" }}>Startup must enter this field!</p>}
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input {...register('password', { required: true })} placeholder="Password" type="password" id="password" className="form-control form-control-lg" required />
                                        {errors.password && <p style={{ "color": "Red", "textAlign": "left" }}>Startup must enter this field!</p>}
                                    </div>

                                    {/* <div className="form-check d-flex justify-content-start mb-4">
                                        <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                                        <label className="form-check-label"> Remember password </label>
                                    </div> */}
                                    <div style={{ "color": "Red", "textAlign": "left", "fontSize": "18px", "margin": "8px 0px" }}>
                                        <div className="sent-message" style={{ display: show ? 'block' : 'none' }} >{message}</div>
                                    </div>
                                    <button className="btn btn-primary btn-lg btn-block" type="submit" style={{ "width": "100%" }}>Login</button>

                                    <hr className="my-4" />

                                    <button className="btn btn-lg btn-block btn-primary" style={{ "backgroundColor": "#dd4b39", "width": "100%" }}
                                        type="submit"><i className="fab fa-google me-2"></i> Sign in with google</button>
                                    <button className="btn btn-lg btn-block btn-primary mb-2" style={{ "backgroundColor": "#3b5998", "width": "100%", "marginTop": "8px" }}
                                        type="submit"><i className="fab fa-facebook-f me-2"></i>Sign in with facebook</button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Signin