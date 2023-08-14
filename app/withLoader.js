"use client";
import React, { useState } from "react";
import Header from "./Header";

const cStyle = {
  position: "fixed",
  top: "100px",
  left: 0,
  right: 0,
  height: "80%",
  padding: "20px",
};

// eslint-disable-next-line react/display-name
const withLoader = (Components) => () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <div>
      {loading ? (
        <p>Loading .....</p>
      ) : (
        <>
          <Header /> <Components style={cStyle} />
        </>
      )}
    </div>
  );
};

export default withLoader;
