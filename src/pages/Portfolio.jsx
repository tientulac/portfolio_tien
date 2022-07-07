import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Portfolio = ({ infoProject }) => {
  // console.log(infoProject);
  return (
    <div><section id="portfolio" className="portfolio section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Project</h2>
          {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
        </div>

        <div className="row">
          <div className="col-lg-12" >
            {infoProject?.map((val, ind) => (<div key={ind} className="resume-item">
              <h5>Project Name : {val.name}</h5>
              <span>Domains : </span> <a href={val.domains} target="_blank">{val.domains}</a><br />
              <span>Link Github : </span> <a href={val.github} target="_blank">{val.github}</a><br />

              {/* <p><em>Rochester Institute of Technology, Rochester, NY</em></p> */}
              <span>Technology : </span><span>{val.technology}</span>
              <hr />
            </div>
            ))}
            {/* <div className="resume-item">
              <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
              <h5>2010 - 2014</h5>
              <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
              <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
            </div> */}
          </div>
          {/* <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Senior graphic design specialist</h4>
              <h5>2019 - Present</h5>
              <p><em>Experion, New York, NY </em></p>
              <ul>
                <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Graphic design specialist</h4>
              <h5>2017 - 2018</h5>
              <p><em>Stepping Stone Advertising, New York, NY</em></p>
              <ul>
                <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
              </ul>
            </div>
          </div> */}
        </div>


      </div>
    </section></div>
  )
}

export default Portfolio