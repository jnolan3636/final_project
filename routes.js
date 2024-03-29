const { RouterState } = require("@angular/router");
const express = require("express");
const routes = express.Router();
const pool = require("./connection");

// GET all symptoms /api/symptoms
routes.get("/symptoms", (req, res) => {
  pool.query("SELECT * FROM symptoms").then((result) => {
    res.json(result.rows);
  });
});

// GET symptom by NAME /api/symptoms/headache
routes.get("/symptoms/:symp_name", (req, res) => {
  const sympByName = req.params.symp_name;
  pool
    .query(`SELECT * FROM symptoms WHERE symp_name ILIKE '%'||$1||'%'`, [
      sympByName,
    ])
    .then((results) => {
      const symptoms = results.rows;
      if (symptoms.length) {
        res.status(200).json(symptoms);
      } else {
        res
          .status(404)
          .send(
            `There is no symptom with the name ${sympByName} in the database`
          );
      }
    });
});

//GET sub_symps /api/symptoms/headache
routes.get("/subsymptoms/:symp_name", (req, res) => {
  const sympByName = req.params.symp_name;
  pool
    .query(
      `SELECT DISTINCT sub_symp FROM applications JOIN symptoms ON applications.symp_id = symptoms.id WHERE symptoms.symp_name ILIKE '%'||$1||'%'`,
      [sympByName]
    )
    .then((results) => {
      const subs = results.rows;
      if (subs.length) {
        res.status(200).json(subs);
      } else {
        res.status(404).send(`There is no sub-symptoms in the database`);
      }
    });
});

//GET all EOs /api/eo
routes.get("/eo", (req, res) => {
        pool.query('SELECT * FROM ess_oils').then((result) => {
            res.json(result.rows)
        });
    
        // if (req.query.prefix) {
        //     pool.query('SELECT * FROM ess_oils LIKE $1', [req.query.prefix + "%"]).then((result) => {
        //     res.json(result.rows)
        //     });
        // }
        // else{
        //     pool.query('SELECT * FROM ess_oils').then((result) => {
        //         res.json(result.rows);
        //         });
        // }
});
// GET EO by NAME /api/eo/lavender
routes.get("/eo/:eo_name", (req, res) => {
  const eoByName = req.params.eo_name;
  pool
    .query(`SELECT * FROM ess_oils WHERE eo_name ILIKE '%'||$1||'%'`, [
      eoByName,
    ])
    .then((results) => {
      const eo = results.rows;
      if (eo.length) {
        res.status(200).json(eo);
      } else {
        res
          .status(404)
          .send(
            `There is no essential oil with the name ${eoByName} in the database`
          );
      }
    });
});

//GET Symptoms by EO /api/symptom/lavender
routes.get("/symptom/:eo_name", (req, res) => {
  const sympByEO = req.params.eo_name;
  pool
    .query(
      `SELECT DISTINCT symp_name FROM ess_oils JOIN applications ON ess_oils.id = applications.eo_id JOIN symptoms ON applications.symp_id = symptoms.id WHERE eo_name ILIKE '%'||$1||'%'  ORDER BY symp_name
    `,
      [sympByEO]
    )
    .then((results) => {
      const symptoms = results.rows;
      if (symptoms.length) {
        res.status(200).json(symptoms);
      } else {
        res.status(404).send(`There are no symptoms in the database`);
      }
    });
});

//GET EOs by Symptom /api/eobysymp/headache
routes.get("/eobysymp/:symp_name", (req,res) => {
    const eoBySymp = req.params.symp_name;
    pool.query(`SELECT DISTINCT eo_name FROM symptoms JOIN applications ON symptoms.id = applications.symp_id JOIN ess_oils ON applications.eo_id = ess_oils.id WHERE symp_name ILIKE '%'||$1||'%' ORDER BY eo_name
    `, [eoBySymp])
    .then ( (results) => {
        const eos = results.rows;
        if (eos.length) {
            res.status(200).json(eos);
        } else {
            res.status(404).send(`There are no eos in the database`);
        }
        })
    })

//GET EOs by SubSymptom /api/eobysub/migrane
routes.get("/eobysub/:sub_symp", (req,res) => {
    const eoBySub = req.params.sub_symp;
    pool.query(`SELECT DISTINCT eo_name FROM symptoms JOIN applications ON symptoms.id = applications.symp_id JOIN ess_oils ON applications.eo_id = ess_oils.id WHERE sub_symp ILIKE '%'||$1||'%' ORDER BY eo_name
    `, [eoBySub])
    .then ( (results) => {
        const eos = results.rows;
        if (eos.length) {
            res.status(200).json(eos);
        } else {
            res.status(404).send(`There are no eos in the database`);
        }
        })
    })
// routes.get("symptoms/recommendation/", (req,res) => {
//   const eoBySymp = req.params.symp_name;
//   const eoBySub = req.params.sub_symp;


//     if (eoBySub) {
//       pool
//         .query(
//           `SELECT DISTINCT eo_name FROM symptoms JOIN applications ON symptoms.id = applications.symp_id JOIN ess_oils ON applications.eo_id = ess_oils.id WHERE sub_symp ILIKE '%'||$1||'%' OR sub_symp ILIKE '%'||$1||'%' ORDER BY eo_name`,
//           [eoBySub]
//         )
//         .then((results) => {
//           const eoSub = results.rows;
//           if (eoSub.length) {
//             res.status(200).json(eoSub);
//           } else {
//             res.status(404).send(`There are no eos in the database`);
//           }
//         });
//     }
//   }
// });

//   if (eoBySymp) {
//     pool.query(
//  `SELECT DISTINCT eo_name FROM symptoms JOIN applications ON symptoms.id = applications.symp_id JOIN ess_oils ON applications.eo_id = ess_oils.id WHERE symp_name ILIKE '%'||$1||'%' ORDER BY eo_name`,[eoBySymp])
//       .then((results) => {
//         const eos = results.rows;
//         if (eos.length) {
//           res.status(200).json(eos);
//         } else {
//           res.status(404).send(`There are no eos in the database`);
//         }
//       });

// GET Random EO by NAME /api/eo/lavender
routes.get("/eo/random/:id", (req, res) => {
    const eoRandomById = req.params.id;
    pool.query('SELECT * FROM ess_oils WHERE id = $1', [eoRandomById])
    .then ( (results) => {
        const eo = results.rows;
        if (eo.length) {
            res.status(200).json(eo);
        } else {
            res.status(404).send('There is no essential oil');
        }
        })
});
//     if (eoBySub) {
//       pool.query(
//     `SELECT DISTINCT eo_name FROM symptoms JOIN applications ON symptoms.id = applications.symp_id JOIN ess_oils ON applications.eo_id = ess_oils.id WHERE sub_symp ILIKE '%'||$1||'%' AND sub_symp NOT NULL ORDER BY eo_name`,
//           [eoBySub]).then((results) => {
//           const eoSub = results.rows;
//           if (eoSub.length) {
//             res.status(200).json(eoSub);
//           } else {
//             res.status(404).send(`There are no eos in the database`);
//           }
//         });
//     }
//   }
// });

module.exports = routes;
