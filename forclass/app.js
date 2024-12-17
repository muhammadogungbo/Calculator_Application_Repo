const container_country = document.getElementById("countries_container");

//Function Fetching countries data

async function fetchCountriesData() {
  try {
    // add a console to verify data
    console.log("countries Data:", countries_data);
    //check if the data is valid
    if (!countries_data || !Array.isArray(countries_data)) {
      throw new Error("something went wrong while loading");
    }

    //function
    // rendercountries_data(countries_data);
  } catch (error) {
    console.log("error", error);
  }

  //error
  
}

fetchCountriesData();
