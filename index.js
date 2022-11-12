const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

const Manager = require("./roles/manager");
const Engineer = require("./roles/engineer");
const Intern = require("./roles/intern");
