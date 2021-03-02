export default function exchangeApi(currency_code) {
  return fetch(
    `https://v6.exchangerate-api.com/v6/9d199184e503e771714a4152/latest/${currency_code}`
  ).then((res) => res.json());
}