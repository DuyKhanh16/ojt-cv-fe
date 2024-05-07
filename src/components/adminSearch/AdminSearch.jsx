import React from "react";
import "./AdminSearch.scss";
import logo from "../../assets/images/fromsearch/Vector.png";
import { Button } from "antd";
import { useState } from "react";
import publicAxios from "../../config/pulic.axios";
export default function AdminSearch() {
  const [search, setSearch] = useState();
  const [optioncheck, setOptioncheck] = useState();
  const [listJobSearch, setListJobSearch] = useState([]);
  const searchjob = async () => {
    try {
      const result = await publicAxios.get(
        `/api/v2/jobs/search-job-admin?search=${search}`
      )
      setListJobSearch(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(listJobSearch);
  console.log(optioncheck);
  return (
    <div className="admin__search">
      <div className="admin__search--content">
        <div className="admin__search--input">
          <div className="admin__search--input--boder">
           
            <div className="admin__search--input__iconsearch">
                <img src="./src/assets/images/fromsearch/fi_search.png" alt="" />
                <div className="admin__search--input--input">
                <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search tên công việc..." />
            </div>
            <div>
              <select onChange={(e)=>setOptioncheck(e.target.value)} style={{ fontSize:"14px", height:"40px",  border:"1px solid #E7F0FA", borderRadius:"5px"}} >
                <option defaultValue={"job"}>Tên công việc</option>
                <option value="company">Tên công ty</option>
              </select>
            </div>
            <div >
             <Button onClick={searchjob} style={{backgroundColor:"red", color:"white"}}>Tìm kiếm</Button>
            </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}
