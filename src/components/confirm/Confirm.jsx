import React, { memo, useState } from "react";
import "../confirm/Comfirm.scss";
import privateAxios from "../../config/private.axios";
import { notification } from "antd";
import publicAxios from "../../config/pulic.axios";
import {
  deleteCandidateCertificate,
  deleteCandidateEducation,
  deleteCandidateExperience,
  deleteCandidateProject,
  deleteCandidateSkill,
} from "../../apis/candidates";

function Confirm({ isOpen, close, value }) {
  const confirm = async () => {
    if (value.table === "exp") {
      await deleteCandidateExperience(value.id)
        .then((res) => {
          notification.success({
            message: res.message,
          });
        })
        .catch((error) => {
          notification.error({
            message: error.response.message,
          });
        });
      close();
    } else if (value.table === "education") {
      await deleteCandidateEducation(value.id)
        .then((res) => {
          notification.success({
            message: res.message,
          });
        })
        .catch((error) => {
          notification.error({
            message: error.response.message,
          });
        });
      close();
    } else if (value.table === "project") {
      await deleteCandidateProject(value.id)
        .then((res) => {
          notification.success({
            message: res.message,
          });
        })
        .catch((error) => {
          notification.error({
            message: error.response.message,
          });
        });
      close();
    } else if (value.table === "certificate") {
      await deleteCandidateCertificate(value.id)
        .then((res) => {
          notification.success({
            message: res.message,
          });
        })
        .catch((error) => {
          notification.error({
            message: error.response.message,
          });
        });
      close();
    } else if (value.table === "location") {
      if (value.listBrand.length === 1) {
        notification.error({
          message: "Địa điểm đang được sử dụng, vui lòng chọn địa điểm khác",
        });
        return;
      } else {
        try {
          await publicAxios.delete(
            `api/v2/companies/delete-address-company/${value.id.id}`
          );
          notification.success({
            message: "Đã xóa địa chỉ thành công",
            placement: "topRight",
            duration: 2,
          });
          close();
        } catch (error) {
          return error;
        }
      }
    } else if (value.table === "skill") {
      await deleteCandidateSkill(value.id)
        .then((res) => {
          notification.success({
            message: res.message,
          });
        })
        .catch((error) => {
          notification.error({
            message: error.response.message,
          });
        });
      close();
    }
  };
  return (
    <>
      <div style={{ display: isOpen ? "block" : "none" }}>
        <div className=" updateInforUser">
          <div className="updateInforUser__contain">
            <div
              style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "250px",
              }}
            >
              <p style={{ textAlign: "center", lineHeight: "35px" }}>
                Bạn có chắc chắn muốn xóa không ?
              </p>
            </div>
            <div className="updateInforUser__button">
              <button onClick={confirm}>Xác nhận</button>
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
    </>
  );
}
export default memo(Confirm);
