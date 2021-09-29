const express = require("express");
const utils = require("../../utils");
const db = require("../../db");
const router = express.Router();

//---------------------------------
//              GET
//---------------------------------
//get number of users
router.get("/user-count", (request, response) => {
  const statement = `SELECT COUNT(id) AS totalUser FROM user`;
  db.query(statement, (error, data) => {
    response.send(utils.createResult(error, data));
  });
});

//get number of products
router.get("/product-count", (request, response) => {
  const statement = `SELECT COUNT(id) AS totalProduct FROM product`;
  db.query(statement, (error, data) => {
    response.send(utils.createResult(error, data));
  });
});

//get total number of orders
router.get("/order-count", (request, response) => {
  const statement = `SELECT COUNT(id) AS totatOrder FROM userorder`;
  db.query(statement, (error, data) => {
    response.send(utils.createResult(error, data));
  });
});

//get total number of orders
router.get("/active-order-count", (request, response) => {
  const statement = `SELECT COUNT(id) AS activeOrder FROM userorder WHERE deliveryStatus NOT IN ('Cancelled', 'Delivered')`;
  db.query(statement, (error, data) => {
    response.send(utils.createResult(error, data));
  });
});

//get total number of categories
router.get("/category-count", (request, response) => {
  const statement = `SELECT COUNT(id) AS totalCategories FROM category`;
  db.query(statement, (error, data) => {
    response.send(utils.createResult(error, data));
  });
});

//get total number of categories
router.get("/brand-count", (request, response) => {
  const statement = `SELECT COUNT(id) AS totalBrands FROM brand`;
  db.query(statement, (error, data) => {
    response.send(utils.createResult(error, data));
  });
});
module.exports = router;
