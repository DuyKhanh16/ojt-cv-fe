import React, { useEffect, useState } from "react";
import "./AdminChart.scss";
import Logo from "./../../../../assets/images/main/briefcase-duotone 1.png";
import company from "./../../../../assets/images/main/buildings-duotone 1.png";
import user from "./../../../../assets/images/main/users-duotone 1.png";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import publicAxios from "../../../../config/pulic.axios";
import { useNavigate } from "react-router";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);
export default function AdminChart() {
  window.scrollTo(0, 0);
  const [allCompany, setAllCompany] = useState([]);
  const [allLiveJob, setLiveJob] = useState([]);
  const [allNewJob, setNewJob] = useState([]);
  const [allCandidate, setAllCandidate] = useState([]);
  const [data2,setData] = useState()
  const [listjobfail, setListjobfail] = useState([]);
  const [canes, setCanes] = useState();
  const [apply, setApply] = useState();
  const [view, setView] = useState();
  const role = JSON.parse(localStorage.getItem("role"));
  const token1 = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate();

  const getAllCompany = async () => {
    try {
      const res = await publicAxios.get("/api/v2/companies/getAll");
      setAllCompany(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getchart = async () => {
    try {
      const res = await publicAxios.get("/api/v2/jobs/admingetchart");
      // console.log(res.data.data)
      setData(res.data.data)
      setCanes(res.data.data[0])
      setApply(res.data.data[1])
      setView(res.data.data[2])
    } catch (error) {
      console.log(error)
    }
  }
 
  const getAllLiveJob = async () => {
    try {
      const res = await publicAxios.get("/api/v2/jobs/getLiveJobs");
      setLiveJob(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getAllNewJob = async () => {
    try {
      const res = await publicAxios.get("/api/v2/jobs/getNewJobs");
      setListjobfail(res.data.all.result2)
      setNewJob(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(data2)
  const getAllCandidate = async () => {
    try {
      const res = await publicAxios.get("/api/v2/candidates/getAll");
      setAllCandidate(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    getchart();
    getAllCompany();
    getAllLiveJob();
    getAllNewJob();
    getAllCandidate();
    if(!token1){
      navigate("/login");
    }
    if(role == 1){
      navigate("/candidate");
    }
    if(role == 2){
      navigate("/company");
    }
  }, []);


  // data lấy dữ liệu về hiển thị
  const data1 = {
    labels: ["Candidate", "Company", "Jobs"],
    datasets: [
      {
        label: "Tổng ",
        data: [allCandidate.length, allCompany.length, allNewJob.length + listjobfail.length],
        backgroundColor: "#E80505",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Không Hoạt Động",
        data: [0, 0, listjobfail.length],
        backgroundColor: "#4C83FF",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
     
    ],
  };
  //    css cho biểu đồ 1
  const options1 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chi tiết số lượng Candidate, Company, Job hiện nay",
        font: {
          size: 20,
        },
        padding: {
          top: 10,
          bottom: 30,
        },
      },
    },
  };

  //   phân biểu đồ 2
  const data = {
    labels: ["Chờ phỏng vấn", "Cv không phù hợp", "Chờ công ty xem Cv"],
    datasets: [
      {
        label: "học viên",
        data: [canes?.count, apply?.count, view?.count],
        backgroundColor: ["#FBAB7E", "#85FFBD", "#F4D03F"],

        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Tổng số học viên",
        font: {
          size: 20,
        },
        padding: {
          top: 10,
          bottom: 30,
        },
      },
    },
  };

  return (
    <div className="adminChart">
      {/* content */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          paddingBottom: "20px",
        }}
        className="adminChart__header"
      >
        <p>Dashboard</p>
      </div>
      <div className="adminChart__content">
        <div className="adminChart__content__Candicates">
          <div className="adminChart__content__Candicates__img">
            <img src={Logo}></img>
          </div>
          <div className="adminChart__content__Candicates__text">
            <strong>{allLiveJob.length}</strong>
            <p>Live Jobs</p>
          </div>
        </div>
        <div className="adminChart__content__Candicates">
          <div className="adminChart__content__Candicates__img">
            <img style={{ backgroundColor: "#BC2228" }} src={company}></img>
          </div>
          <div className="adminChart__content__Candicates__text">
            <strong>{allCompany.length}</strong>
            <p>Company</p>
          </div>
        </div>
        <div className="adminChart__content__Candicates">
          <div className="adminChart__content__Candicates__img">
            <img src={user}></img>
          </div>
          <div className="adminChart__content__Candicates__text">
            <strong>{allCandidate.length}</strong>
            <p>Candicates</p>
          </div>
        </div>{" "}
        <div className="adminChart__content__Candicates">
          <div className="adminChart__content__Candicates__img">
            <img src={Logo}></img>
          </div>
          <div className="adminChart__content__Candicates__text">
            <strong>{allNewJob.length}</strong>
            <p>New Jobs</p>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "60px",
          borderTop: "3px solid white",
          marginTop: "20px",
        }}
        className="adminChart__chart-bar"
      >
        <div
          style={{
            width: "60%",
            height: "510px",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          {" "}
          <Bar options={options1} data={data1} />
        </div>
        <div
          style={{
            width: "35%",
            backgroundColor: "white",
            height: "100%",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          {" "}
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
}
