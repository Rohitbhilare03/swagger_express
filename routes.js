const express = require('express');
const router = express.Router();
const controller = require("./controller");


// Routes
/**
 * @swagger
 * /user:
 *  get:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/user', controller.getAllUsers);


/**
* @swagger
* /loginUser:
*   post:
*     tags:
*       - Users
*     name: Login
*     summary: Logs in a user
*     consumes:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         schema:
*           type: object
*           properties:
*             userName:
*               type: string
*             password:
*               type: string
*               format: password
*         required:
*           - username
*           - password
*     responses:
*       200:
*         description: User found and logged in successfully
*       
*/
router.post('/loginUser', controller.loginUser);


/**
 * @swagger
 * /user/{userId}:
 *  get:
 *    description: Use to request all customers
 *    parameters:
 *      - in: path
 *        name: userId
 *        schema:
 *          type: integer
 *        required: true
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/user/:id', controller.userById);


module.exports = router;