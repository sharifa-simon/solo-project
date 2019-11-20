const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    //brings teams from database
    pool.query('SELECT * FROM "teams";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /api/teams', error);
        res.sendStatus(500);
    });
});


router.post('/', (req, res) => {
    //takes inputted value from addTeam page and adds to the database


    const newTeam = req.body;
    console.log(req.body);
    const queryText = `INSERT INTO teams ("team_name")
                      VALUES ($1)`;
    const queryValues = [
        newTeam,
    ];
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(201); })
        .catch((err) => {
            console.log('Error completing INSERT team query', err);
            res.sendStatus(500);
        });
});

module.exports = router;