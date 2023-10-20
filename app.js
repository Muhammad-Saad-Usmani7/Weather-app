const url = "https://api.openweathermap.org/data/2.5/weather?q=";
// let cityname= 'Karachi';
const apikey = "1df1779b66d82802e067653a7057ac0c";

(async function () {
  const search1 = document.getElementById("searchh");
  const button = document.getElementById("button");
  const temp = document.getElementById("temp");

  button.addEventListener("click", async () => {
    let cityname = search1.value;
    console.log(cityname);

    try {
      const response = await fetch(url + cityname + "&appid=" + apikey);
      const result = await response.json();
      // const result = await response.text();
      console.log(result);

	temp.innerText = (result.main.temp-273.16).toFixed(2);
    } catch (error) {
      console.error(error);
    }
  });

})();
