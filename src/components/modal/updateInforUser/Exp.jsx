import React, { memo, useEffect, useState } from "react";
import "./formModal.scss";
import "./Certificate.scss";
import privateAxios from "../../../config/private.axios";
import { notification } from "antd";
function Exp({ isOpenP, close, exp, userE }) {
  console.log(exp);
  const [user, setUser] = useState({
    // company:exp?.company,
    // position:exp?.position,
    // start_at:exp?.start_at,
    // end_at:exp?.end_at,
    // info:exp?.info,
  });
  console.log(user);
  useEffect(() => {
    const getUser = privateAxios.get("api/v2/candidates/getInfor");
    getUser.then((res) => {
      console.log("API response data:", res.data.data);
      setUser({ ...user, candidate_id: res.data.data.id });
    });
  }, []);

  const changeValue = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    const getUser = privateAxios.get("api/v2/candidates/getInfor");
    getUser.then((res) => {
      console.log("API response data:", res.data.data);
      setUser({ ...user, candidate_id: res.data.data.id });
    });
  }, []);
  const updateExp = async () => {
    if (exp.status == "update") {
      try {
        const update = await privateAxios.patch(
          `api/v2/candidate/updateExperience/${exp?.item.id}`,
          user
        );
        notification.success({
          message: update.data.message,
        });
        setUser({});
        close();
      } catch (error) {
        notification.error({
          message: error.response.data.message,
        });
      }
    } else if (exp.status == "creat") {
      try {
        const create = await privateAxios.post(
          `api/v2/candidate/createExperience`,
          user
        );
        notification.success({
          message: create.data.message,
        });
        setUser({});
        close();
      } catch (error) {
        notification.error({
          message: error.response.data.message,
        });
      }
    }
  };
  const closeModal = () => {
    setUser({
      position: "",
      company: "",
      start_at: "",
      end_at: "",
      info: "",
    });
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
