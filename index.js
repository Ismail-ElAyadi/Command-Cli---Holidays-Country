#!/usr/bin/env node

const readlineSync = require("readline-sync");
const axios = require("axios");
const {
  getCode,
  getName
} = require("country-list");

let api = `https://date.nager.at/api/v2/PublicHolidays`;
console.log("Hello , Node JS Enchanté bro ");
let info = process.argv[2];
console.log(info);
let date = new Date().getFullYear();


let country = getCode(info);


let holidays = axios
  .get(`${api}/${date}/${country}`)
  .then(function (response) {
    let takhna = response.data;
    takhna.forEach(function (element) {
      console.log(`${element.name} at ${element.date} `);
    });
  })
  .catch(function (error) {
    console.log(error);
  });