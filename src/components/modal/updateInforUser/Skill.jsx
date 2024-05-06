import React, { useEffect, useState } from "react";
import "./formModal.scss";
import "./Skill.scss";
import gearshape from "../../../assets/images/main/gearshape.png";
import { useSelector } from "react-redux";
import publicAxios from "../../../config/pulic.axios";
import { notification } from "antd";
import { getLevelJob } from "../../../apis/jobs";
import {
  candidateCreateSkill,
  candidateUpdateSkill,
} from "../../../apis/candidates";
export default function Skill({ isOpen, close, skill }) {
  const userSkill = useSelector((state) => state.candidate.data);
  const [allLevel, setAllLevel] = useState([]);
  const [nameSkill, setNameSkill] = useState("");
  const [check, setCheck] = useState(false);
  const [newSkill, setNewSkill] = useState({
    name: nameSkill || skill?.item?.name,
    leveljob_id: "",
  });
  useEffect(() => {
    const level = getLevelJob().then((res) => {
      setAllLevel(res);
    });
    setNewSkill({
      ...newSkill,
      name: nameSkill,
      leveljob_id: skill?.item?.leveljob_id?.name,
      candidate_id: userSkill.id,
    });
  }, [userSkill]);

  const changeValue = (e) => {
    setNewSkill({ ...newSkill, [e.target.name]: e.target.value });
    setCheck(true);
  };
  const closeModal = () => {
    setNewSkill({});
    close();
  };
  const addSkill = async () => {
    try {
      if (skill.status == "update") {
        const res = await candidateUpdateSkill(skill?.item.id, newSkill);
        notification.success({
          message: res.message,
        });
        setNewSkill({});
        close();
        setCheck(false);
      } else if (skill.status == "create") {
        const res = await candidateCreateSkill(newSkill);
        notification.success({
          message: res.message,
        });
        close();
        setCheck(false);
        setCheck(false);
      }
    } catch (error) {
      notification.error({
        message: error.response.message,
      });
    }
  };
  return (
    <>
      {skill.status == "update" ? (
        <div style={{ display: isOpen ? "block" : "none" }}>
          <div className="format1 updateInforUser">
            <div className="updateInforUser__contain">
              <p>Kĩ năng</p>
              <div className="updateInforUser__table skill">
                <div className="updateInforUser__table__skill__contain">
                  <div className="skillSame">
                    <label htmlFor="">Kĩ năng</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Mời nhập kĩ năng của bạn ..."
                      onChange={changeValue}
                      value={check ? newSkill?.name : skill?.item?.name}
                      // value={skill?.item?.name}
                    />
                  </div>
                  <div className="skillSame">
                    <label htmlFor="">Mức độ</label>
                    <select name="leveljob_id" id="" onChange={changeValue}>
                      <option value="">
                        {newSkill?.leveljob_id
                          ? newSkill?.leveljob_id
                          : skill?.item?.leveljob_id.name}
                      </option>
                      {allLevel.map((item, index) => {
                        return <option value={item.id}>{item.name}</option>;
                      })}
                    </select>
                  </div>
                </div>
              </div>

              <div className="updateInforUser__button ">
                <button onClick={addSkill}>Cập nhật </button>
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
        <div style={{ display: isOpen ? "block" : "none" }}>
          <div className="format1 updateInforUser">
            <div className="updateInforUser__contain">
              <p>Kĩ năng</p>
              <div className="updateInforUser__table skill">
                <div className="updateInforUser__table__skill__contain">
                  <div className="skillSame">
                    <label htmlFor="">Kĩ năng</label>
                    <input
                      type="text"
                      name="name"
                      value={newSkill?.name}
                      placeholder="Mời nhập kĩ năng của bạn ..."
                      onChange={changeValue}
                    />
                  </div>
                  <div className="skillSame">
                    <label htmlFor="">Mức độ</label>
                    <select name="leveljob_id" id="" onChange={changeValue}>
                      <option value="">level</option>
                      {allLevel.map((item, index) => {
                        return <option value={item.id}>{item.name}</option>;
                      })}
                    </select>
                  </div>
                </div>
              </div>

              <div className="updateInforUser__button ">
                <button onClick={addSkill}>Thêm mới </button>
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
