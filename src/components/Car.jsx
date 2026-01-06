import React from "react";

export default function Car({ card }) {
  return (
    <div className="cards">
      {card.map((item) => (
        <div key={item.id} className="card">
          <h2 className="benz">{item.title}</h2>
          <img src={item.image} alt={item.title} />
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
