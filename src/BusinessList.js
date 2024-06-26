import React, { useState, useEffect } from "react";
import Business from "./Business";
import axios from "axios";

function BusinessList(props) {
  let [loaded, setLoaded] = useState(false);
  let [business, setBusiness] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.name]);

  function showBusiness(response) {
    setBusiness(response.data.name);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="BusinessList">
        <div className="grid">
          {business.map(function (business, index) {
            return (
              <div className="grid-item" key={index}>
                <Business data={business} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = "";
    let url = "";
    axios.get(url).then(showBusiness);

    return null;
  }
}

export default BusinessList;
