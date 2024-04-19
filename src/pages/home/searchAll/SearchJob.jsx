import React, { useEffect, useState } from 'react'
import './SearchJob.scss'
import axios from 'axios';
import publicAxios from '../../../config/pulic.axios';
import arrow from "../../../assets/images/main/fi_arrow-right.png";
import MapPin from "../../../assets/images/main/MapPin.png";
import BookmarkSimple from "../../../assets/images/main/BookmarkSimple.png";
export default function SearchJob() {
  const [allLiveJob, setLiveJob] = useState([]);

    // data city
    const [dataCity, setDataCity] = useState([]);
    // api thành phố
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
    setDataDistrict(data.data.results);
  };
  const getAllLiveJob = async () => {
    try {
      const res = await publicAxios.get("/api/v2/jobs/getLiveJobs");
      console.log(res.data.data);
      setLiveJob(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(allLiveJob)
  useEffect(() => {
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
            <input type="text" placeholder='Tìm kiếm việc làm' />
            </div>
            <div className='searchJob__container__header__selectCity inputS'>
            <span class="material-symbols-outlined">
            location_on
            </span>
            <select
                    onChange={handleCity}
                    name=""
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
            <select name="" id="">
                <option value="">
                    Mức lương
                </option>
                <option value="">dưới 10 triệu đồng</option>
                <option value="">từ 10 - 12 triệu</option>
                <option value=""> trên 15 triệu</option>
            </select>
            </div>
            <div className='searchJob__container__header__selectLevel inputS'>
            <span class="material-symbols-outlined">
            social_leaderboard
            </span>
            <select name="" id="">
                <option value="">
                    Tất cả kinh nghiệm 
                </option>
                <option value="">Fresher</option>
                <option value="">Junior</option>
                <option value="">Intern</option>
                <option value="">Dev</option>
            </select>
            </div>
            <div className='searchJob__container__header__button inputS'>
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
              <p>Xem thêm</p>
              <img src={arrow} alt="" />
            </div>
          </div>
          <div className="searchJob__outStandingJob--listJob">
            {allLiveJob.map((item) => (
              <div
                className="searchJob__outStandingJob--listJob__item"
                key={item.id}
              >
                <div className="searchJob__outStandingJob--listJob__item--top">
                  <span className="searchJob__outStandingJob--listJob__item--top__name">
                    {item.title}
                  </span>
                  <div className="searchJob__outStandingJob--listJob__item--top__salary">
                    <div className="searchJob__outStandingJob--listJob__item--top__salary__text">
                      <p>{item?.types_jobs[0].typejob.name}</p>
                    </div>
                    <span className="searchJob__outStandingJob--listJob__item--top__salary__price">
                      {item.salary}
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
