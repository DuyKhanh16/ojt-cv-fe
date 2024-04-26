import React, { memo, useEffect, useState } from "react";
import "./formModal.scss";
import "./Certificate.scss";
import privateAxios from "../../../config/private.axios";
import { notification } from "antd";
import { useSelector } from "react-redux";
import {
  candidateCreateExperience,
  candidateUpdateExperience,
} from "../../../apis/candidates";
function Exp({ isOpenP, close, exp }) {
  const usera = useSelector((state) => state.candidate.data);
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser({ ...user, candidate_id: usera.id });
  }, [usera]);

  const changeValue = (e) => {
    console.log(user);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const updateExp = async () => {
    if (exp.status == "update") {
      try {
        const update = await candidateUpdateExperience(exp?.item.id, user);
        notification.success({
          message: update.message,
        });
        setUser({});
        close();
      } catch (error) {
        notification.error({
          message: error.response.message,
        });
      }
    } else if (exp.status == "creat") {
      try {
        const create = await candidateCreateExperience(user);
        notification.success({
          message: create.message,
        });
        setUser({});
        close();
      } catch (error) {
        notification.error({
          message: error.response.message,
        });
      }
    }
  };
  const closeModal = () => {
    setUser({});
    close();
  };
  return (
    <>
      {exp.status == "update" ? (
        <div style={{ display: isOpenP ? "block" : "none" }}>
          <div className="updateInforUser">
            <div className="updateInforUser__contain">
              <h4>Kinh nghiệm làm việc</h4>
              <div className="updateInforUser__table certificate">
                <div>
                  <p>Vị trí</p>
                  <input
                    value={user?.position || exp?.item.position}
                    type="text"
                    placeholder="ABCde"
                    name="position"
                    onChange={(e) => changeValue(e)}
                  />
                </div>
                <div>
                  <p>Tên đơn vị công tác</p>
                  <input
                    value={user?.company || exp?.item.company}
                    type="text"
                    placeholder="ABCde"
                    name="company"
                    onChange={(e) => changeValue(e)}
                  />
                </div>

                <div className="certificateTime">
                  <p>Thời gian làm việc</p>
                  <div className="timeSame">
                    <label htmlFor="">Start Date</label>
                    <input
                      value={user?.start_at || exp?.item.start_at}
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
                      value={user?.end_at || exp?.item.end_at}
                      type="date"
                      className="date"
                      name="end_at"
                      onChange={(e) => changeValue(e)}
                    />
                  </div>
                </div>

                <div>
                  <p>Mô tả chi tiết công việc</p>
                  <textarea
                    value={user?.info || exp?.item.info}
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
                <button onClick={updateExp}>Cập nhật</button>
                <button
                  className="updateInforUser__button__cancel"
                  onClick={closeModal}
                >
                  Hủy Bỏ
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ display: isOpenP ? "block" : "none" }}>
          <div className="updateInforUser">
            <div className="updateInforUser__contain">
              <h4>Kinh nghiệm làm việc</h4>
              <div className="updateInforUser__table certificate">
                <div>
                  <p>Vị trí</p>
                  <input
                    value={user?.position || ""}
                    type="text"
                    placeholder="ABCde"
                    name="position"
                    onChange={(e) => changeValue(e)}
                  />
                </div>
                <div>
                  <p>Tên đơn vị công tác</p>
                  <input
                    value={user?.company || ""}
                    type="text"
                    placeholder="ABCde"
                    name="company"
                    onChange={(e) => changeValue(e)}
                  />
                </div>

                <div className="certificateTime">
                  <p>Thời gian làm việc</p>
                  <div className="timeSame">
                    <label htmlFor="">Start Date</label>
                    <input
                      value={user?.start_at || ""}
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
                      value={user?.end_at || ""}
                      type="date"
                      className="date"
                      name="end_at"
                      onChange={(e) => changeValue(e)}
                    />
                  </div>
                </div>

                <div>
                  <p>Mô tả chi tiết công việc</p>
                  <textarea
                    value={user?.info || ""}
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
                <button onClick={updateExp}>Cập nhật</button>
                <button
                  className="updateInforUser__button__cancel"
                  onClick={closeModal}
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
export default memo(Exp);
