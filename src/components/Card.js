import React from "react";

export default function Card(props) {
  const { title, price, coverImg, stats, location, openSpots } = props.Data;

  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={coverImg} alt={coverImg} className="card--image" />
      <br />
      <div className="card--stats">
        <i
          className="fas fa-star"
          style={{ cursor: "pointer", color: "red" }}
        ></i>
        &nbsp; {stats.rating}
        <span style={{ color: "grey" }}>
          ({stats.reviewCount})•{location}
        </span>
      </div>
      <p className="card--title">{title}</p>
      <span className="card--price">
        <strong>From ${price}</strong> / person
      </span>
    </div>
  );
}
