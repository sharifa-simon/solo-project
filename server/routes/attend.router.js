const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    console.log('GET /api/attend/');
    pool.query('SELECT * from "attendance" ').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /api/attend', error)
        res.sendStatus(500);
    });
})


router.post('/', (req, res) => {
    const newPractice = req.body;
    console.log('new skater',req.body);
    const queryText = `INSERT INTO attendance ("skater_id", "attend_type")
                      VALUES ($1, $2)`;
    const queryValues = [
        newPractice.skater_id,
        newPractice.attend_type,
    ];
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(201); })
        .catch((err) => {
            console.log('Error completing INSERT skater query', err);
            res.sendStatus(500);
        });
});

module.exports = router;