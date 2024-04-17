import React, { memo, useEffect, useState } from "react";
import "./formModal.scss";
import "./Certificate.scss";
import privateAxios from "../../../config/private.axios";
import { notification } from "antd";

function Certificate({ isOpen, close, certificate }) {
  const [user, setUser] = useState({
    // name:certificate?.name,
    // organization:certificate?.organization,
    // info:certificate?.info,
    // start_at:certificate?.start_at,
    // end_at:certificate?.end_at,
  });
  console.log(certificate);
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
  const updateCertificate = async () => {
    if (certificate.status == "update") {
      try {
        const update = await privateAxios.patch(
          `api/v2/candidate/updateCertificate/${certificate.item.id}`,
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
    } else if (certificate.status == "creat") {
      try {
        const create = await privateAxios.post(
          `api/v2/candidate/createCertificate`,
          user
        );
        notification.success({
          message: create.data.message,
        });
        close();
      } catch (error) {
        notification.error({
          message: error.response.data.message,
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
                    value={user?.name || certificate?.item.name}
                    type="text"
                    placeholder="ABCde"
                    name="name"
                    onChange={(e) => changeValue(e)}
                  />
                </div>
                <div>
                  <p>Tổ chức</p>
                  <input
                    value={user?.organization || certificate?.item.organization}
                    type="text"
                    placeholder="ABCde"
                    name="organization"
                    onChange={(e) => changeValue(e)}
                  />
                </div>

                <div className="certificateTime">
                  <p>Thời gian</p>
                  <div className="timeSame">
                    <label htmlFor="">Start Date</label>
                    <input
                      value={user?.start_at || certificate?.item.start_at}
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
                      value={user?.end_at || certificate?.item.end_at}
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
                    value={user?.info || certificate?.item.info}
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
                    placeholder="ABCde"
                    name="name"
                    onChange={(e) => changeValue(e)}
                  />
                </div>
                <div>
                  <p>Tổ chức</p>
                  <input
                    value={user?.organization || ""}
                    type="text"
                    placeholder="ABCde"
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
                    placeholder="ABCde"
                    onChange={(e) => setUser({ ...user, info: e.target.value })}
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
      )}
    </>
  );
}
export default memo(Certificate);
