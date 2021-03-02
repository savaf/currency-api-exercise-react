import React from "react";

export default React.memo(function ExchangeRates({
  selected,
  conversionRates,
}) {
    return (
    <ul>
      {Object.entries(conversionRates).map(([key, value], index) => (
        <li key={index}>
          {key} : {value}
        </li>
      ))}
    </ul>
  );
});
