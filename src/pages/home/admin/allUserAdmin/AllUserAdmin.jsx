import React, { useEffect, useState } from "react";
import "./AllUserAdmin.scss";
import AdminSearch from "../../../../components/adminSearch/AdminSearch";
import { useNavigate } from "react-router";
import publicAxios from "../../../../config/pulic.axios";
export default function AllUserAdmin() {
  const [allCandidate, setAllCandidate] = useState([]);
  const navigate = useNavigate();
  

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
    getAllCandidate();
  }, []);
  return (
    <>
      <div className="allUserAdmin__container">
        <div className="allUserAdmin__header">
          <AdminSearch/>
        </div>
        <div className="allUserAdmin__content">
          <div className="allUserAdmin__content__headerTable">
            <div className="allUserAdmin__content__headerTable__stt column">
              <p>STT</p>
            </div>
            <div className="allUserAdmin__content__headerTable__name column">
              <p>Họ và tên</p>
            </div>
            <div className="allUserAdmin__content__headerTable__email column">
              <p>Email</p>
            </div>
            <div className="allUserAdmin__content__headerTable__active column">
              <p>Trạng thái</p>
            </div>
            <div className="allUserAdmin__content__headerTable__description column">
              <p>Thông tin chi tiết</p>
            </div>
          </div>
          <div className="allUserAdmin__content__bodyTable">
            {allCandidate.map((item, index) => {
              return (
                <div className="allUserAdmin__content__bodyTable__item" key={item.id}>
                <div className="allUserAdmin__content__bodyTable__item__stt column">
                  <p>{index+1}</p>
                </div>
                <div className="allUserAdmin__content__bodyTable__item__name column">
                  <p>{item.name}</p>
                </div>
                <div className="allUserAdmin__content__bodyTable__item__email column">
                  <p>{item.account_candidate_id.email}</p>
                </div>
                <div className="allUserAdmin__content__bodyTable__item__active column">
                  <label class="allUserAdmin__content__bodyTable__item__active__btn">
                    <input
                      type="checkbox"
                      id="toggle-input"
                      class="toggle-input"
                    />
                    <div class="toggle-bar">
                      <div class="toggle-spin"></div>
                    </div>
                    
                  </label>
                </div>
                <div className="allUserAdmin__content__bodyTable__item__description column">
                  <p>Xem</p>
                </div>
              </div>
              )
            })}
           
            
          </div>
        </div>
      </div>
    </>
  );
}
