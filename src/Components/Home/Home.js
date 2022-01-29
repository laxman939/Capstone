import React from "react";
import StayFilter from "./Filters/StayFilter";
import GenderFilter from "./Filters/GenderFilter";
import TopLocations from "./Filters/TopLocations";
import StaysResults from "./StaysResults";
import "./style.css";
import RoomFilter from "./Filters/RoomFilter";
import PreferredFilter from "./Filters/Preferred";
import SearchLocation from "./Filters/SearchLocation";

export default function Home() {
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
          <GenderFilter />
          <PreferredFilter />
          <RoomFilter />
        </div>
      </aside>
      <section>
        <StaysResults />
      </section>
    </div>
  );
}
