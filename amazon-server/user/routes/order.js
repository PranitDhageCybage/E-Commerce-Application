const express = require("express");
const db = require("../../db");
const dbPromise = require("../../dbpromise");
const utils = require("../../utils");

const router = express.Router();

// ---------------------------------------
//                  GET
// ---------------------------------------

// ---------------------------------------
//                  POST
// ---------------------------------------

router.post("/", (request, response) => {
  try {
    const {
      addressId,
      totalAmount,
      tax,
      paymentType,
      paymentStatus,
      deliveryStatus,
    } = request.body;
    (async () => {
      // await dbPromise.execute("SET TRANSACTION ISOLATION LEVEL READ COMMITTED");
      // console.log("Finished setting the isolation level to read committed");
      //set wait timeout and lock wait timeout as per need.
      // await dbPromise.beginTransaction();

      // Step 1 : Add order to userOrder
      const statementOrder = `insert into userOrder (addressId, totalAmount, tax, paymentType, paymentStatus, deliveryStatus, userId) values (
    ${addressId}, ${totalAmount}, ${tax}, '${paymentType}', '${paymentStatus}', '${deliveryStatus}', ${request.userId})`;
      const [myorder] = await dbPromise.query(statementOrder);

      // Step 2 : Get Order Id
      const orderId = myorder["insertId"];

      //Step 3: Get All Cart Items and insert into orderDetails Table
      const statementCart = `SELECT productId, price, quantity, totalAmount FROM cart WHERE userId = ${request.userId}`;
      const [cartItems] = await dbPromise.execute(statementCart);

      // Step 4: Insert All cart items to orderdetails
      for (const item of cartItems) {
        const orderDetailsStatement = `insert into orderDetails (orderId, productId, price, quantity, totalAmount) values (
          ${orderId}, ${item["productId"]}, ${item["price"]}, ${item["quantity"]}, ${item["totalAmount"]})`;
        await dbPromise.execute(orderDetailsStatement);
      }

      //Step 5: Empty cart
      const cartStatement = `DELETE FROM cart WHERE userId = ${request.userId}`;
      await dbPromise.execute(cartStatement);

      // await dbPromise.commit();
      response.send(utils.createSuccess("placed order"));
    })();
  } catch (error) {
    console.log("Error While Passing Order" + error);
    // dbPromise.rollback();
    response.send(utils.createError(error));
  }
});

// ---------------------------------------
//                  DELETE
// ---------------------------------------

module.exports = router;
