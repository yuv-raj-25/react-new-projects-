import React from "react";
import { useEffect, useState } from "react";

function UseCurrencyInfo(currency) {
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
      .then( (res) => res.json())
      .then( (res) => setData(res[currency]))

      
    );
  }, []);
}

export default UseCurrencyInfo;
