import React from "react";
import StaysResults from "./StaysResults";
import "./style.css";

export default function Home() {
  return (
    <div className="home-section">
      <main>
        <span>Top Locations</span>
        <span>
          <label htmlFor="location-search">
            Location Search:
            <input
              type="text"
              id="location-search"
              placeholder="Search here..."
            />
          </label>
        </span>
      </main>
      <aside>
        <h5>Filters</h5>
        <hr />
        <div className="stay-type">
          <label htmlFor="pg">
            PGs
            <input type="radio" id="pg" name="stays" defaultChecked />
          </label>
          <label htmlFor="house">
            Houses
            <input type="radio" id="house" name="stays" />
          </label>
        </div>
      </aside>
      <section>
        <StaysResults />
      </section>
    </div>
  );
}
