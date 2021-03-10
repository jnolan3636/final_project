const express = require('express');
const routes = express.Router();
const pool = require('./connection');
// GET /routes
routes.get("/symptoms", (req, res) => {
    pool.query('SELECT * FROM conditions').then((result) => {
        res.json(result.rows)
    });

    if (req.query.prefix) {
        pool.query('SELECT * FROM conditions LIKE $1', [req.query.prefix + "%"]).then((result) => {
        res.json(result.rows)
        });
    }
    else{
        pool.query('SELECT * FROM conditions').then((result) => {
            res.json(result.rows);
            });
    }
});

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
    module.exports = routes;

    
    //    let maxPrice = parseFloat(req.query.maxPrice) 
    //     if (maxPrice) {
    //         pool.query('SELECT * FROM shopping_cart WHERE price <= $1', [maxPrice]).then((result) => {
    //                 res.json(result.rows);
    //         });
    //     }
        
       
    
    //     if (req.query.pageSize) {
    //         pool.query('SELECT * FROM shopping_cart LIMIT $1', [req.query.pageSize]).then((result) => {
    //         res.json(result.rows)
    //         });
    //     }
    //         else{
    //             pool.query('SELECT * FROM shopping_cart').then((result) => {
    //                 res.json(result.rows);
    //                 });
    //         }
    // });
    
    // // GET /cart-items/:id
    // cart.get("/:id", (req, res) => {
    //    let id = parseInt(req.params.id);
    //     pool.query('SELECT * FROM shopping_cart WHERE id = $1', [id]).then((result) => {
    //         res.json(result.rows)
    //     });
    
    //     // if (!id) res.status(404).send('ID Not Found')
    // });
    

    
