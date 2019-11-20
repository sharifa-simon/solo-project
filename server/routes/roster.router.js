const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/:id', (req, res) => {
    //brings teams from database to client side
    console.log('GET /api/details');
    pool.query(`SELECT * FROM "skaters" WHERE "team_id"=$1`, [req.params.id]).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /api/rosters', error)
        res.sendStatus(500);
    });
});


// router.post('/', (req, res) => {
//     //takes inputted value from addTeam page and adds to the database
//     const newTeam = req.body.team;
//     console.log('new team',req.body);
//     const queryText = `INSERT INTO teams ("team_name")
//                       VALUES ($1)`;
//     const queryValues = [
//         newTeam,
//     ];
//     pool.query(queryText, queryValues)
//         .then(() => { res.sendStatus(201); })
//         .catch((err) => {
//             console.log('Error completing INSERT team query', err);
//             res.sendStatus(500);
//         });
// });

// router.delete('/:id', (req, res) => {
//     //removes user selected team from database
//     const queryText = 'DELETE FROM teams WHERE id=$1';
//     pool.query(queryText, [req.params.id])
//       .then(() => { res.sendStatus(200); })
//       .catch((err) => {
//         console.log('Error completing DELETE team query', err);
//         res.sendStatus(500);
//       });
//   });

module.exports = router;