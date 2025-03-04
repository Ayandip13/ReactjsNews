import React, { useEffect, useState } from "react";
import Card from "./Card";

const Newsapp = () => {
  const [search, setSearch] = useState("All");
  const [newsData, setNewsData] = useState(null);

  const API_KEY = "f7e2bafc620c48abb4b8b8502c5c9513";

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const getData = async () => {
    const resp = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
    );
    const jsonData = await resp.json();
    setNewsData(jsonData.articles);
    console.log(jsonData.articles);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleCategoryClick = (e) => {
    setSearch(e.target.value);
    getData();
  };

  return (
    <div style={{ backgroundColor: "#F5F5F5", minHeight: "100vh" }}>
      {/* Navbar */}
      <nav
        style={{
          backgroundColor: "#2C3E50",
          display: "flex",
          height: 80,
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 40px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1 style={{ fontSize: 36, color: "#FBFBFB", fontWeight: "bold" }}>
          The Insider
        </h1>

        <div className="searchBar" style={{ display: "flex" }}>
          <input
            style={{
              width: 280,
              padding: 12,
              fontSize: 16,
              border: "none",
              outline: "none",
              borderTopLeftRadius: 8,
              borderBottomLeftRadius: 8,
              backgroundColor: "#ECF0F1",
              textAlign: "center",
            }}
            type="text"
            onChange={handleInput}
            placeholder="Search News..."
            value={search}
          />
          <button
            onClick={getData}
            style={{
              fontSize: 16,
              borderTopRightRadius: 8,
              borderBottomRightRadius: 8,
              width: 100,
              padding: 12,
              backgroundColor: "#3498DB",
              color: "white",
              border: "none",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            Search
          </button>
        </div>
      </nav>

      {/* Subheading */}
      <div>
        <p
          style={{
            textAlign: "center",
            fontWeight: "500",
            fontSize: 22,
            marginTop: 20,
            color: "#34495E",
          }}
        >
          Stay Updated, Stay Refreshed
        </p>
      </div>

      {/* Category Buttons */}
      <div
        className="categoryBtn"
        style={{
          display: "flex",
          gap: 20,
          justifyContent: "center",
          marginTop: 15,
          flexWrap: "wrap",
        }}
      >
        {["Sports", "Politics", "Fun", "Health", "Fitness"].map((category) => (
          <button
            key={category}
            style={{
              width: 120,
              height: 40,
              backgroundColor: "#3498DB",
              borderRadius: 7,
              color: "#fff",
              cursor: "pointer",
              fontWeight: "bold",
              border: "none",
              fontSize: 16,
              transition: "0.3s",
            }}
            onClick={handleCategoryClick}
            value={category.toLowerCase()}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor = "#2980B9")
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = "#3498DB")
            }
          >
            {category}
          </button>
        ))}
      </div>

      {/* News Cards */}
      <div>{newsData ? <Card data={newsData} /> : null}</div>
    </div>
  );
};

export default Newsapp;
