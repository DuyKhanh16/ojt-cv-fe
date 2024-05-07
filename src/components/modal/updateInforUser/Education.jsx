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
  const [major, setMajor] = useState("");
  const [info, setInfo] = useState("");
  const [name_education, setName_education] = useState("");
  const [end_at, setEnd_at] = useState("");
  const [start_at, setStart_at] = useState("");
  const [check, setCheck] = useState(false);
  console.log(edu)
  const [user, setUser] = useState({
    major: major || edu?.item?.major,
    info: info || edu?.item?.info,
    name_education: name_education || edu?.item?.name_education,
    end_at: end_at || edu?.item?.end_at,
    start_at: start_at || edu?.item?.start_at,
  });

  useEffect(() => {
    setUser({ ...user, candidate_id: userEdu.id });
  }, [userEdu]);
  const changeValue = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setCheck(true);
  };
  
  const updateEducatrion = async () => {
    let start_at = new Date(user.start_at).getTime();
    let end_at = new Date(user.end_at).getTime();
    if (start_at > end_at) {
      notification.error({
        message: "Ngày bắt đầu phải nhỏ hơn ngày kết thúc",
      });
      return;
    }
    if (edu.status == "update") {
      if(user.name_education == "" | user.major == "" | user.end_at == "" | user.start_at == "" | user.info == ""){
        notification.warning({
          message: "Vui lòng điền đầy đủ thông tin",
        });
        return;
      }
      try {
        const update = await candidateUpdateEducation(edu.item.id, user);
        notification.success({
          message: "Cập nhật thành công",
        });
        setCheck(false);
        // setUser({
        //   major: "",
        //   info: "",
        //   name_education: "",
        //   end_at: "",
        //   start_at: "",
        // });
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
        setUser({
          major: "",
          info: "",
          name_education: "",
          end_at: "",
          start_at: "",
        });
        setCheck(false);
      } catch (error) {
        notification.error({
          message: error.response.message,
        });
      }
    }
    close();
  };


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
                    value={check? user.name_education : edu.item?.name_education}
                    type="text"
                    placeholder="Tên trường"
                    name="name_education"
                    onChange={(e) => changeValue(e)}
                  />
                </div>
                <div>
                  <p>Ngành Học</p>
                  <input
                    value={check ? user.major : edu.item?.major}
                    type="text"
                    placeholder="Ngành học của bạn"
                    name="major"
                    onChange={(e) => changeValue(e)}
                  />
                </div>

                <div className="certificateTime">
                  <p>Thời gian học tập</p>
                  <div className="timeSame">
                    <label htmlFor="">Start Date</label>
                    <input
                      value={check ? user.start_at : edu.item?.start_at}
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
                      value={check ? user.end_at : edu.item?.end_at}
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
                    value={check ? user.info : edu.item?.info}
                    name="info"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Thông tin chi tiết"
                    onChange={(e) => changeValue(e)}
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
                    type="text"
                    placeholder="Tên trường"
                    name="name_education"
                    value={user.name_education || ""}
                    onChange={(e) => changeValue(e)}
                  />
                </div>
                <div>
                  <p>Ngành Học</p>
                  <input
                    value={user.major || ""}
                    type="text"
                    placeholder="Ngành học"
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
                    placeholder="Thông tin chi tiết"
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
