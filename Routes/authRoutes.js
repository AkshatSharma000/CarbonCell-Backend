// backend/routes/authRoutes.js

const express = require('express');
const router = express.Router();
const authController = require('../Controllers/authController');

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     description: Register a new user with username and password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: user123
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       '201':
 *         description: User registered successfully
 *       '400':
 *         description: Bad request, username or password missing
 *       '500':
 *         description: Internal server error
 */
router.post('/register', authController.register);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login with username and password
 *     description: Login with existing username and password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: user123
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       '200':
 *         description: User logged in successfully
 *       '401':
 *         description: Unauthorized, invalid username or password
 *       '500':
 *         description: Internal server error
 */
router.post('/login', authController.login);

/**
 * @swagger
 * /api/auth/logout:
 *   post:
 *     summary: Logout the current user
 *     description: Logout the currently logged-in user
 *     responses:
 *       '200':
 *         description: User logged out successfully
 *       '401':
 *         description: Unauthorized, user not logged in
 *       '500':
 *         description: Internal server error
 */
router.get('/logout', authController.logout);

module.exports = router;
