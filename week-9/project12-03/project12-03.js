"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: Exenreco Bell
      Date:   October 25, 2024

      Filename: project12-03.js
*/

// Assign jquery to $
const $ = jQuery;

$(() => {
  // article h2 on click handler
  $("article > h2").on("click", (e) => {
    // variables
    let heading, list, headingImage;

    // the clicked h2 tag
    heading = e.target;

    // finds the list after the selected heading
    list = $(heading).next();

    // find img tag in the clicked h2
    headingImage = $(heading).find("img");

    // slide toggles list element
    list.slideToggle(500);

    // update header image icons
    headingImage && headingImage.attr("src") === "plus.png"
      ? headingImage.attr("src", "minus.png") // replace plus with minus
      : headingImage.attr("src", "plus.png"); // otherwise plus
  });
});
