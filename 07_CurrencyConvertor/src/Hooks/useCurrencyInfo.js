import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  // useEffect(() => {
  //   fetch(
  //     ` https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
  //   )
  //     .then((res) => res.json())
  //     .then((res) => setData(res[currency]));
  // }, [currency]);

  useEffect(() => {
    const fetchCurrency = async () => {
      const res = await fetch(
        ` https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
      );

      const data = await res.json();
      setData(data[currency]);
    };

    fetchCurrency();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
