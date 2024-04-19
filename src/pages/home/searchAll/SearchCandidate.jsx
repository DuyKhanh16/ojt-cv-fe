import React, { useEffect, useState } from 'react'
import './SearchCandidate.scss'
import axios from 'axios';
import publicAxios from '../../../config/pulic.axios';
import arrow from "../../../assets/images/main/fi_arrow-right.png";
import MapPin from "../../../assets/images/main/MapPin.png";
import BookmarkSimple from "../../../assets/images/main/BookmarkSimple.png";
export default function SearchCandidate() {
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
    <div className='searchCandidate__container'>
        <div className='searchCandidate__container__header'>
            <div className='searchCandidate__container__header__inputText inputS'>
            <span class="material-symbols-outlined">
            search
            </span>
            <input type="text" placeholder='Tìm kiếm ứng viên' />
            </div>
            <div className='searchCandidate__container__header__selectCity inputS'>
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
            <div className='searchCandidate__container__header__selectPositon inputS'>
            <span class="material-symbols-outlined">
            globe
            </span>
            <select name="" id="">
                <option value="">
                    Chọn chuyên môn
                </option>
                <option value="">Front-end</option>
                <option value="">Back-end</option>
                <option value=""> FullStack</option>
            </select>
            </div>
            <div className='searchCandidate__container__header__selectLevel inputS'>
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
            <div className='searchCandidate__container__header__button inputS'>
                Tìm kiếm ngay
            </div>

        </div>
        <div className='searchCandidate__container__body'>
        <div className="searchCandidate__outStandingJob">
          <div className="searchCandidate__outStandingJob--header">
            <span className="searchCandidate__outStandingJob--header__title">
              Ứng viên phù hợp
            </span>
            <div
              className="searchCandidate__outStandingJob--header__view"
              onClick={() => navigate("/candidate/job-list")}
            >
              <p>Xem thêm</p>
              <img src={arrow} alt="" />
            </div>
          </div>
          <div className="searchCandidate__outStandingJob--listJob">
            {allLiveJob.map((item) => (
              <div
                className="searchCandidate__outStandingJob--listJob__item"
                key={item.id}
              >
                <div className="searchCandidate__outStandingJob--listJob__item--top">
                  <span className="searchCandidate__outStandingJob--listJob__item--top__name">
                    {item.title}
                  </span>
                  <div className="searchCandidate__outStandingJob--listJob__item--top__salary">
                    <div className="searchCandidate__outStandingJob--listJob__item--top__salary__text">
                      <p>{item?.types_jobs[0].typejob.name}</p>
                    </div>
                    <span className="searchCandidate__outStandingJob--listJob__item--top__salary__price">
                      {item.salary}
                    </span>
                  </div>
                </div>
                <div className="searchCandidate__outStandingJob--listJob__item--bottom">
                  <div className="searchCandidate__outStandingJob--listJob__item--bottom--left">
                    <div className="searchCandidate__outStandingJob--listJob__item--bottom__logo">
                      <img src={item?.company.logo} alt="" />
                    </div>
                    <div className="searchCandidate__outStandingJob--listJob__item--bottom__nameLogo">
                      <p className="searchCandidate__outStandingJob--listJob__item--bottom__nameLogo__text">
                        {item?.company.name}
                      </p>
                      <div className="searchCandidate__outStandingJob--listJob__item--bottom__nameLogo__location">
                        <img src={MapPin} alt="" />
                        <p>{item?.address_company.address}</p>
                      </div>
                    </div>
                  </div>
                  <div className="searchCandidate__outStandingJob--listJob__item--bottom__bookmark">
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
