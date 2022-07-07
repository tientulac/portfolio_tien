


import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router';
import PortfolioLayout from './pages/layouts/PortfolioLayout';
import AdminLayout from './pages/layouts/AdminLayout';

import Home from './pages/Home';
import { getInfo, putInfo } from './api/info';
import { getSkill, postSkill, putSkill, removeSkill } from './api/skill';
import { getResume, postResume, putResume, removeResume } from './api/resume';
import PrivateRoute from './components/PrivateRoute';
import Signin from './pages/Signin';
import Dashboard from './pages/admin/Dashboard';
import { getAllProjects, postProject, putProject, removeProject } from './api/project';
import AdminInfo from './pages/admin/Info/AdminInfo';
import AdminResume from './pages/admin/resume/AdminResume';
import AdminSkill from './pages/admin/skill/AdminSkill';
import AdminProject from './pages/admin/project/AdminProject';
import AdminContact from './pages/admin/contact/AdminContact';
import InfoEdit from './pages/admin/Info/InfoEdit';
import ResumeEdit from './pages/admin/resume/ResumeEdit';
import ResumeAdd from './pages/admin/resume/ResumeAdd';
import SkillAdd from './pages/admin/skill/SkillAdd';
import SkillEdit from './pages/admin/skill/SkillEdit';
import ProjectAdd from './pages/admin/project/ProjectAdd';
import ProjectEdit from './pages/admin/project/ProjectEdit';
import About from './pages/About';
import Resume from './pages/Resume';
import Skill from './pages/Skill';
import Portfolio from './pages/Portfolio';
import SoftSkillManager from './pages/admin/softskill/SoftSkillManager';
import SoftSkillAdd from './pages/admin/softskill/SoftSkillAdd';
import SoftSkillEdit from './pages/admin/softskill/SoftSkillEdit';
import { getSoftSkill, postSoftSkill, putSoftSkill, removeSoftSkill } from './api/softskill';
import SoftSkill from './pages/SoftSkill';

