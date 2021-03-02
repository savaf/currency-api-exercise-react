export default function exchangeApi(currency_code) {
  return fetch(
    `https://v6.exchangerate-api.com/v6/72179b357c84d84fcb2c1f3d/latest/${currency_code}`
  ).then((res) => res.json());
}
