/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author:   Exenreco Bell
  Date:     October 31, 2024
  Filename: script.js
*/

"use strict";

const movies = [
  // Add your movie objects here
  {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    synopsis: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO."
  },
  {
    title: "The Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    year: 1999,
    synopsis: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
  },
  {
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    synopsis: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
  }
];

function fetchMovie(title) {
  // Implement this function
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const movie = movies.find(movie => movie.title.toLowerCase() === title.toLowerCase());
      if (movie) {
        resolve(movie);
      } else {
        reject(`Movie titled "${title}" not found.`);
      }
    }, 200); // Simulate network delay
  });
}

document.getElementById("movie-form").addEventListener("submit", async (event) => {
  // Implement this function
  event.preventDefault(); // Prevent form submission
  const titleInput = document.getElementById("title-input").value;
  const errorMessageElement = document.getElementById("error-message");
  const movieInfoElement = document.getElementById("movie-info");
  const movieTitleElement = document.getElementById("movie-title");
  const movieDirectorElement = document.getElementById("movie-director");
  const movieYearElement = document.getElementById("movie-year");
  const movieSynopsisElement = document.getElementById("movie-synopsis");

  // Clear previous movie info and error message
  movieInfoElement.style.display = "none";
  errorMessageElement.textContent = "";

  try {
    const movie = await fetchMovie(titleInput);
    // Update the HTML with the movie information
    movieTitleElement.textContent = movie.title;
    movieDirectorElement.textContent = `Director: ${movie.director}`;
    movieYearElement.textContent = `Year: ${movie.year}`;
    movieSynopsisElement.textContent = `Synopsis: ${movie.synopsis}`;
    movieInfoElement.style.display = "block";
  } catch (error) {
    errorMessageElement.textContent = error;
  }
});