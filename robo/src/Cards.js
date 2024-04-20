import React, { useState } from "react";
import { Users } from "./users";
import "./App.css";
import Navbar from "./Navbar";

const Cards = () => {
  
  const [query, setquery] = useState("");

  const searhchange = (e) => {
    setquery(e.target.value);
  };

  return (
    <>
     <Navbar query={query} setquery={setquery} searhchange={searhchange} />

<div className="cards">
  {Users.filter((user) => user.name.toLowerCase().includes(query.toLowerCase())).map((user) => (
    <div key={user.id}>
      <div className="items">
        <div className="name"> {user.name}</div>
        <div className="image">
          <img src={user.url} alt="" />
        </div>
      </div>
    </div>
  ))}
</div>

    </>
  );
};

export default Cards;
