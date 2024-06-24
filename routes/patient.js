const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patient_controller');
const patient = require('../models/Patient');
const passport = require('passport');

// -------------------route for create patient for authorized doctor-----------------//
router.post('/register', patientController.create)

// ---------------------router for access all report---------------------------------//
router.get('/:id/all_reports',  patientController.allReports);


// -----------------create report for patient(patient_id) ----------------------------//
router.post("/:id/create-report",  patientController.createReport);


module.exports = router;