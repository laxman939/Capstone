import * as React from "react";

import "./style.css";

import { useDispatch, useSelector } from "react-redux";

import { actionCreators } from "../../../Redux/index";

import { fetchStays } from "../../../Redux/Actions/stayActions";

export default function StayFilter() {
  const { pgClick, houseClick } = useSelector((state) => state);

  const dispatch = useDispatch();

  const { pgClickAction, houseClickAction } = actionCreators;

  const handleClickPg = () => {
    dispatch(pgClickAction(!pgClick));
    dispatch(houseClickAction(houseClick));
  };
  const handleClickHouse = () => {
    dispatch(pgClickAction(pgClick));
    dispatch(houseClickAction(!houseClick));

    dispatch(fetchStays());
  };

  return (
    <>
      <div className="row radio-section">
        <div className="col">
          <ul className="radio-list">
            <li className="radio-item">
              <input
                className="pg-input"
                type="radio"
                name="radio"
                id="pgs"
                onClick={handleClickPg}
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
                onClick={handleClickHouse}
              />
              <label className="house-label" htmlFor="houses">
                Houses
              </label>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
