import React from 'react'
import axios from "axios";
import filter from "../../../../assets/images/listJob/filter.png"
import './jobList.scss'
import Header from '../../../../components/header/Header';
import FormSearch from '../../../../components/formSearch/FormSearch';
import Footer from '../../../../components/footer/Footer';
import { useNavigate } from 'react-router';

export default function JobList() {
  const [ListCity, setListCity] = React.useState([]);
  const [ListJob, setListJob] = React.useState([
    {
      Id:1,
      title:"Fresher Java Developer",
      type:"Full-time",
      salary:"2000$",
      location:"HCM, TP. HCM",
      logo:"https://cdn.pixabay.com/photo/2017/01/19/09/11/logo-google-1991840_1280.png",
      companyName:"Google"
    },
    {
      Id:2,
      title:"Fresher Java Developer",
      type:"Full-time",
      salary:"2000$",
      location:"HCM, TP. HCM",
      logo:"https://cdn.pixabay.com/photo/2017/01/19/09/11/logo-google-1991840_1280.png",
      companyName:"Google"
    },
    {
      Id:3,
      title:"Fresher Java Developer",
      type:"Full-time",
      salary:"2000$",
      location:"HCM, TP. HCM",
      logo:"https://cdn.pixabay.com/photo/2017/01/19/09/11/logo-google-1991840_1280.png",
      companyName:"Google"
    },
    {
      Id:4,
      title:"Fresher Java Developer",
      type:"Full-time",
      salary:"2000$",
      location:"HCM, TP. HCM",
      logo:"https://cdn.pixabay.com/photo/2017/01/19/09/11/logo-google-1991840_1280.png",
      companyName:"Google"
    },
    {
      Id:5,
      title:"Fresher Java Developer",
      type:"Full-time",
      salary:"2000$",
      location:"HCM, TP. HCM",
      logo:"https://cdn.pixabay.com/photo/2017/01/19/09/11/logo-google-1991840_1280.png",
      companyName:"Google"
    },
    {
      Id:6,
      title:"Fresher Java Developer",
      type:"Full-time",
      salary:"2000$",
      location:"HCM, TP. HCM",
      logo:"https://cdn.pixabay.com/photo/2017/01/19/09/11/logo-google-1991840_1280.png",
      companyName:"Google"
    },
    {
      Id:7,
      title:"Fresher Java Developer",
      type:"Full-time",
      salary:"2000$",
      location:"HCM, TP. HCM",
      logo:"https://cdn.pixabay.com/photo/2017/01/19/09/11/logo-google-1991840_1280.png",
      companyName:"Google"
    },
  ]);
  const navigate = useNavigate();
  async function getListCity() {
    try {
      const result = await axios.get("https://vapi.vnappmob.com/api/province/");
      setListCity(result.data.results);
    } catch (error) {
      console.log(error);
    }
  }
  React.useEffect(() => {
    getListCity();
  }, [])
  return (
    <>
    <div className='user-ListJob'>
      <div className='user-ListJob-title'>
        <p><span>Trang chủ /</span> Việc làm</p>
      </div>
      <div className='user-ListJob-findJob'> 
      <div className='user-ListJob-findJob-input'>
      <i class="fa-solid fa-magnifying-glass"></i>
      <input type="text"  placeholder='Search by: Job tittle, Position, Keyword...'/>
      </div>
      <div style={{width:"1px", backgroundColor:"rgba(128, 128, 128, 0.314)"}}></div>
      <div className='user-ListJob-findJob-local'>
      <i class="fa-solid fa-location-dot"></i>
      <select>
      <option>Chọn thành phố</option>
      {ListCity.map((city) => (
        <option key={city.province_id} value={city.province_id}>{city. province_name}</option>
      ))}
      </select>
      </div>
      <div className='user-ListJob-findJob-filter'> 
      <i class="fa-solid fa-arrow-up-short-wide"></i>
        <p>Filters</p>
      </div>
      <button className='user-ListJob-findJob-btn'>Find Job</button>
      </div>
      <div className='user-ListJob-jobRender'>
        {ListJob.map((job) => {
          return( <div key={job.Id} className='user-ListJob-job' onClick={() => navigate(`/candidate/jobDetail/${job.Id}`)}>
            <p className='user-ListJob-job-title'>{job.title}</p>
            <div className='user-ListJob-job-typeSalary'>
              <p className='typeJob'>{job.type}</p> 
              <p>Salay:{job.salary}</p>
            </div>
            <div className='user-ListJob-job-info'>
              <div className='user-ListJob-job-infoCompany'>
              <div className='user-ListJob-job-info-logo'>
              <img width={48} src={job.logo} alt="logo"/>
              </div>
              <div className='user-ListJob-job-info-company'>
              <p >{job.companyName}</p>
                <p className='user-ListJob-job-info-location'><i class="fa-solid fa-location-dot"></i> {job.location}</p>
              </div>
              </div>
              <i style={{marginTop:"20px"}} class="fa-solid fa-bookmark"></i>
            </div>
          </div>
          )
          })}
      </div>
    </div>
    </>
  )
}
