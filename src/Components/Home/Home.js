import React from "react";
import StayFilter from "./Filters/StayFilter";
import GenderFilter from "./Filters/GenderFilter";
import TopLocations from "./Filters/TopLocations";
import PgResults from "./PgResults";
import "./style.css";
import RoomFilter from "./Filters/RoomFilter";
import PreferredFilter from "./Filters/Preferred";
import SearchLocation from "./Filters/SearchLocation";
import HouseFilter from "./Filters/HouseFilter";
import HousePreferredFilter from "./Filters/HousePreferred";

import { useSelector } from "react-redux";
import HouseResults from "./HouseResults";

export default function Home() {
  const pgClicked = useSelector((state) => state.Pg.pgClick);

  console.log("pg " + pgClicked);

  return (
    <div className="home-section">
      <main className="main-section">
        <div id="toplocation">
          <TopLocations />
        </div>
        <span>
          <SearchLocation />
        </span>
      </main>
      <aside>
        <h5 className="filter-title">Filters</h5>
        <hr />
        <div className="filter">
          <StayFilter />
          {!pgClicked ? (
            <div>
              <div className="form-box">
                <HouseFilter />
              </div>
              <div className="form-box">
                <HousePreferredFilter />
              </div>
            </div>
          ) : (
            <>
              <div className="form-box">
                <GenderFilter />
              </div>
              <div className="form-box">
                <PreferredFilter />
              </div>
              <div className="form-box">
                <RoomFilter />
              </div>
            </>
          )}
        </div>
      </aside>
      <section>
        <h5 className="result-title"> Results</h5>
        <br />
        {pgClicked ? <PgResults /> : <HouseResults />}
      </section>
    </div>
  );
}
