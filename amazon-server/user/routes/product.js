const express = require("express");
const db = require("../../db");
const config = require("../../config");
const utils = require("../../utils");
const crypto = require("crypto-js");
// const mailer = require("../../mailer");
// const uuid = require("uuid");
const fs = require("fs");
// const path = require("path");
const jwt = require("jsonwebtoken");

const router = express.Router();

module.exports = router;
