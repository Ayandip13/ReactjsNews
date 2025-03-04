import React from "react";

const Card = ({ data = [] }) => {
  const readMore = (url) => {
    window.open(url);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 20,
      }}
    >
      {data.map((currentItem, index) => {
        if (!currentItem.urlToImage) {
          return null;
        } else {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                width: "45%", // Makes two cards fit in one row
                backgroundColor: "#D4EBF8",
                padding: 10,
                marginTop: 20,
                borderRadius: 10,
                boxShadow: "2 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              {/* Image Section */}
              <img
                src={currentItem.urlToImage}
                alt="News"
                style={{
                  height: 100,
                  width: 100,
                  objectFit: "cover",
                  borderRadius: 8,
                  marginRight: 15,
                }}
              />

              {/* Content Section */}
              <div style={{ flex: 1 }}>
                <a
                  href={currentItem.url}
                  target="_blank"
                  style={{
                    fontWeight: "bold",
                    fontSize: 18,
                    color: "#333",
                    textDecoration: "none",
                    display: "block",
                    marginBottom: 5,
                  }}
                  onClick={() => readMore(currentItem.url)}
                >
                  {currentItem.title}
                </a>
                <p style={{ fontSize: 14, color: "#555", marginBottom: 8 }}>
                  {currentItem.description}
                </p>
                <button
                  style={{
                    padding: "6px 12px",
                    backgroundColor: "#1F509A",
                    color: "white",
                    border: "none",
                    borderRadius: 5,
                    cursor: "pointer",
                  }}
                  onClick={() => readMore(currentItem.url)}
                >
                  Read More
                </button>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Card;
