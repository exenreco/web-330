/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author:   Exenreco Bell
  Date:     October 31, 2024
  Filename: script.js
*/

// Create an in-memory object array for each table in the restaurant
let tables = [
  // Add your table objects here
  { tableNumber: 1, capacity: 4, isReserved: false },
  { tableNumber: 2, capacity: 2, isReserved: false },
  { tableNumber: 3, capacity: 6, isReserved: false },
  { tableNumber: 4, capacity: 4, isReserved: false },
  { tableNumber: 5, capacity: 2, isReserved: false },
  { tableNumber: 6, capacity: 6, isReserved: false },
  { tableNumber: 7, capacity: 4, isReserved: false },
  { tableNumber: 8, capacity: 2, isReserved: false },
  { tableNumber: 9, capacity: 4, isReserved: false },
  { tableNumber: 10, capacity: 6, isReserved: false },
];

// Create a function reserveTable
function reserveTable(tableNumber, callback, time) {
  // Add your code here

  const reserveTable = () => {
    table.isReserved = true; // Mark as reserved
    setTimeout(() => {
        callback(`Table ${tableNumber} has been reserved successfully!`);
    }, time);
  };

  const table = tables.find(t => t.tableNumber === tableNumber);
  ( table )
  ? ( !table.isReserved )
    ? // reserve the table
      reserveTable()
    : // table already reserved
      callback(`Sorry, Table ${tableNumber} is already reserved.`)
  : // table number invalid
    callback(`Table ${tableNumber} does not exist.`);
}

// When the form is submitted, call the reserveTable function
document
  .getElementById("reservationForm")
  .addEventListener("submit", function (e) {
    // Add your code here
    e.preventDefault();
    e.stopImmediatePropagation();

    const
    name        = document.getElementById('name').value,
    messageEl   = document.getElementById('message'),
    tableNumber = parseInt(document.getElementById('tableNumber').value),
    waitTime    = 500; // in milliseconds eg. (2000 ms)

    reserveTable(tableNumber, (message) => {
        messageEl.textContent = message;
        messageEl.style.color = message.includes('successfully') ? 'green' : 'red';
    }, waitTime);

  });
