const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

const router = express.Router();


router.get('/:date', rejectUnauthenticated, (req, res) => {
    console.log('GET /api/attend/');
    pool.query('SELECT * from "attendance" WHERE skater_id=$1;', [req.params.date]).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /api/attend', error)
        res.sendStatus(500);
    });
})


router.post('/',  rejectUnauthenticated,(req, res) => {
    const newPractice = req.body;
    console.log('new attendance',req.body);
    const queryText = `INSERT INTO attendance ("skater_id", "attend_type")
                      VALUES ($1, $2)`;
    const queryValues = [
        newPractice.skater_id,
        newPractice.event,
    ];
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(201); })
        .catch((err) => {
            console.log('Error completing INSERT skater query', err);
            res.sendStatus(500);
        });
});

router.delete('/:id',  rejectUnauthenticated, (req, res) => {
    //removes user selected attendance date from database
    const queryText = 'DELETE FROM attendance WHERE id=$1';
    pool.query(queryText, [req.params.id])
        .then(() => { res.sendStatus(200); })
        .catch((err) => {
            console.log('Error completing DELETE skater query', err);
            res.sendStatus(500);
        });
});
module.exports = router;