const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


router.get('/', rejectUnauthenticated, (req, res) => {
    //brings teams from database to client side
    pool.query('SELECT * FROM "teams";').then((result)=>{
        const createdTeam = [];
        for (let i = 0; i < result.rows.length; i++) {
            
            if (result.rows[i].created_id === req.user.id){
                createdTeam.push(result.rows[i])
            }
            console.log('CREATED TEAM', createdTeam);
        }
        res.send(createdTeam)
    })    
    .catch((error) => {
        console.log('Error GET /api/teams', error);
        res.sendStatus(500);
    });
});


router.post('/', rejectUnauthenticated, (req, res) => {
    //takes inputted value from addTeam page and adds to the database
    const newTeam = req.body.team;
    const byUser = req.user.id
    console.log('new team', req.body);
    console.log('new USER team', req.user);
    const queryText = `INSERT INTO teams ("team_name", "created_id")
                      VALUES ($1, $2)`;
    const queryValues = [
        newTeam,
        byUser,
    ];
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(201); })
        .catch((err) => {
            console.log('Error completing INSERT team query', err);
            res.sendStatus(500);
        });
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
    //removes user selected team from database
    const queryText = `
    WITH tmp AS (SELECT "team_id" FROM "skaters" WHERE "team_id"=$1),
    upd AS (UPDATE "skaters" SET "team_id" = NULL WHERE "team_id"=$1)
DELETE FROM "teams" 
  WHERE "id" IN (SELECT "team_id" FROM tmp)`;
    pool.query(queryText, [req.params.id])
        .then(() => { res.sendStatus(200); })
        .catch((err) => {
            console.log('Error completing DELETE team query', err);
            res.sendStatus(500);
        });
});

module.exports = router;