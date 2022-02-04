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

  return (
    <>
      <main className="main-section">
        <div className="container main">
          <div className="row location">
            <div className="col-6 col-sm-2 top">
              <TopLocations />
            </div>
            <div className="col-6 col-sm-2 search">
              <SearchLocation />
            </div>
          </div>
        </div>
      </main>
      <div className="row align-items-start filter-result-section">
        <div className="col-6 col-sm-3 filter-section">
          <aside>
            <h5 className="filter-title">Filters</h5>
            <hr />
            <div className="container filter-container">
              <div className="row stays-filter">
                <div className="col-sm">
                  <StayFilter />
                </div>
              </div>
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
        </div>
        <div className="col-12 col-sm-9 result-section">
          <section>
            <h5 className="result-title"> Results</h5>
            {pgClicked ? <PgResults /> : <HouseResults />}
          </section>
        </div>
      </div>
    </>
  );
}
