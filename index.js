#!/usr/bin/env node

const readlineSync = require("readline-sync");
const axios = require("axios");
const {
  getCode,
  getName
} = require("country-list");

let api = `https://date.nager.at/api/v2/PublicHolidays`;

let info = process.argv[2];


let date = process.argv[3]
if (date == undefined) {
  date = new Date().getFullYear();
}




let country = getCode(info);

console.log(`Holidays for ${info}
`)
axios
  .get(`${api}/${date}/${country}`)
  .then(function (response) {
    let takhna = response.data;
    takhna.forEach(function (element) {

      console.log(`${element.name}
${element.date}
`);
    });
  })
  .catch(function (error) {
    console.log(error);
  });