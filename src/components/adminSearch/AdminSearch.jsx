import React from "react";
import "./AdminSearch.scss";
import logo from "../../assets/images/fromsearch/Vector.png";
export default function AdminSearch() {
  return (
    <div className="admin__search">
      <div className="admin__search--content">
        <div className="admin__search--input">
          <div className="admin__search--input--boder">
            <div className="admin__search--input__select">
                <p>Hà Nội</p>
                <span class="material-symbols-outlined">
                expand_more
                </span>
            </div>
            <div className="admin__search--input__iconsearch">
                <img src="./src/assets/images/fromsearch/fi_search.png" alt="" />
                <div className="admin__search--input--input">
                <input type="text" placeholder="Search..." />
            </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}
