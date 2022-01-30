import * as React from "react";

import "./style.css";

export default function StayFilter() {
  return (
    <>
      <section class="radio-section">
        <ul className="radio-list">
          <li className="radio-item">
            <input className="pg-input" type="radio" name="radio" id="pgs" />
            <label className="pg-label" for="pgs">
              PGs
            </label>
          </li>
          <li className="radio-item">
            <input
              className="house-input"
              type="radio"
              name="radio"
              id="houses"
            />
            <label className="house-label" for="houses">
              Houses
            </label>
          </li>
        </ul>
      </section>
    </>
  );
}
