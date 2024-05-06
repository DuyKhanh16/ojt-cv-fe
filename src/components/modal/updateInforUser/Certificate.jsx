import React, { memo, useEffect, useState } from "react";
import "./formModal.scss";
import "./Certificate.scss";
import privateAxios from "../../../config/private.axios";
import { notification } from "antd";
import { useSelector } from "react-redux";
import {
  candidateCreateCertificate,
  candidateUpdateCertificate,
} from "../../../apis/candidates";

function Certificate({ isOpen, close, certificate }) {
  console.log(certificate)
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [info, setInfo] = useState("");
  const [start_at, setStart_at] = useState("");
  const [end_at, setEnd_at] = useState("");
  const [check, setCheck] = useState(false);

  const [user, setUser] = useState({
    name: name || certificate?.item?.name,
    organization: organization || certificate?.item?.organization,
    info: info || certificate?.item?.info,
    start_at: start_at || certificate?.item?.start_at,
    end_at: end_at || certificate?.item?.end_at,
  });

  const userCerti = useSelector((state) => state.candidate.data);

  useEffect(() => {
    setUser({ ...user, candidate_id: userCerti.id });
  }, [userCerti]);

  const changeValue = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setCheck(true);
  };

  const updateCertificate = async () => {
    let start_at = new Date(user.start_at).getTime();
    let end_at = new Date(user.end_at).getTime();
    if (start_at > end_at) {
      notification.error({
        message: "Ngày bắt đầu phải nhỏ hơn ngày kết thúc",
      });
      return;
    }
    if (certificate.status == "update") {
      try {
        const update = await candidateUpdateCertificate(
          certificate.item.id,
          user
        );
        notification.success({
          message: "Cập nhật thông tin thành công",
        });
        setUser({
          name: "",
          organization: "",
          info: "",
          start_at: "",
          end_at: "",
        });
        setCheck(false);
        close();
      } catch (error) {
        notification.error({
          message: error.response.message,
        });
      }
    } else if (certificate.status == "create") {
      try {
        const create = await candidateCreateCertificate(user);
        notification.success({
          message: create.message,
        });
        close();
        setCheck(false);
        setUser({
          name: "",
          organization: "",
          info: "",
          start_at: "",
          end_at: "",
        })
      } catch (error) {
        notification.error({
          message: error.response.message,
        });
      }
    }
  };
  return (
    <>
      {certificate?.status === "update" ? (
        <div style={{ display: isOpen ? "block" : "none" }}>
          <div className="updateInforUser">
            <div className="updateInforUser__contain">
              <h4>Chứng Chỉ</h4>
              <div className="updateInforUser__table certificate">
                <div>
                  <p>Tên chứng chi</p>
                  <input
                    value={check? user?.name : certificate?.item.name}
                    type="text"
                    placeholder="Tên chứng chỉ"
                    name="name"
                    onChange={(e) => changeValue(e)}
                  />
                </div>
                <div>
                  <p>Tổ chức</p>
                  <input
                    value={check? user?.organization : certificate?.item.organization}
                    type="text"
                    placeholder="Tổ chức"
                    name="organization"
                    onChange={(e) => changeValue(e)}
                  />
                </div>

                <div className="certificateTime">
                  <p>Thời gian</p>
                  <div className="timeSame">
                    <label htmlFor="">Start Date</label>
                    <input
                      value={check? user?.start_at : certificate?.item.start_at}
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
                      value={check? user?.end_at : certificate?.item.end_at}
                      type="date"
                      className="date"
                      name="end_at"
                      onChange={(e) => changeValue(e)}
                    />
                  </div>
                </div>

                <div>
                  <p>Mô tả thêm</p>
                  <textarea
                    value={check? user?.info : certificate?.item.info}
                    name="info"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Mô tả thêm"
                    onChange={(e)=> changeValue(e)}
                  ></textarea>
                </div>
              </div>
              <div className="updateInforUser__button">
                <button onClick={updateCertificate}>Cập nhật</button>
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
              <h4>Chứng Chỉ</h4>
              <div className="updateInforUser__table certificate">
                <div>
                  <p>Tên chứng chi</p>
                  <input
                    value={user?.name || ""}
                    type="text"
                    placeholder="Tên chứng chỉ"
                    name="name"
                    onChange={(e) => changeValue(e)}
                  />
                </div>
                <div>
                  <p>Tổ chức</p>
                  <input
                    value={user?.organization || ""}
                    type="text"
                    placeholder="Tổ chức"
                    name="organization"
                    onChange={(e) => changeValue(e)}
                  />
                </div>

                <div className="certificateTime">
                  <p>Thời gian</p>
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
                  <p>Mô tả thêm</p>
                  <textarea
                    value={user?.info || ""}
                    name="info"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Mô tả thêm"
                    onChange={(e) => setUser({ ...user, info: e.target.value })}
                  ></textarea>
                </div>
              </div>
              <div className="updateInforUser__button">
                <button onClick={updateCertificate}>Thêm thông tin</button>
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
export default memo(Certificate);
