import React, { useEffect, useState } from 'react'

const Skill = ({ skill }) => {
  // console.log(skill);
  return (
    <div>
      <section id="skills" className="skills section-bg">
        <div className="container">

          <div className="section-title">
            <h2>Skills</h2>
            {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
          </div>

          <div className="col-lg-12 pt-4 pt-lg-0 content" >
            <div className="row">
              {skill?.map(item => (
              <div className="col-lg-6" key={item._id}>
                <h5>{item.skillName}</h5>
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>{item.skillProgress}</strong></li>
                </ul>
              </div>
              ))}
              {/* <div className="col-lg-6">
                <h3>Web framework</h3>
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Express</strong></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <h3>Library</h3>
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>ReactJs, Redux, Mongoose, Redux Toolkit</strong></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <h3>SCM</h3>
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Git, Github ,GitLab</strong></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <h3>Database</h3>
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>SQL Sever, MySQL, MongoDB</strong></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <h3>JavaScript Tool</h3>
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>ESLint ,Thunder Client, Postman</strong></li>
                </ul>
              </div> */}
            </div>
          </div>




          {/* </div> */}

          {/* <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

          <div className="progress">
            <span className="skill">PHP <i className="val">80%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">WordPress/CMS <i className="val">90%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">Photoshop <i className="val">55%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

        </div> */}

        </div >

      </section >
    </div >
  )
}

export default Skill