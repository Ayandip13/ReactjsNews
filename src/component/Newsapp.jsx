import React from "react";
import Card from "./Card";

const Newsapp = () => {
  const API_KEY = "f7e2bafc620c48abb4b8b8502c5c9513";

  const getData = async () => {
    const resp = await fetch(
      `https://newsapi.org/v2/everything?q=football&apiKey=${API_KEY}`
    );
    const jsonData = await resp.json();
    console.log(jsonData);
  };

  return (
    <div>
      <nav
        style={{
          backgroundColor: "#6A9C89",
          display: "flex",
          height: 100,
          alignItems: "center",
          justifyContent: "space-around",
          padding: 10,
        }}
      >
        <div>
          <h1>Trendy News</h1>
        </div>
        <ul style={{ display: "flex", gap: 10, fontWeight: "bold" }}>
          <a>All News</a>
          <a>Trending News</a>
        </ul>
        <div className="searchBar">
          <input
            style={{
              width: 250,
              padding: 10,
              fontSize: 18,
              borderTopLeftRadius: 8,
              borderBottomLeftRadius: 8,
              backgroundColor: "#D5E5D5",
              textAlign: "center",
            }}
            type="text"
            placeholder="Search News"
          />
          <button
            onClick={getData}
            style={{
              fontSize: 18,
              borderTopRightRadius: 8,
              width: 80,
              padding: 10,
              borderBottomRightRadius: 8,
              backgroundColor: "#D5E5D5",
            }}
          >
            Search
          </button>
        </div>
      </nav>
      <div>
        <p style={{ textAlign: "center", fontWeight: "500", fontSize: 20 }}>
          Stay Updated, Stay Refreshed
        </p>
      </div>
      <div
        className="categoryBtn"
        style={{ display: "flex", gap: 45, justifyContent: "center" }}
      >
        <button
          style={{
            width: 90,
            height: 40,
            backgroundColor: "#FFF5E4",
            borderRadius: 7,
            color: "#0D4715",
            cursor: "pointer",
          }}
        >
          Sports
        </button>
        <button
          style={{
            width: 90,
            height: 40,
            backgroundColor: "#FFF5E4",
            borderRadius: 7,
            color: "#0D4715",
            cursor: "pointer",
          }}
        >
          Politics
        </button>
        <button
          style={{
            width: 90,
            height: 40,
            backgroundColor: "#FFF5E4",
            borderRadius: 7,
            color: "#0D4715",
            cursor: "pointer",
          }}
        >
          Fun
        </button>
        <button
          style={{
            width: 90,
            height: 40,
            backgroundColor: "#FFF5E4",
            borderRadius: 7,
            color: "#0D4715",
            cursor: "pointer",
          }}
        >
          Health
        </button>
        <button
          style={{
            width: 90,
            height: 40,
            backgroundColor: "#FFF5E4",
            borderRadius: 7,
            cursor: "pointer",
            color: "#0D4715",
          }}
        >
          Fitness
        </button>
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
};

export default Newsapp;
