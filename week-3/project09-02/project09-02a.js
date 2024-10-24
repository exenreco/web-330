"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-02

      Project to read field values from web storage
      Author: Exenreco Bell
      Date:   October 23, 2024

      Filename: project09-02a.js
*/

/* Page Objects */

let riderName = document.getElementById("riderName");
let ageGroup = document.getElementById("ageGroup");
let bikeOption = document.getElementById("bikeOption");
let routeOption = document.getElementById("routeOption");
let accOption = document.getElementById("accOption");
let region = document.getElementById("region");
let miles = document.getElementById("miles");
let comments = document.getElementById("comments");
let submit = document.getElementById("submitButton");

// Event listener for submit on click
submit.addEventListener("click", (el) => showData());

/**
 * SHOW DATA
 *
 * Stores all page object in a window session and
 * redirects when submit object is clicked
 *
 * @type Function
 *
 * @returns void
 */
function showData() {
  // Session storage
  window.sessionStorage.setItem("riderName", riderName.value);
  window.sessionStorage.setItem("ageGroup", ageGroup.value);
  window.sessionStorage.setItem("bikeOption", bikeOption.value);
  window.sessionStorage.setItem("routeOption", routeOption.value);
  window.sessionStorage.setItem("accOption", accOption.value);
  window.sessionStorage.setItem("region", region.value);
  window.sessionStorage.setItem("miles", miles.value);
  window.sessionStorage.setItem("comments", comments.value);

  // redirect
  location.href = "project09-02b.html";
}
