import React from 'react'
import Header from '../../../../components/header/Header'
import FormSearch from '../../../../components/formSearch/FormSearch'
import Footer from '../../../../components/footer/Footer'
import './listCompany.scss'
import axios from 'axios'

export default function ListCompany() {
  const [ListCity, setListCity] = React.useState([]);
  const [ListCompany, setListCompany] = React.useState([
    {
      id:1,
      nameCompany:"Google",
      local:"HCM, TP. HCM",
      logo:"https://i.pinimg.com/736x/ce/92/9f/ce929f8db35bc80957623d42e8d8cf3c.jpg"
    }, {
      id:2,
      nameCompany:"Google",
      local:"HCM, TP. HCM",
      logo:"https://i.pinimg.com/736x/ce/92/9f/ce929f8db35bc80957623d42e8d8cf3c.jpg"
    },
    {
      id:3,
      nameCompany:"Google",
      local:"HCM, TP. HCM",
      logo:"https://i.pinimg.com/736x/ce/92/9f/ce929f8db35bc80957623d42e8d8cf3c.jpg"
    },
    {
      id:4,
      nameCompany:"Google",
      local:"HCM, TP. HCM",
      logo:"https://i.pinimg.com/736x/ce/92/9f/ce929f8db35bc80957623d42e8d8cf3c.jpg"
    },
    {
      id:5,
      nameCompany:"Google",
      local:"HCM, TP. HCM",
      logo:"https://i.pinimg.com/736x/ce/92/9f/ce929f8db35bc80957623d42e8d8cf3c.jpg"
    },
    {
      id:6,
      nameCompany:"Google",
      local:"HCM, TP. HCM",
      logo:"https://i.pinimg.com/736x/ce/92/9f/ce929f8db35bc80957623d42e8d8cf3c.jpg"
    },
    {
      id:7,
      nameCompany:"Google",
      local:"HCM, TP. HCM",
      logo:"https://i.pinimg.com/736x/ce/92/9f/ce929f8db35bc80957623d42e8d8cf3c.jpg"
    },
    {
      id:8,
      nameCompany:"Google",
      local:"HCM, TP. HCM",
      logo:"https://i.pinimg.com/736x/ce/92/9f/ce929f8db35bc80957623d42e8d8cf3c.jpg"
    },
    {
      id:9,
      nameCompany:"Google",
      local:"HCM, TP. HCM",
      logo:"https://i.pinimg.com/736x/ce/92/9f/ce929f8db35bc80957623d42e8d8cf3c.jpg"
    },
    {
      id:10,
      nameCompany:"Google",
      local:"HCM, TP. HCM",
      logo:"https://i.pinimg.com/736x/ce/92/9f/ce929f8db35bc80957623d42e8d8cf3c.jpg"
    },
     {
      id:11,
      nameCompany:"Google",
      local:"HCM, TP. HCM",
      logo:"https://i.pinimg.com/736x/ce/92/9f/ce929f8db35bc80957623d42e8d8cf3c.jpg"
    },
    {
      id:12,
      nameCompany:"Google",
      local:"HCM, TP. HCM",
      logo:"https://i.pinimg.com/736x/ce/92/9f/ce929f8db35bc80957623d42e8d8cf3c.jpg"
    },
    {
      id:13,
      nameCompany:"Google",
      local:"HCM, TP. HCM",
      logo:"https://i.pinimg.com/736x/ce/92/9f/ce929f8db35bc80957623d42e8d8cf3c.jpg"
    },
    {
      id:14,
      nameCompany:"Google",
      local:"HCM, TP. HCM",
      logo:"https://i.pinimg.com/736x/ce/92/9f/ce929f8db35bc80957623d42e8d8cf3c.jpg"
    },
    {
      id:15,
      nameCompany:"Google",
      local:"HCM, TP. HCM",
      logo:"https://i.pinimg.com/736x/ce/92/9f/ce929f8db35bc80957623d42e8d8cf3c.jpg"
    }

  ]);
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
        <Header></Header>
        <FormSearch></FormSearch>
        <div>
        <div className='user-ListJob-findJob'> 
      <div className='user-ListJob-findJob-input'>
      <i class="fa-solid fa-magnifying-glass"></i>
      <input type="text"  placeholder='Search by: Job tittle, Position, Keyword...'/>
      </div>
      <div style={{width:"1px", backgroundColor:"rgba(128, 128, 128, 0.314)"}}></div>
      <div className='user-ListJob-findJob-local'>
      <i class="fa-solid fa-location-dot"></i>
      <select>
      <option>--Chọn thành phố--</option>
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
        <div className='user-ListCompany'>
      {ListCompany.map((item,index) => {
        return (
          <div key={index} className='user-ListCompany-company'>
            <div className='user-ListCompany-company-info'>
              <img width={56} src={item.logo} alt="" />
              <div className='user-ListCompany-company-info-name'>
                <p className='user-ListCompany-company-info-nameCompany'>{item.nameCompany} <span className='feature'>Featured</span></p>
                <p><span><i class="fa-solid fa-location-dot"></i></span> {item.local}</p>
              </div>
            </div>
            <div className='user-ListCompany-company-open'>
              <p>Open Position(3)</p>
            </div>
          </div>
        )
        })}
        </div>
        </div>
        <Footer></Footer>
    </>
  )
}
