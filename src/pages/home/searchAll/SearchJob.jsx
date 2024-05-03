import React, { useEffect, useState } from 'react'
import './SearchJob.scss'
import axios from 'axios';
import publicAxios from '../../../config/pulic.axios';
import arrow from "../../../assets/images/main/fi_arrow-right.png";
import MapPin from "../../../assets/images/main/MapPin.png";
import BookmarkSimple from "../../../assets/images/main/BookmarkSimple.png";
import { notification } from 'antd';
import { useNavigate } from 'react-router';
export default function SearchJob() {
  const [allLiveJob, setLiveJob] = useState([]);
    // data city
  const [dataCity, setDataCity] = useState([]);
    // api thành phố
  const [salary, setSalary] = useState([]);
  const [leveljob, setLeveljob] = useState([]);
  const [jobSearch, setJobSearch] = useState({
    name: "",
    location: "",
    leveljob: "",
    salary: "",
  });
  const navigate = useNavigate();

  const handleGetDataCity = async () => {
    let data = await axios.get(`https://vapi.vnappmob.com/api/province/`);
    setDataCity(data.data.results);
  };
  const handleCity = async (e) => {
    let idCity = e.target.value;

    const nameCity = dataCity.find((item) => item.province_name === idCity);

    const numberCity = nameCity.province_id;
    let data = await axios.get(
      `https://vapi.vnappmob.com/api/province/district/${numberCity}`
    );
    setCity(nameCity.province_name);
  };
  const changeValue = (e) => {
    setJobSearch({ ...jobSearch, [e.target.name]: e.target.value });
  }
  const getAllLiveJob = async () => {
    try {
      const res = await publicAxios.get("/api/v2/jobs/getLiveJobs");
      console.log(res.data.data);
      setLiveJob(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const search = async () => {
    console.log(jobSearch)
    if(jobSearch.name === "" && jobSearch.location === "" && jobSearch.leveljob === "" && jobSearch.salary === ""){
      notification.warning({ message: "Please enter some data to search!" });
      const res = await publicAxios.get("/api/v2/jobs/getLiveJobs");
      // console.log(res.data.data);
      setLiveJob(res.data.data);
    }else{
      try {
      const result = await publicAxios.get(
        `/api/v2/jobs/searchJob?name=${jobSearch.name}&location=${jobSearch.location}&leveljob=${jobSearch.leveljob}&salary=${jobSearch.salary}`,
      )
      setLiveJob(result.data.data)
    } catch (error) {
      notification.error({ message: error.response.data.message });
    }
    }
    
  }

  // console.log(allLiveJob)
  useEffect(() => {
    const result = publicAxios.get("/api/v2/salary/getAll").then((res) => {
      setSalary(res.data);
    });
    const result1 = publicAxios.get("/api/v2/leveljob/getAll").then((res) => {
      setLeveljob(res.data);
    })
    getAllLiveJob();
    handleGetDataCity();
  }, []);
  return (
    <>
    <div className='searchJob__container'>
        <div className='searchJob__container__header'>
            <div className='searchJob__container__header__inputText inputS'>
            <span class="material-symbols-outlined">
            search
            </span>
            <input type="text" placeholder='Tìm kiếm việc làm' name='name' onChange={changeValue} />
            </div>
            <div className='searchJob__container__header__selectCity inputS'>
            <span class="material-symbols-outlined">
            location_on
            </span>
            <select
                    onChange={changeValue}
                    name="location"
                    id=""
                  >
                    <option value="">Chọn thành phố</option>
                    {dataCity.map((item, index) => (
                      <option key={index} value={item.code}>
                        {item.province_name}
                      </option>
                    ))}
            </select>
            </div>
            <div className='searchJob__container__header__selectSalary inputS'>
            <span class="material-symbols-outlined">
            monetization_on
            </span>
            <select name="salary" id="" onChange={changeValue}>
                <option value="">
                    Mức lương
                </option>
                {
                    salary?.map((item, index) => (
                        <option key={index} value={item?.id}>
                            {item?.name}
                        </option>
                    ))
                }
               
            </select>
            </div>
            <div className='searchJob__container__header__selectLevel inputS'>
            <span class="material-symbols-outlined">
            social_leaderboard
            </span>
            <select name="leveljob" id="" onChange={changeValue}>
                <option value="">
                    Tất cả kinh nghiệm 
                </option>
                {
                    leveljob?.map((item, index) => (
                        <option key={index} value={item?.id}>
                            {item?.name}
                        </option>
                    ))
                }
              
            </select>
            </div>
            <div className='searchJob__container__header__button inputS' onClick={search}>
                Tìm kiếm ngay
            </div>

        </div>

        <div className='searchJob__container__body'>
        <div className="searchJob__outStandingJob">
          <div className="searchJob__outStandingJob--header">
            <span className="searchJob__outStandingJob--header__title">
              Công việc phù hợp
            </span>
            <div
              className="searchJob__outStandingJob--header__view"
              onClick={() => navigate("/candidate/job-list")}
            >
            </div>
          </div>
          <div className="searchJob__outStandingJob--listJob">
            {allLiveJob.map((item) => (
              <div
                className="searchJob__outStandingJob--listJob__item"
                onClick={() => navigate(`/candidate/jobdetail/${item.id}`)}
                key={item?.id}
              >
                <div className="searchJob__outStandingJob--listJob__item--top">
                  <span className="searchJob__outStandingJob--listJob__item--top__name">
                    <p>
                    {item?.title}
                    </p>
                  </span>
                  <div className="searchJob__outStandingJob--listJob__item--top__salary">
                    <div className="searchJob__outStandingJob--listJob__item--top__salary__text">
                      <p>{item?.types_jobs[0].typejob.name}</p>
                    </div>
                    <div className="searchJob__outStandingJob--listJob__item--top__salary__text text2 ">
                      <p>{item?.levers_jobs[0]?.leveljob.name}</p>
                    </div>
                    <span className="searchJob__outStandingJob--listJob__item--top__salary__price">
                      {item?.salary_jobs[0].salary.name}
                    </span>
                  </div>
                </div>
                <div className="searchJob__outStandingJob--listJob__item--bottom">
                  <div className="searchJob__outStandingJob--listJob__item--bottom--left">
                    <div className="searchJob__outStandingJob--listJob__item--bottom__logo">
                      <img src={item?.company.logo} alt="" />
                    </div>
                    <div className="searchJob__outStandingJob--listJob__item--bottom__nameLogo">
                      <p className="searchJob__outStandingJob--listJob__item--bottom__nameLogo__text">
                        {item?.company.name}
                      </p>
                      <div className="searchJob__outStandingJob--listJob__item--bottom__nameLogo__location">
                        <img src={MapPin} alt="" />
                        <p>{item?.address_company.address}</p>
                      </div>
                    </div>
                  </div>
                  <div className="searchJob__outStandingJob--listJob__item--bottom__bookmark">
                    <img src={BookmarkSimple} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>

    </div>
    
    
    </>
  )
}
