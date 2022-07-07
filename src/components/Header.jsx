import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ info }) => {
    const handlerActive = (a) => {
        var btnContainer = document.getElementById("navbar");
        var btns = btnContainer.getElementsByClassName("nav-link");

        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function () {
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            });
        }
    }
    return (
        <div> <header id="header">
            <div className="d-flex flex-column">

                <div className="profile">
                    <img src={info?.avatar} alt="" className="img-fluid rounded-circle" />
                    <h1 className="text-light"><a href="index.html">{info?.name}</a></h1>
                    <div className="social-links mt-3 text-center">
                        <a target="_blank" href={info?.email} className="twitter"><i className="bi bi-envelope"></i></a>
                        <a target="_blank" href={info?.github} className="google-plus"><i className="bx bxl-github"></i></a>
                        <a target="_blank" href={info?.facebook} className="facebook"><i className="bx bxl-facebook"></i></a>
                        <a target="_blank" href={info?.instagram} className="instagram"><i className="bx bxl-instagram"></i></a>
                    </div>
                </div>

                <nav id="navbar" className="nav-menu navbar">
                    <ul>
                        <li><a onClick={() => { handlerActive() }} href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
                        <li><a onClick={() => { handlerActive() }} href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
                        <li><a onClick={() => { handlerActive() }} href="#skills" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Skills</span></a></li>
                        <li><a onClick={() => { handlerActive() }} href="#softskill" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Soft Skill</span></a></li>
                        <li><a onClick={() => { handlerActive() }} href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
                        <li><a onClick={() => { handlerActive() }} href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Project</span></a></li>
                        <li><a onClick={() => { handlerActive() }} href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
                    </ul>
                </nav>
            </div>
        </header></div>
    )
}

export default Header