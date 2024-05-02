import React, { useEffect, useState } from 'react'
import './SearchCompany.scss'
import axios from 'axios';
import publicAxios from '../../../config/pulic.axios';
import arrow from "../../../assets/images/main/fi_arrow-right.png";
import MapPin from "../../../assets/images/main/MapPin.png";
import BookmarkSimple from "../../../assets/images/main/BookmarkSimple.png";
const token = localStorage.getItem("token");
export default function SearchCompany() {
  const [allCompany, setAllCompany] = useState([]);
  
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
  const getAllCompanya = async () => {
    try {
      const res = await publicAxios.get("/api/v2/companies/getAll");
      console.log(res.data.data);
      setAllCompany(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllCompanya();
    handleGetDataCity();
  }, []);
  return (
    <>
    <div className='searchCompany__container'>
        <div className='searchCompany__container__header'>
            <div className='searchCompany__container__header__inputText inputS'>
            <span class="material-symbols-outlined">
            search
            </span>
            <input type="text" placeholder='Tìm kiếm công ty' />
            </div>
            <div className='searchCompany__container__header__selectCity inputS'>
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
            <div className='searchCompany__container__header__selectPositon inputS'>
            <span class="material-symbols-outlined">
            globe
            </span>
            <select name="" id="">
                <option value="">
                    Loại công ty
                </option>
                <option value="">Out-source</option>
                <option value="">Product</option>
            </select>
            </div>
            <div className='searchCompany__container__header__button inputS'>
                Tìm kiếm ngay
            </div>

        </div>
        <div className='searchCompany__container__body'>
        <div className="searchCompany__outStandingJob">
          <div className="searchCompany__outStandingJob--header">
            <span className="searchCompany__outStandingJob--header__title">
              Công ty phù hợp
            </span>
            <div
              className="searchCompany__outStandingJob--header__view"
              onClick={() => navigate("/candidate/job-list")}
            >
           
            </div>
          </div>
          <div className="main__outStandingCompany--listCompany">
            {token ? (
              <>
                {allCompany.map((item) => (
                  <div
                    className="main__outStandingCompany--listCompany__item"
                    key={item.id}
                    onClick={() =>
                      navigate(`/candidate/infor-companybycandidate/${item.id}`)
                    }
                  >
                    <div className="main__outStandingCompany--listCompany__item__top">
                      <div className="main__outStandingCompany--listCompany__item__top--logo">
                        <img src={item?.logo} alt="" />
                      </div>
                      <div className="main__outStandingCompany--listCompany__item__top--name">
                        <div className="main__outStandingCompany--listCompany__item__top--name--top">
                          <span>{item.name}</span>
                          <div className="main__outStandingCompany--listCompany__item__top--name--top__featured">
                            {item?.typeCompany_id.name}
                          </div>
                        </div>
                        <div className="main__outStandingCompany--listCompany__item__top--name--bottom">
                          <img src={MapPin} alt="" />
                          <p className="main__outStandingCompany--listCompany__item__top--name--bottom__location">
                            {item?.address_company[0].address}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="main__outStandingCompany--listCompany__item__bottom">
                      Xem thông tin
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <>
                {allCompany.map((item) => (
                  <div
                    className="main__outStandingCompany--listCompany__item"
                    key={item.id}
                    onClick={() => open()}
                  >
                    <div className="main__outStandingCompany--listCompany__item__top">
                      <div className="main__outStandingCompany--listCompany__item__top--logo">
                        <img src={item?.logo} alt="" />
                      </div>
                      <div className="main__outStandingCompany--listCompany__item__top--name">
                        <div className="main__outStandingCompany--listCompany__item__top--name--top">
                          <span>{item.name}</span>
                          <div className="main__outStandingCompany--listCompany__item__top--name--top__featured">
                            {item?.typeCompany_id.name}
                          </div>
                        </div>
                        <div className="main__outStandingCompany--listCompany__item__top--name--bottom">
                          <img src={MapPin} alt="" />
                          <p className="main__outStandingCompany--listCompany__item__top--name--bottom__location">
                            {item?.address_company[0].address}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="main__outStandingCompany--listCompany__item__bottom">
                      Xem thông tin công ty
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
        </div>

    </div>
    
    
    </>
  )
}
