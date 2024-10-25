"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-02

      Project to city and state information from a provided postal code
      Author: Exenreco Bell
      Date:   October 25, 2024

      Filename: project11-02.js
*/

let postalCode = document.getElementById("postalCode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");

postalCode.onblur = function () {
  let codeValue, countryValue;

  codeValue = postalCode.value;
  countryValue = country.value;
  place.value = "";
  region.value = "";

  window
    .fetch(`http://api.zippopotam.us/${countryValue}/${codeValue}`, {
      method: "GET",
    })
    .then((response) => {
      if (!response.ok) {
        throw new error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((json) => {
      console.log(json);
      place.value = json["places"][0]["place name"];
      postalCode.value = json["post code"];
      region.value = json.places[0]["state abbreviation"];
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Invalid location. Please check the postal code and try again.");
    });
};
