import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { postContact } from '../api/contact';
import { useNavigate } from "react-router-dom"
const Contact = ({ info }) => {
  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const handlerSubmit = async (dataContact) => {
    // console.log(dataContact);
    const { data } = await postContact(dataContact)
    setShow(!show)
  }
  return (
    <div>  <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <h2>Contact</h2>
          {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
        </div>

        <div className="row" >

          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>{info?.address}</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>{info?.email}</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>{info?.phone}</p>
              </div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d930.8777157663562!2d105.74027422919347!3d21.052248899124105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454f75470473d%3A0x6527213b5300639e!2zTmd1ecOqbiBYw6EsIE1pbmggS2hhaSwgVOG7qyBMacOqbSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1649437126296!5m2!1svi!2s" style={{ "border": "0", "width": "100%", "height": "300px" }}
                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form" onSubmit={handleSubmit(handlerSubmit)}>
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name</label>
                  <input {...register('name', { required: true })} type="text" name="name" className="form-control" id="name" required />
                  {errors.name && <p style={{ "color": "Red" }}>Startup must enter this field!</p>}
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="email">Your Email</label>
                  <input type="email" {...register('email', { required: true })} className="form-control" name="email" id="email" required />
                  {errors.email && <p style={{ "color": "Red" }}>Startup must enter this field!</p>}
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="phone">Your phone</label>
                  <input type="text" {...register('phone', { required: true })} className="form-control" name="phone" id="phone" required />
                  {errors.phone && <p style={{ "color": "Red" }}>Startup must enter this field!</p>}
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" {...register('subject', { required: true })} className="form-control" name="subject" id="subject" required />
                  {errors.subject && <p style={{ "color": "Red" }}>Startup must enter this field!</p>}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" {...register('message', { required: true })} name="message" rows="10" required />
                {errors.message && <p style={{ "color": "Red" }}>Startup must enter this field!</p>}
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message" style={{ display: show ? 'block' : 'none' }} >Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section></div>
  )
}

export default Contact