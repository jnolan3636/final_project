const express = require('express');
const routes = express.Router();
const pool = require('./connection');

// GET all symptoms /api/symptoms
routes.get("/symptoms", (req, res) => {
    pool.query('SELECT * FROM sypmtoms').then((result) => {
        res.json(result.rows)
    });
});

// GET symptom by NAME /api/symptom/headache
routes.get("/symptoms/:symp_name", (req, res) => {
    const sympByName = req.params.symp_name;
    pool.query('SELECT * FROM symptoms WHERE symp_name = $1', [sympByName])
    .then ( (results) => {
        const symptoms = results.rows;
        if (symptoms.length) {
            res.status(200).json(symptoms);
        } else {
            res.status(404).send(`There is no symptom with the name ${sympByName} in the database`);
        }
        })
});

// GET sub_symps /api/symptom/7
routes.get("/sypmtoms/:symp_id", (req, res) => {
    const sympById = req.params.symp_id;
    pool.query('SELECT * FROM applications WHERE symp_id = $1', [sympById])
    .then ( (results) => {
        const subs = results.rows;
        if (subs.length) {
            res.status(200).json(subs);
        } else {
            res.status(404).send(`There is no sub-symptoms in the database`);
        }
        })
});

//GET all EOs /api/eo
routes.get("/eo", (req, res) => {
        pool.query('SELECT * FROM ess_oils').then((result) => {
            res.json(result.rows)
        });
    
        if (req.query.prefix) {
            pool.query('SELECT * FROM ess_oils LIKE $1', [req.query.prefix + "%"]).then((result) => {
            res.json(result.rows)
            });
        }
        else{
            pool.query('SELECT * FROM ess_oils').then((result) => {
                res.json(result.rows);
                });
        }
});
   
// GET EO by NAME /api/eo/lavender
routes.get("/eo/:eo_name", (req, res) => {
    const eoByName = req.params.eo_name;
    pool.query(`SELECT * FROM ess_oils WHERE eo_name ILIKE '%'||$1||'%'`, [eoByName])
    .then ( (results) => {
        const eo = results.rows;
        if (eo.length) {
            res.status(200).json(eo);
        } else {
            res.status(404).send(`There is no essential oil with the name ${eoByName} in the database`);
        }
        })
});

module.exports = routes;
