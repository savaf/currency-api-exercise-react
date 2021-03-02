import { useState, useEffect } from "react";
import ExchangeRates from "./ExchangeRates";

import exchangeApi from "./exchangeApi";

function App() {
  const [currency, setCurrency] = useState("USD");
  const [isLoading, setIsLoading] = useState(true);
  const [conversionRates, setConversionRates] = useState({});

  const loadConversionRates = () => {
    setIsLoading(true);
    exchangeApi(currency).then((exchangeRate) => {
      setIsLoading(false);
      setConversionRates(exchangeRate.conversion_rates || {});
    });
  };

  const onChangeCurrency = (event) => {
    setCurrency(event.target.value);
    loadConversionRates();
  };

  useEffect(() => {
    loadConversionRates();
  }, [])


  return (
    <div>
      <select value={currency} onChange={onChangeCurrency}>
        <option>EUR</option>
        <option>USD</option>
        <option>BRL</option>
        <option>PEN</option>
        <option>ARS</option>
      </select>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ExchangeRates conversionRates={conversionRates} selected={currency} />
      )}
    </div>
  );
}

export default App;
