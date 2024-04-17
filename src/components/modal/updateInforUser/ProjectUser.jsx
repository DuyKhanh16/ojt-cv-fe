import React, { memo, useEffect, useState } from "react";
import "./formModal.scss";
import "./Certificate.scss";
import { notification } from "antd";
import privateAxios from "../../../config/private.axios";
function ProjectUser({ isOpen, close, project }) {
  const [user, setUser] = useState({
    // name:project?.name,
    // info:project?.info,
    // link:project?.link,
    // start_at:project?.start_at,
    // end_at:project?.end_at,
  });
  console.log(project);
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
  const updateProject = async () => {
    if (project.status == "update") {
      try {
        const update = await privateAxios.patch(
          `api/v2/candidate/updateProject/${project.item.id}`,
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
    } else if (project.status == "creat") {
      try {
        const create = await privateAxios.post(
          `api/v2/candidate/createProject`,
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
    
      {project.status == "update" ? (
        <div style={{ display: isOpen ? "block" : "none" }}>
          <div className="updateInforUser">
            <div className="updateInforUser__contain">
              <h4>Dự án cá nhân</h4>
              <div className="updateInforUser__table certificate">
                <div>
                  <p>Tên dự án</p>
                  <input
                    value={user?.name || project?.item.name}
                    type="text"
                    placeholder="ABCde"
                    name="name"
                    onChange={(e) => changeValue(e)}
                  />
                </div>
                <div>
                  <p>Link demo</p>
                  <input
                    value={user?.link || project?.item.link}
                    type="text"
                    placeholder="ABCde"
                    name="link"
                    onChange={(e) => changeValue(e)}
                  />
                </div>

                <div className="certificateTime">
                  <p>Thời gian thực hiện</p>
                  <div className="timeSame">
                    <label htmlFor="">Start Date</label>
                    <input
                      value={user?.start_at || project?.item.start_at}
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
                      value={user?.end_at || project?.item.end_at}
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
                    value={user?.info || project?.item.info}
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
                <button onClick={updateProject}>Cập nhật</button>
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
              <h4>Dự án cá nhân</h4>
              <div className="updateInforUser__table certificate">
                <div>
                  <p>Tên dự án</p>
                  <input
                    value={user?.name || ""}
                    type="text"
                    placeholder="ABCde"
                    name="name"
                    onChange={(e) => changeValue(e)}
                  />
                </div>
                <div>
                  <p>Link demo</p>
                  <input
                    value={user?.link || ""}
                    type="text"
                    placeholder="ABCde"
                    name="link"
                    onChange={(e) => changeValue(e)}
                  />
                </div>

                <div className="certificateTime">
                  <p>Thời gian thực hiện</p>
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
                <button onClick={updateProject}>Cập nhật</button>
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
export default memo(ProjectUser);
