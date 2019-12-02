const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

const router = express.Router();



router.get('/:profileId',  rejectUnauthenticated, (req, res) => {
    // gets all available skater data from skater table database
    console.log('GET /api/profile/');
    pool.query('SELECT * from "skaters" WHERE id=$1;', [req.params.profileId]).then((result) => {
        res.send(result.rows[0]);
    }).catch((error) => {
        console.log('Error GET /api/profile', error)
        res.sendStatus(500);
    });
})

router.put('/edit/:id', rejectUnauthenticated, (req, res) => {
    const newProfile = req.body;
    console.log('PUT /api/profile/edit', newProfile);
    const queryText = `UPDATE skaters
    SET "skater_name"=$2, "team_id"=$3, "number"=$4, "position"=$5
    WHERE id=$1;`;
    const queryValues = [
        newProfile.id,
        newProfile.skater_name,
        newProfile.team_id,
        newProfile.number,
        newProfile.position,
    ];
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(201); })
        .catch((err) => {
            console.log('Error completing UPDATE skater query', err);
            res.sendStatus(500);
        });
});




module.exports = router;