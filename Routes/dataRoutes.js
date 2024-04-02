const express = require('express');
const router = express.Router();
const dataController = require('../Controllers/dataController');
const authMiddleware = require('../Middleware/authMiddleware');

/**
 * @swagger
 * /api/data:
 *   get:
 *     summary: Get data from public API
 *     description: Fetch data from a public API with optional filtering options
 *     parameters:
 *       - in: query
 *         name: category
 *         description: Category to filter data by
 *         schema:
 *           type: string
 *       - in: query
 *         name: limit
 *         description: Maximum number of results to return
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Data fetched successfully
 *       '400':
 *         description: Bad request, invalid category or limit
 *       '500':
 *         description: Internal server error
 */
router.get('/', authMiddleware, dataController.fetchData);

module.exports = router;
