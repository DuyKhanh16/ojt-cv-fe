import React from 'react'
import axios from "axios";
import filter from "../../../../assets/images/listJob/filter.png"
import './jobList.scss'
import Header from '../../../../components/header/Header';
import FormSearch from '../../../../components/formSearch/FormSearch';
import Footer from '../../../../components/footer/Footer';
import { useNavigate } from 'react-router';
import privateAxios from '../../../../config/private.axios';

export default function JobList() {
  const [ListCity, setListCity] = React.useState([]);
  const [ListJob, setListJob] = React.useState([]);

  window.scrollTo(0, 0);
  const navigate = useNavigate();
  const role = JSON.parse(localStorage.getItem("role"));
  async function getListCity() {
    try {
      const result = await axios.get("https://vapi.vnappmob.com/api/province/");
      setListCity(result.data.results);
    } catch (error) {
      console.log(error);
    }
  }
  const getAllJob = async () => {
    await privateAxios
    .get("api/v2/jobs/getLiveJobs")
    .then((res) => {
      setListJob(res.data.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }
  console.log(ListJob)
  React.useEffect(() => {
    getListCity();
    getAllJob();
    if(role !== 1) {
      navigate("/company");
    }
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
          return( <div key={job.id} className='user-ListJob-job' style={{cursor:"pointer"}} onClick={() => navigate(`/candidate/jobdetail/${job.id}`)}>
            <p className='user-ListJob-job-title'>{job.title}</p>
            <div className='user-ListJob-job-typeSalary'>
              <p className='typeJob'>{job?.types_jobs[0].typejob.name}</p> 
              <p>Lương: {job?.salary_jobs[0]?.salary?.name}</p>
            </div>
            <div className='user-ListJob-job-info'>
              <div className='user-ListJob-job-infoCompany'>
              <div className='user-ListJob-job-info-logo'>
              <img width={48} height={48} src={job?.company.logo} alt="logo"/>
              </div>
              <div className='user-ListJob-job-info-company'>
              <p >{job?.company.name}</p>
                <p className='user-ListJob-job-info-location'><i class="fa-solid fa-location-dot"></i> {job?.address_company.address}</p>
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
