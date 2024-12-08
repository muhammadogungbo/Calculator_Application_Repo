//Function For Weather

const checkweather = (weather) => {
  if (weather === "rainy") {
    console.log("Put on a rain coat");
  } else if (weather === "cloudy") {
    console.log("Carry Umbrella Out");
  } else if (weather === "Sunny") {
    console.log("Be a free man");
  } else {
    console.log("These Weather Does Not Exist");
  }
  return weather;
};

//console.log(checkweather("rainy"));
