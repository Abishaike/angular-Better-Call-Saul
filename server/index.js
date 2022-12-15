// On a local machines its ports 3000
const HTTP_PORT = process.env.PORT || 3000;

/*
  Import Modules
*/
const express = require("express");
const path = require("path");

// Import moment.js
var moment = require('moment');
moment().format();

// Import UUID
const { v4: uuidv4 } = require('uuid');

// Execute the express module
const app = express();

// Execute the cors module
const cors = require('cors');
app.use(cors());

// Ensures that the incoming response (server back to client) supports a JSON format
app.use(express.json());

// Required for form submission
app.use(express.urlencoded({ extended: false }));

// Required to read and modify the json files
var fs = require("fs");
var apptsJSON = fs.readFileSync("./appointments.json");

// Read and parse the appointments.json file
var appts = JSON.parse(apptsJSON);

// Read portion - Getting all of the appointments
app.get("/", (req, res) => {
  res.send(appts);
});

// Post Portion
app.post("/", (req, res) => {

  // Received from form submisssion through angular from the "appointment-book" component
  const newEntry = {
    UUID: req.body.uuid,
    date: req.body.date,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    comments: req.body.comments
  }

  // Add it to the appts array
  appts.push(newEntry);

  // Update the appts.json file
  fs.writeFile("./appointments.json", JSON.stringify(appts), function (err) {
    if (err) throw err;
    console.log("File successfully updated.");
  });
  res.send("Appointment has been booked");
})
const server = app.listen(HTTP_PORT, function () {
  console.log(`Listening on port ${HTTP_PORT}`);
});

// Read Portion - Getting a specific appointment
app.get("/:UUID", (req, res) => {
  const UUID = req.params.UUID;

  const apptSpecs = appts.find((appt) => appt.UUID === UUID);

  res.send(apptSpecs);

})
// Update Portion - Updating a specific appointment
app.patch("/:UUID", (req, res) => {
  const id = req.params.UUID;
  const { date, comments } = req.body;

  // Finding the specified appointment
  const apptSelect = appts.find((appt) => appt.UUID === id);

  // Updating the comment of the specified appointment
  if (comments) {
    apptSelect.comments = comments;
  }

  // Updating the date of the specified appointment
  if (date) {
    apptSelect.date = date;
  }

  res.send(`Appointment with the UUID:${id} has been updated.`);
});

// Delete Portion - Deleting a specific appointment
app.delete("/:UUID", (req, res) => {
  const UUID = req.params.UUID;

  appts = appts.filter((appt) => appt.UUID !== UUID);

  res.send(`Appointment with the UUID:${UUID} has been deleted`);
});