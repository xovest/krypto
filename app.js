var baseUrl = "https://api.coinranking.com/v2/coins";
var proxyUrl = "https://cors-anywhere.herokuapp.com/";
var apiKey = "coinranking60df3f4ae8856c80c39d85b4237a9286c75d61172d05462f";

fetch(`${proxyUrl}${baseUrl}`, {
  method: "GET",
  headers: {
    'Content-Type': 'application/json',
    'x-access-token': `${apiKey}`,
    'Access-Control-Allow-Origin': '*'
  }
}).then(response => {
  if (response.ok) {
    response.json().then(json => {
      let coinsData = json.data.coins;

      if (coinsData.length > 0) {
        var cryptoCoin = "";
      }

      //looping through coins
      coinsData.forEach(coin => {
        cryptoCoin += "<tr>";
        cryptoCoin += `<td>${coin.uuid}</td>`;
        cryptoCoin += `<td>${coin.btcPrice}</td>`;
        cryptoCoin += `<td>${coin.rank}</td>`;
        cryptoCoin += `<td>${coin.tier}</td>`;
        cryptoCoin += `<td>${coin.name}</td>`;
        cryptoCoin += `<td>$${Math.round(coin.price)} billion</td>`;
        cryptoCoin += `<td>${coin.symbol}</td>`;
        cryptoCoin += "</tr>";
      });
        document.getElementById("data").innerHTML = cryptoCoin;
    })
  }
}).catch(error => {
  console.log(error);
});