function App() {
  const [info, setInfo] = useState()
  const [infoSkill, setInfoSkill] = useState([]);
  const [infoSoftSkill, setInfoSoftSkill] = useState([]);
  const [infoResume, setInfoResume] = useState([]);
  const [infoProject, setInfoProject] = useState([]);


  // console.log(info);
  useEffect(() => {
    const getInfomation = async () => {
      const { data } = await getInfo();
      const info = data[0];
      // console.log(info);
      setInfo(info)
    }
    getInfomation();
    const getInfoSkill = async () => {
      const { data } = await getSkill();
      setInfoSkill(data);
    }
    getInfoSkill();
    const getInfoSoftSkill = async () => {
      const { data } = await getSoftSkill();
      setInfoSoftSkill(data);
    }
    getInfoSoftSkill();
    const getInfoResume = async () => {
      const { data } = await getResume();
      // console.log("Resume", data);
      setInfoResume(data);
    }
    getInfoResume();
    const getInfoProject = async () => {
      const { data } = await getAllProjects();
      // console.log("Resume", data);
      setInfoProject(data);
    }
    getInfoProject();
  }, [])


  //handler info
  const handleEditInfoApp = async (dataEditInfo) => {
    const { data } = await putInfo(dataEditInfo)
    // console.log("infoEditapp,", data);
    setInfo(data)
  }



  //handler resume add
  const handleRemoveResume = (id) => {
    removeResume(id);
    setInfoResume(infoResume.filter(item => item._id != id))
  }
  const handlerADDResume = async (dataResume) => {
    const { data } = await postResume(dataResume);
    setInfoResume([...infoResume, data])
  }
  const handlerEDITResume = async (dataResume) => {
    const { data } = await putResume(dataResume);
    setInfoResume(infoResume.map(val => val._id == data._id ? data : val));
  }


  //handler skill

  const handlerADDSkill = async (dataSkillAdd) => {
    // console.log(dataSkillAdd);
    const { data } = await postSkill(dataSkillAdd);
    setInfoSkill([...infoSkill, data])
  }
  const handlerEDITSkill = async (dataEdit) => {
    // console.log(dataEdit);
    const { data } = await putSkill(dataEdit);
    setInfoSkill(infoSkill.map(item => item._id == data._id ? data : item))
  }

  const handlerREMOVESkill = async (id) => {
    const { data } = await removeSkill(id);
    setInfoSkill(infoSkill.filter(item => item._id != id))
  }


  //handler project
  const handlerADDProject = async (datapost) => {
    // console.log(datapost);
    const { data } = await postProject(datapost);
    setInfoProject([...infoProject, data])
  }
  const handlerEDITProject = async (dataEdit) => {
    const { data } = await putProject(dataEdit);
    setInfoProject(infoProject.map(item => item._id = data._id ? data : item))
  }
  const handlerRemoveProject = async (id) => {
    const { data } = await removeProject(id);
    setInfoProject(infoProject.filter(item => item._id != id));
  }

  //handler soft skill 

  const handlerAddSoftSkillApp = async (datapost) => {
    // console.log(datapost);
    const { data } = await postSoftSkill(datapost);
    setInfoSoftSkill([...infoSoftSkill, data])
    console.log(infoSoftSkill);
  }

  const handlerRemoveSoftSkillApp = async (id) => {
    // console.log(datapost);
    const { data } = await removeSoftSkill(id);
    setInfoSoftSkill(infoSoftSkill.filter(item => item._id != id))
  }

  const handlerEditSoftSkillApp = async (dataEdit) => {
    const { data } = await putSoftSkill(dataEdit);
    setInfoSoftSkill(infoSoftSkill.map(item => item._id == data._id ? data : item))
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<PortfolioLayout info={info} />}>
          <Route index element={<Home info={info} skill={infoSkill} resume={infoResume} infoProject={infoProject} softSkill={infoSoftSkill} />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/about" element={<About info={info} />} />
          <Route path="/resume" element={<Resume resume={infoResume} />} />
          <Route path="/skill" element={<Skill skill={infoSkill} />} />
          <Route path="/softSkill" element={<SoftSkill softSkill={infoSoftSkill} />} />
          <Route path="/portfolio" element={<Portfolio infoProject={infoProject} />} />

        </Route>
        <Route path="/admin" element={<PrivateRoute><AdminLayout info={info} /></PrivateRoute>}>
          <Route index element={<Dashboard />} />

          <Route path="info" element={<AdminInfo info={info} />} />
          <Route path="info/:id/edit" element={<InfoEdit handleEditInfo={handleEditInfoApp} />} />

          <Route path="resume" element={<AdminResume resume={infoResume} handlerRemove={handleRemoveResume} />} />
          <Route path="resume/:id/edit" element={<ResumeEdit handlerEditResume={handlerEDITResume} />} />
          <Route path="resume/add" element={<ResumeAdd handlerAddResume={handlerADDResume} />} />

          <Route path="skill" element={<AdminSkill skill={infoSkill} pushIdRemoveSkill={handlerREMOVESkill} />} />
          <Route path="skill/add" element={<SkillAdd handlerAddSkill={handlerADDSkill} />} />
          <Route path="skill/:id/edit" element={<SkillEdit handlerEditSkill={handlerEDITSkill} />} />

          <Route path="soft-skill" element={<SoftSkillManager softSkill={infoSoftSkill} onpushIdRemoveSoftSkill={handlerRemoveSoftSkillApp} />} />
          <Route path="soft-skill/add" element={<SoftSkillAdd handlerAddSoftSkill={handlerAddSoftSkillApp} />} />
          <Route path="soft-skill/:id/edit" element={<SoftSkillEdit handlerEditSoftSkill={handlerEditSoftSkillApp} />} />


          <Route path="project" element={<AdminProject project={infoProject} pushIDRemoveProject={handlerRemoveProject} />} />
          <Route path="project/add" element={<ProjectAdd pushDataProjectAdd={handlerADDProject} />} />
          <Route path="project/:id/edit" element={<ProjectEdit pushDataProjectEdit={handlerEDITProject} />} />



          <Route path="contact" element={<AdminContact />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App


