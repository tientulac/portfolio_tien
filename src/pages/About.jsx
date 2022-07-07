import React from 'react'

const About = ({ info }) => {
  return (
    <div>        <section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>About</h2>
          <p style={{ "fontSize": "24px", "fontWeight": "500" }}>Career goals</p>
          <p>{info?.careerGoals}</p>

        </div>

        <div className="row">
          <div className="col-lg-4" >
            <img src={info?.avatar} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" >
            <h3>Web Developer</h3>
            <p className="fst-italic">
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. */}
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>{info?.birthday}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>{info?.phone}</span></li>
                  {/* <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li> */}
                  {/* <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>New York, USA</span></li> */}
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Student</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>20</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>{info?.email}</span></li>
                  {/* <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li> */}
                </ul>
              </div>
            </div>
            {/* <p>
            Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
            Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
          </p> */}
          </div>
        </div>

      </div>
    </section></div>
  )
}

export default About