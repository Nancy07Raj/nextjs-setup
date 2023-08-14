import React, { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw Error("Cannot fetch data");
        return res.json();
      })
      .then((data) => {
        setData(data);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setData(null);
      });
  });
  return { data, error };
};

export default useFetch;
