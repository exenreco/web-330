/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author:   Exenreco Bell
  Date:     October 31, 2024
  Filename: chefs.js
*/

"use strict";

// TODO: Define an array of chef objects
let chefs = [
  // Each chef object should have a name, specialty, weakness, and restaurantLocation
  {
    name: "Gordon Ramsay",
    specialty: "French Cuisine",
    weakness: "Sweets",
    restaurantLocation: "London",
  },
  {
    name: "Julia Child",
    specialty: "French Cuisine",
    weakness: "Speed",
    restaurantLocation: "Paris",
  },
  {
    name: "Emeril Lagasse",
    specialty: "Creole Cuisine",
    weakness: "Simplicity",
    restaurantLocation: "New Orleans",
  },
];

// TODO: Define a function to retrieve the first chef's information
function retrieveChef1() {
  // This function should return a promise that resolves with the chef's information after a delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const chef = chefs[0];
      if (chef) {
        resolve(chef);
      } else {
        reject("Failed to retrieve Chef 1 data.");
      }
    }, 2000); // 2 seconds delay
  });
}

// TODO: Define a function to retrieve the second chef's information
function retrieveChef2() {
  // return a promise that resolves with the chef's information after a delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const chef = chefs[1];
      if (chef) {
        resolve(chef);
      } else {
        reject("Failed to retrieve Chef 2 data.");
      }
    }, 3000); // 3 seconds delay
  });
}

// TODO: Define a function to retrieve the third chef's information
function retrieveChef3() {
  // return a promise that resolves with the chef's information after a delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const chef = chefs[2];
      if (chef) {
        resolve(chef);
      } else {
        reject("Failed to retrieve Chef 3 data.");
      }
    }, 4000); // 4 seconds delay
  });
}

// TODO: Use Promise.allSettled to retrieve all chefs' information and update the webpage accordingly

// Use Promise.allSettled to retrieve all chefs' information
Promise.allSettled([retrieveChef1(), retrieveChef2(), retrieveChef3()]).then(
  (results) => {
    let errorMessage = ""; // Initialize error message string
    results.forEach((result, index) => {
      const chefInfoDiv = document.getElementById(`chef${index + 1}-info`);

      if (result.status === "fulfilled") {
        const chef = result.value;
        chefInfoDiv.innerHTML = `
            <p>Name: ${chef.name}</p>
            <p>Specialty: ${chef.specialty}</p>
            <p>Weakness: ${chef.weakness}</p>
            <p>Restaurant Location: ${chef.restaurantLocation}</p>
          `;
      } else {
        // Append error message for failed promises
        errorMessage += `Error: ${result.reason}<br><br>`;
      }
    });

    // If there are any error messages, display them
    if (errorMessage) {
      const errorDiv = document.getElementById("error");
      errorDiv.innerHTML = errorMessage;
      errorDiv.hidden = false; // Show the error div
    }
  }
);
