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
  const userExp = useSelector((state) => state.candidate.data);
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [start_at, setStart_at] = useState("");
  const [end_at, setEnd_at] = useState("");
  const [info, setInfo] = useState("");
  const [check, setCheck] = useState(false);
  const [user, setUser] = useState({
    company: company||exp?.company,
    position: position||exp?.position,
    start_at: start_at||exp?.start_at,
    end_at: end_at||exp?.end_at,
    info: info||exp?.info,
  });

  useEffect(() => {
    setUser({ ...user, candidate_id: userExp.id });
  }, [userExp]);

  const changeValue = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setCheck(true);
  };
  const updateExp = async () => {
    let start_at = new Date(user.start_at).getTime();
    let end_at = new Date(user.end_at).getTime();
    if (start_at > end_at) {
      notification.error({
        message: "Ngày bắt đầu phải nhỏ hơn ngày kết thúc",
      });
      return;
    }
    if (exp.status == "update") {
      try {
        const update = await candidateUpdateExperience(exp?.item.id, user);
        notification.success({
          message: "Cập nhật thông tin thành công",
        });
        setCheck(false);
        setUser({});
        close();
      } catch (error) {
        notification.error({
          message: error.response.message,
        });
      }
    } else if (exp.status == "create") {
      if (user.company == "" | user.position == "" | user.end_at == "" | user.start_at == "" | user.info == ""|user.company == undefined | user.position == undefined | user.end_at == undefined | user.start_at == undefined | user.info == undefined) {
        notification.warning({
          message: "Vui lòng điền đầy đủ thông tin",
        });
        return;
      }
      try {
        const create = await candidateCreateExperience(user);
        notification.success({
          message: create.message,
        });
        setUser({});
        setCheck(false);
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
                    value={check? user?.position : exp?.item.position}
                    type="text"
                    placeholder="Vị trí làm việc"
                    name="position"
                    onChange={(e) => changeValue(e)}
                  />
                </div>
                <div>
                  <p>Tên đơn vị công tác</p>
                  <input
                    value={check? user?.company : exp?.item.company}
                    type="text"
                    placeholder="Đơn vị công tác"
                    name="company"
                    onChange={(e) => changeValue(e)}
                  />
                </div>

                <div className="certificateTime">
                  <p>Thời gian làm việc</p>
                  <div className="timeSame">
                    <label htmlFor="">Start Date</label>
                    <input
                      value={check? user?.start_at : exp?.item.start_at}
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
                      value={check? user?.end_at : exp?.item.end_at}
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
                    value={check? user?.info : exp?.item.info}
                    name="info"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Chi tiết công việc"
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
                    placeholder="Vị trí làm việc"
                    name="position"
                    onChange={(e) => changeValue(e)}
                  />
                </div>
                <div>
                  <p>Tên đơn vị công tác</p>
                  <input
                    value={user?.company || ""}
                    type="text"
                    placeholder="Đơn vị công tác"
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
                    placeholder="Chi tiết công việc"
                    onChange={(e) => setUser({ ...user, info: e.target.value })}
                  ></textarea>
                </div>
              </div>
              <div className="updateInforUser__button">
                <button onClick={updateExp}>Thêm mới</button>
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
