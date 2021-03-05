const express = require('express');
const routes = express.Router();
const pool = require('./connection');
// GET /routes
routes.get("/conditions", (req, res) => {
    pool.query('SELECT * FROM conditions').then((result) => {
        res.json(result.rows)
    });
})
routes.get("/eo", (req, res) => {
        pool.query('SELECT * FROM ess_oils').then((result) => {
            res.json(result.rows)
        });
});
    module.exports = routes;