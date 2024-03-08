import React, { useState } from "react";

const Home = () => {
  const [counter, setCounter] = useState(0);

  const handleClick1 = () => {
    if(counter == 4) {
      throw  new Error("You can't click more than")
    }
    setCounter(counter + 1);
  };

  const handleClick2 = () => {
    if(counter == 4) {
      throw  new Error("You can't click more than")
    }
    setCounter(counter - 1);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "300%",
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "-15%",
      }}
    >
      Counter App
      <div
        style={{
          fontSize: "120%",
          position: "relative",
          top: "10vh",
        }}
      >
        {counter}
      </div>
      <div className="buttons">
        <button
          style={{
            padding: "8px 16px",
            fontSize: "60%",
            position: "relative",
            top: "20vh",
            marginRight: "5px",
            backgroundColor: "green",
            borderRadius: "8%",
            color: "white",
          }}
          onClick={handleClick1}
        >
          Increment
        </button>
        <button
          style={{
            padding: "8px 16px",
            fontSize: "60%",
            position: "relative",
            top: "20vh",
            marginLeft: "5px",
            backgroundColor: "red",
            borderRadius: "8%",
            color: "white",
          }}
          onClick={handleClick2}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Home;
