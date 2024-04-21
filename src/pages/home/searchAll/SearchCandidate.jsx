import React, { useEffect, useState } from 'react'
import './SearchCandidate.scss'
import axios from 'axios';
import publicAxios from '../../../config/pulic.axios';
import arrow from "../../../assets/images/main/fi_arrow-right.png";
import MapPin from "../../../assets/images/main/MapPin.png";
import BookmarkSimple from "../../../assets/images/main/BookmarkSimple.png";
import Search from 'antd/es/transfer/search';
import { notification } from 'antd';
export default function SearchCandidate() {
  const [allCandidate, setAllCandidate] = useState([]);
  const [levelCandidate, setLevelCandidate] = useState([]);
  const [candidateSearch, setCandidateSearch] = useState({
    name: "",
    location: "",
    position: "",
    level: "",
  })
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
  const getAllCandidate = async () => {
    try {
      const res = await publicAxios.get("/api/v2/candidates/getAll");
      console.log(res.data.data);
      setAllCandidate(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(allCandidate)
  useEffect(() => {
    const result1 = publicAxios.get("/api/v2/leveljob/getAll").then((res) => {
      console.log(res.data);
      setLevelCandidate(res.data);
    })
    getAllCandidate();
    handleGetDataCity();
  }, []);
  const changeValue = (e) => {
    setCandidateSearch({ ...candidateSearch, [e.target.name]: e.target.value });
  }
  const Search = async () => {
    if(candidateSearch.name === "" && candidateSearch.location === "" && candidateSearch.position === "" && candidateSearch.level === ""){
      notification.warning({ message: "Please enter some data to search!" });
      const res = await publicAxios.get("/api/v2/candidates/getAll");
      setAllCandidate(res.data.data);
    }else{
      try {
        const result = await publicAxios.get(
          `/api/v2/candidates/searchCandidate?name=${candidateSearch.name}&location=${candidateSearch.location}&position=${candidateSearch.position}&level=${candidateSearch.level}`
        )
        setAllCandidate(result.data.data)
      } catch (error) {
        console.log(error.response.data.message)
      }
    }
   
  }
  return (
    <>
    <div className='searchCandidate__container'>
        <div className='searchCandidate__container__header'>
            <div className='searchCandidate__container__header__inputText inputS'>
            <span class="material-symbols-outlined">
            search
            </span>
            <input type="text" placeholder='Tìm kiếm ứng viên' name='name' onChange={changeValue}/>
            </div>
            <div className='searchCandidate__container__header__selectCity inputS'>
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
            
            <div className='searchCandidate__container__header__inputText inputS'>
            <span class="material-symbols-outlined">
            book
            </span>
            <input type="text" placeholder='chuyên môn' name='position' onChange={changeValue}/>
            </div>

            {/* <div className='searchCandidate__container__header__selectLevel inputS'>
            <span class="material-symbols-outlined">
            social_leaderboard
            </span>
            <select name="level" id="" onChange={changeValue}>
                <option value="">
                    Tất cả kinh nghiệm 
                </option>
                {
                  levelCandidate?.map((item, index) => {
                    return<option key={index} value={item?.id}>{item?.name}</option>
                  })
                }
            </select>
            </div> */}
            <div className='searchCandidate__container__header__button inputS' onClick={Search}>
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
             <div className="mainBusiness__outStandingCandidate--listCandidate">
             {allCandidate.map((item) => (
             <div
               className="mainBusiness__outStandingCandidate--listCandidate__item"
               onClick={()=> navigate(`candidate-outstanding-bybussiness/${item.id}`)}
               key={item.id}
             >
               <div className="mainBusiness__outStandingCandidate--listCandidate__item__information">
                 <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left">
                   <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__avatar">
                     <img src={item?.avatar} alt="" />
                   </div>
                   <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name">
                     <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name--top">
                       {item.name}
                     </div>
                     <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name--bottom">
                       <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name--bottom__left">
                         {item?.position}
                       </div>
                       <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--left__name--bottom__right">
                         Fresher
                       </div>
                     </div>
                   </div>
                 </div>
                 <div className="mainBusiness__outStandingCandidate--listCandidate__item__information--right">
                   <img src={arrow} alt="" />
                 </div>
               </div>
               <div className="mainBusiness__outStandingCandidate--listCandidate__item__technical">
                 <div className="mainBusiness__outStandingCandidate--listCandidate__item__technical__title">
                   Technical in use:
                 </div>
                 <div className="mainBusiness__outStandingCandidate--listCandidate__item__technical__list">
                  {
                    item?.skills_candidate?.map((item, index) => {
                      return <div className="mainBusiness__outStandingCandidate--listCandidate__item__technical__list__item" key={index}>
                        {item.name}
                      </div>
                    })
                  }
                 </div>
               </div>
               <div className="mainBusiness__outStandingCandidate--listCandidate__item__language">
                 <div className="mainBusiness__outStandingCandidate--listCandidate__item__language__title">
                   Foreign Language:
                 </div>
                 <div className="mainBusiness__outStandingCandidate--listCandidate__item__language__list">
                   <div className="mainBusiness__outStandingCandidate--listCandidate__item__language__list__item">
                     {item?.certificate_candidate[0].name}
                     {item?.certificate_candidate[0].info}
                   </div>
                 </div>
               </div>
               <div className="mainBusiness__outStandingCandidate--listCandidate__item__local">
                 <img src={MapPin} alt="" />
                 <p>{item?.address}</p>
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
