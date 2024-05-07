import React, { memo, useEffect, useState } from "react";
import "./formModal.scss";
import "./Certificate.scss";
import { notification } from "antd";
import privateAxios from "../../../config/private.axios";
import { useSelector } from "react-redux";
import {
  candidateCreateProject,
  candidateUpdateProject,
} from "../../../apis/candidates";
function ProjectUser({ isOpen, close, project }) {
  const userProject = useSelector((state) => state.candidate.data);
  const [name, setName] = useState("");
  const [start_at, setStart_at] = useState("");
  const [end_at, setEnd_at] = useState("");
  const [info, setInfo] = useState("");
  const [link, setLink] = useState("");
  const [check, setCheck] = useState(false);

  const [user, setUser] = useState({
    name: name || project?.item?.name,
    start_at: start_at || project?.item?.start_at,
    end_at: end_at || project?.item?.end_at,
    info: info || project?.item?.info,
    link: link || project?.item?.link,
  });

  useEffect(() => {
    setUser({ ...user, candidate_id: userProject.id });
  }, [userProject]);

  const changeValue = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setCheck(true);
  };

  const updateProject = async () => {
    let start_at = new Date(user.start_at).getTime();
    let end_at = new Date(user.end_at).getTime();
    if (start_at > end_at) {
      notification.error({
        message: "Ngày bắt đầu phải nhỏ hơn ngày kết thúc",
      });
      return;
    }
    if (project.status == "update") {
      try {
        const update = await candidateUpdateProject(project?.item.id, user);
        notification.success({
          message: "Cập nhật thông tin thành công",
        });
        setUser({
          name: "",
          start_at: "",
          end_at: "",
          info: "",
          link: "",
        });
        setCheck(false);
        close();
      } catch (error) {
        notification.error({
          message: error.response.message,
        });
      }
    } else if (project.status == "create") {
      try {
        const create = await candidateCreateProject(user);
        notification.success({
          message: create.message,
        });
        setUser({
          name: "",
          start_at: "",
          end_at: "",
          info: "",
          link: "",
        });
        setCheck(false);
        close();
      } catch (error) {
        notification.error({
          message: error.response.message,
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
                    value={check? user?.name : project?.item.name}
                    type="text"
                    placeholder="Tên dự án"
                    name="name"
                    onChange={(e) => changeValue(e)}
                  />
                </div>
                <div>
                  <p>Link demo</p>
                  <input
                    value={check? user?.link : project?.item.link}
                    type="text"
                    placeholder="Link dự án"
                    name="link"
                    onChange={(e) => changeValue(e)}
                  />
                </div>

                <div className="certificateTime">
                  <p>Thời gian thực hiện</p>
                  <div className="timeSame">
                    <label htmlFor="">Start Date</label>
                    <input
                      value={check? user?.start_at : project?.item.start_at}
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
                      value={check? user?.end_at : project?.item.end_at}
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
                    value={check? user?.info : project?.item.info}
                    name="info"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Chi tiết"
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
                    placeholder="Tên dự án"
                    name="name"
                    onChange={(e) => changeValue(e)}
                  />
                </div>
                <div>
                  <p>Link demo</p>
                  <input
                    value={user?.link || ""}
                    type="text"
                    placeholder="Link dự án"
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
                    placeholder="Chi tiết công việc"
                    onChange={(e) => setUser({ ...user, info: e.target.value })}
                  ></textarea>
                </div>
              </div>
              <div className="updateInforUser__button">
                <button onClick={updateProject}>Thêm mới</button>
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
