import React from "react";

export default function Car({ item }) {
  return (
    <div className="card">
      <h2 className="benz">{item.title}</h2>
      <img src={item.image} alt={item.title} />
      <p>{item.description}</p>
    </div>
  );
}
