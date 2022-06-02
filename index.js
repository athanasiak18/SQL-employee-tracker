const mysql = require('mysql2');
const inquirer = require("inquirer");
const util = require('util');
const consoleTable = require("console.table");

const connection = mysql.createConnection(
    {
      host: 'localhost',