import React, { memo, useEffect, useState } from "react";
import "./formModal.scss";
import "./Certificate.scss";
import privateAxios from "../../../config/private.axios";
import { notification } from "antd";
import { useSelector } from "react-redux";
import {
  candidateCreateEducation,
  candidateUpdateEducation,
} from "../../../apis/candidates";

function Education({ isOpen, close, edu }) {
  const userEdu = useSelector((state) => state.candidate.data);
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser({ ...user, candidate_id: userEdu.id });
  }, [userEdu]);

  const changeValue = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const updateEducatrion = async () => {
    if (edu.status == "update") {
      try {
        const update = await candidateUpdateEducation(edu.item.id, user);
        notification.success({
          message: update.message,
        });
        setUser({});
      } catch (error) {
        notification.error({
          message: error.response.message,
        });
      }
      close();
    } else if (edu.status == "create") {
      try {
        const create = await candidateCreateEducation(user);
        notification.success({
          message: create.message,
        });
        setUser({});
      } catch (error) {
        notification.error({
          message: error.response.message,
        });
      }
    }
    close();
  };

  // update
  // tim kiem edu theo id

  return (
    <>
      {edu.status == "update" ? (
        <div style={{ display: isOpen ? "block" : "none" }}>
          <div className="updateInforUser">
            <div className="updateInforUser__contain">
              <h4>Học Vấn</h4>
              <div className="updateInforUser__table certificate">
                <div>
                  <p>Trường</p>
                  <input
                    value={user.name_education || edu.item?.name_education}
                    type="text"
                    placeholder="ABCde"
                    name="name_education"
                    onChange={(e) => changeValue(e)}
                  />
                </div>
                <div>
                  <p>Ngành Học</p>
                  <input
                    value={user.major || edu.item?.major}
                    type="text"
                    placeholder="ABCde"
                    name="major"
                    onChange={(e) => changeValue(e)}
                  />
                </div>

                <div className="certificateTime">
                  <p>Thời gian học tập</p>
                  <div className="timeSame">
                    <label htmlFor="">Start Date</label>
                    <input
                      value={user.start_at || edu.item?.start_at}
                      type="date"
                      className="date"
                      name="start_at"
                      onChange={(e) => changeValue(e)}
                    />
                  </div>
                  <p>To</p>
                  <div className="timeSame">
                    <label htmlFor="">End Date</label>
                    <input
                      value={user.end_at || edu.item?.end_at}
                      type="date"
                      className="date"
                      name="end_at"
                      onChange={(e) => changeValue(e)}
                    />
                  </div>
                </div>

                <div>
                  <p>Thông tin thêm</p>
                  <textarea
                    value={user.info || edu.item?.info}
                    name="info"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="ABCde"
                    onChange={(e) => setUser({ ...user, info: e.target.value })}
                  ></textarea>
                </div>
              </div>
              <div className="updateInforUser__button">
                <button onClick={updateEducatrion}>Cập nhật</button>
                <button
                  className="updateInforUser__button__cancel"
                  onClick={() => close()}
                >
                  Hủy Bỏ
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ display: isOpen ? "block" : "none" }}>
          <div className="updateInforUser">
            <div className="updateInforUser__contain">
              <h4>Học Vấn</h4>
              <div className="updateInforUser__table certificate">
                <div>
                  <p>Trường</p>
                  <input
                    value={user.name_education || ""}
                    type="text"
                    placeholder="ABCde"
                    name="name_education"
                    onChange={(e) => changeValue(e)}
                  />
                </div>
                <div>
                  <p>Ngành Học</p>
                  <input
                    value={user.major || ""}
                    type="text"
                    placeholder="ABCde"
                    name="major"
                    onChange={(e) => changeValue(e)}
                  />
                </div>

                <div className="certificateTime">
                  <p>Thời gian học tập</p>
                  <div className="timeSame">
                    <label htmlFor="">Start Date</label>
                    <input
                      value={user.start_at || ""}
                      type="date"
                      className="date"
                      name="start_at"
                      onChange={(e) => changeValue(e)}
                    />
                  </div>
                  <p>To</p>
                  <div className="timeSame">
                    <label htmlFor="">End Date</label>
                    <input
                      value={user.end_at || ""}
                      type="date"
                      className="date"
                      name="end_at"
                      onChange={(e) => changeValue(e)}
                    />
                  </div>
                </div>

                <div>
                  <p>Thông tin thêm</p>
                  <textarea
                    value={user.info || ""}
                    name="info"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="ABCde"
                    onChange={(e) => setUser({ ...user, info: e.target.value })}
                  ></textarea>
                </div>
              </div>
              <div className="updateInforUser__button">
                <button onClick={updateEducatrion}>Thêm mới</button>
                <button
                  className="updateInforUser__button__cancel"
                  onClick={() => close()}
                >
                  Hủy Bỏ
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default memo(Education);
