const express = require('express');
const router = express.Router();
const path = require('path');
/* data.employees = require('../../data/employees.json'); */
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

const data = {
    employees: []
};

router.use(bodyParser.json());

// Load data from the file initially
const filePath = path.join(__dirname, '../../data/employees.json');
fs.readFile(filePath, 'utf8', (err, jsonString) => {
    if (err) {
        console.log('Error reading file:', err);
        return;
    }
    try {
        data.employees = JSON.parse(jsonString);
    } catch (err) {
        console.log('Error parsing JSON:', err);
    }
});


router.route('/')
    .get((req, res) => {
        res.json(data.employees);
    })
    .post((req, res) => {
        // res.json({
        //     "firstname": req.body.firstname,
        //     "lastname": req.body.lastname
        // });
        // Add the new employee to the data
      const newEmployee = {
        "id": req.body.id,
        "firstname": req.body.firstname,
        "lastname": req.body.lastname
      };
      data.employees.push(newEmployee);

      // Update the employees.json file
      fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
        if (err) {
            console.log('Error writing file:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json(newEmployee);
        });
    })
    .put((req, res) => {
        res.json({
            "firstname": req.body.firstname,
            "lastname": req.body.lastname
        });
    })
    .delete((req, res) => {
        res.json({ "id": req.body.id })
    });


router.route('/:id')
    .get((req, res) => {
        res.json({ "id": req.params.id });
    });



module.exports = router;