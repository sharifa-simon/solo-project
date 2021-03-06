const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

const router = express.Router();


router.get('/:date', rejectUnauthenticated, (req, res) => {
   // asks database for formatted dates for a skater by their id
    pool.query(`SELECT "attend_type", to_char("date",'MM-DD-YYYY') as "date", "id", "skater_id" 
    FROM "attendance" WHERE skater_id=$1 ORDER BY "date" DESC;`, [req.params.date]).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /api/attend', error)
        res.sendStatus(500);
    });
})

router.post('/', rejectUnauthenticated, (req, res) => {
    // adds the selected attendance status(on skates, off skates, no), from drop down list in Roster component, to database
    const newPractice = req.body;
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

router.delete('/:id', rejectUnauthenticated, (req, res) => {
    // removes user selected attendance date from database
    const queryText = 'DELETE FROM attendance WHERE id=$1';
    console.log('this thing', req.params.id)
    pool.query(queryText, [req.params.id])
        .then(() => { res.sendStatus(200); })
        .catch((err) => {
            console.log('Error completing DELETE skater query', err);
            res.sendStatus(500);
        });
});

module.exports = router;