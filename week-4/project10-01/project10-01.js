"use strict";
/*    JavaScript 7th Edition
      Chapter 10
      Project 10-01

      Project to create a drag and drop jigsaw puzzle
      Author: Exenreco Bell
      Date:   October 24, 2024

      Filename: project10-01.js
*/

// Reference to the puzzle board
let puzzleBoard = document.getElementById("puzzleBoard");
// Counter for the zIndex style of each puzzle piece
let zCounter = 1;
// Array of integers from 1 to 48
let intList = new Array(48);
// pointerX and pointerY will contain the initial coordinates of the pointerX
// pieceX and pieceY will contain the initial coordinates of a puzzle piece
let pointerX, pointerY, pieceX, pieceY;

// Sort the integers from 1 to 48 in random order
for (let i = 0; i < 48; i++) {
  intList[i] = i + 1;
}
intList.sort(function () {
  return 0.5 - Math.random();
});

// generate randomly-sorted puzzle pieces
for (let i = 0; i < 48; i++) {
  let piece = document.createElement("img");
  piece.src = "piece" + intList[i] + ".png";
  let rowNum = Math.ceil((i + 1) / 8);
  let colNum = i + 1 - (rowNum - 1) * 8;
  piece.style.top = (rowNum - 1) * 98 + 7 + "px";
  piece.style.left = (colNum - 1) * 98 + 7 + "px";
  piece.draggable = false; // override the default draggability of images
  puzzleBoard.appendChild(piece);
}

// Node list representing the puzzle pieces
let pieces = document.querySelectorAll("div#puzzleBoard img");

/**
 * GRAB PIECE
 *
 * Event that handles grabbing puzzle pieces.
 *
 * @type function
 *
 * @param {object} e the event object
 *
 * @returns {void}
 */
function grabPiece(e) {
  // only move grab when function called
  e.preventDefault();

  // prevent interference from other events
  e.stopImmediatePropagation();

  // Capture initial pointer positions
  pointerX = e.clientX;
  pointerY = e.clientY;

  // update pointer cursor to reflect action
  e.target.style.cursor = "grabbing";

  // set css property touch-action style to none
  e.target.style.touchAction = "none";

  // increase z counter by 1
  zCounter++;

  // Set z-index value to z counter value
  e.target.style.zIndex = zCounter;

  // Capture initial puzzle piece positions
  pieceX = e.target.offsetLeft;
  pieceY = e.target.offsetTop;

  // Handles movePiece event
  e.target.addEventListener("pointermove", movePiece);

  // Handles dropPiece event
  e.target.addEventListener("pointerup", dropPiece);
}

/**
 * MOVE PIECE
 *
 * Event that handles moving puzzle pieces.
 *
 * @type function
 *
 * @param {object} e the event object
 *
 * @returns {void}
 */
function movePiece(e) {
  // only move piece when function called
  e.preventDefault();

  // prevent interference from other events
  e.stopImmediatePropagation();

  let // calculate the difference between the current pointer position and the initial position of x axis
    diffX = e.clientX - pointerX,
    // calculate the difference between the current pointer position and the initial position of Y axis
    diffY = e.clientY - pointerY;

  // Update the top position of the puzzle piece
  e.target.style.top = `${pieceY + diffY}px`;

  // Update the left position of the puzzle piece
  e.target.style.left = `${pieceX + diffX}px`;

  // change cursor to reflect action
  e.target.style.cursor = "grabbing";
}

/**
 * DROP PIECE
 *
 * Event that handles dropping puzzle pieces.
 *
 * @type function
 *
 * @param {object} e the event object
 *
 * @returns {void}
 */
function dropPiece(e) {
  // only drop when function called
  e.preventDefault();

  // prevent interference from other events
  e.stopImmediatePropagation();

  // remove move piece event
  e.target.removeEventListener("pointermove", movePiece);

  // remove drop piece event
  e.target.removeEventListener("pointerup", dropPiece);

  // Release pointer capture to stop further pointer events
  e.target.releasePointerCapture(e.pointerId);

  // Reset cursor style after dropping
  e.target.style.cursor = "grab";
}

// bind grab event to all pieces
pieces.forEach((piece) => piece.addEventListener("pointerdown", grabPiece));
