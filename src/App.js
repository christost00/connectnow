import React from "react";
import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("https://public.connectnow.org.uk/applicant-test/", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    data &&
    data.length > 0 &&
    data.map((item) => (
      <div class="notification">
        <div class="card">
          <div class="blackcard"></div>
          <div class="cardbody">
            <label>{item.name}</label>
            <br />
            {Date(item.first_release_date)}
            <p>{item.summary}</p>
          </div>
        </div>
        <div class="badge">{parseInt(item.rating / 10)}</div>
      </div>
    ))
  );
}
