const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get(`/:teamId`, (req, res) => {
    //brings teams from database to client side
    console.log('GET /api/roster');
    pool.query(`SELECT * FROM "skaters" 
    WHERE "team_id"=$1;`, [req.params.teamId]).then((result) => {
        res.send(result.rows);
        console.log('GET /api/roster', result.rows);
    }).catch((error) => {
        console.log('Error GET /api/roster', error)
        res.sendStatus(500);
    });
});


router.post('/', (req, res) => {
    //takes inputted value from addSkater page and adds to the database
    const newSkater = req.body;
    console.log('new skater', req.body);
    const queryText = `INSERT INTO skaters ("skater_name", "team_id", "number", "position")
                      VALUES ($1, $2, $3, $4)`;
    const queryValues = [
        newSkater.name,
        newSkater.team_id,
        newSkater.number,
        newSkater.position,
    ];
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(201); })
        .catch((err) => {
            console.log('Error completing INSERT skater query', err);
            res.sendStatus(500);
        });
});

router.delete('/:id', (req, res) => {
    //removes user selected skater from database
    const queryText = 'DELETE FROM skaters WHERE id=$1';
    pool.query(queryText, [req.params.id])
        .then(() => { res.sendStatus(200); })
        .catch((err) => {
            console.log('Error completing DELETE skater query', err);
            res.sendStatus(500);
        });
});

module.exports = router;