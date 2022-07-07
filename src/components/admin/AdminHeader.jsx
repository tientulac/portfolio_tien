import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ info }) => {
    return (
        <div> <header id="header">
            <div className="d-flex flex-column">

                <div className="profile">
                    <img src={info?.avatar} alt="" className="img-fluid rounded-circle" />
                    <h1 className="text-light"><a href="index.html">admin</a></h1>
                    <div className="social-links mt-3 text-center">
                        <a target="_blank" className="twitter"><i className="bi bi-envelope"></i></a>
                        <a target="_blank" className="google-plus"><i className="bx bxl-github"></i></a>
                        <a target="_blank" className="facebook"><i className="bx bxl-facebook"></i></a>
                        <a target="_blank" className="instagram"><i className="bx bxl-instagram"></i></a>
                    </div>
                </div>

                <nav id="navbar" className="nav-menu navbar">
                    <ul>
                        <li><Link to="info" className="nav-link scrollto"> <span>Info</span></Link></li>
                        <li><Link to="resume" className="nav-link scrollto"> <span>Resume</span></Link></li>
                        <li><Link to="project" className="nav-link scrollto"> <span>Project</span></Link></li>
                        <li><Link to="skill" className="nav-link scrollto"> <span>Skill</span></Link></li>
                        <li><Link to="soft-skill" className="nav-link scrollto"> <span>Soft Skill</span></Link></li>

                        <li><Link to="contact" className="nav-link scrollto"> <span>Contact</span></Link></li>
                    </ul>
                </nav>
            </div>
        </header></div>
    )
}

export default Header