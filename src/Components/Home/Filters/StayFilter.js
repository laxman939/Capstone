import * as React from "react";

import "./style.css";

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../Redux";

export default function StayFilter() {
  const dispatch = useDispatch();

  const { handlePgClick } = bindActionCreators(actionCreators, dispatch);

  return (
    <>
      <section className="radio-section">
        <ul className="radio-list">
          <li className="radio-item">
            <input
              className="pg-input"
              type="radio"
              name="radio"
              id="pgs"
              onClick={() => handlePgClick(true)}
            />
            <label className="pg-label" htmlFor="pgs">
              PGs
            </label>
          </li>
          <li className="radio-item">
            <input
              className="house-input"
              type="radio"
              name="radio"
              id="houses"
              onClick={() => handlePgClick(false)}
            />
            <label className="house-label" htmlFor="houses">
              Houses
            </label>
          </li>
        </ul>
      </section>
    </>
  );
}
