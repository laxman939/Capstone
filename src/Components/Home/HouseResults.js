import React, { useEffect, useState } from "react";

import Axios from "axios";

function HouseResults() {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState([]);
  // const [timeOutId, setTimeOutId] = useState("");

  //https://need-based-stay.herokuapp.com/filter?q=uppal ---> query

  useEffect(() => {
    const fetchInfo = async () => {
      setLoading(true);
      try {
        const response = await Axios.get(
          "https://need-based-stay.herokuapp.com/filter"
        );
        setInfo(response.data);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchInfo();
  }, []);

  return (
    <>
      {loading && <div>Loading please wait....</div>}
      {!loading &&
        info.map((house) => (
          <div className="property-container" key={house._id}>
            <div className="row single-property">
              <div className="row">
                <div className="col">
                  <h5>{house.propertyName}</h5>
                  <footer>
                    <span>Location: </span>
                    {house.propertyLocation}
                  </footer>
                </div>
                <div className="col">
                  <p>
                    <span>Gender: </span>
                    {house.gender}
                  </p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col">
                  <img
                    id="image"
                    src="https://st4.depositphotos.com/16030310/25210/v/600/depositphotos_252105266-stock-illustration-vector-illustration-silver-golden-letters.jpg"
                    alt="house"
                  />
                </div>
                <div className="col">
                  <h5>Details</h5>
                  <p>
                    <span></span>
                    {house.description}
                  </p>
                </div>
                <div className="col">
                  <h5>Details</h5>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default HouseResults;
