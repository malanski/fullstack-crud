const express = require('express');
const { Router } = require('express');
const UserModel = require('../models/User');

const router = express.Router();

router.post('/patients', async (req, res) => {
    try {
        const { email } = req.body;
        const patient = await UserModel.findOne({ email });

        if (patient) {
            return res.status(400).json({
                error: true,
                message: "A patients already exists with this email!"
            });
        };

        const patients = await UserModel.create(req.body);

        res.status(200).json({
            patient,
            error: false,
            message: "Patient registration successfully!"
        });
    } catch (error) {
        res.status(400).json({
            error: true,
            message: error.message
        })
    }
});

router.get('/patients', async (req, res) => {
    try {
        // const { name } = req.body;

        const patients = await UserModel.find();

        if (!patients) {
            return res.status(400).json({
                error: true,
                message: "This patient is not register!"
            });
        }
        res.status(200).json({
            patients,
            error: false,
            message: "The patient has been found!"
        });

    } catch (error) {
        res.status(400).json({
            error: true,
            message: error.message
        });
    }
});

router.get('/patients/:id', async(req, res) => {
    try {
        const  _id  = req.params.id;

        const patient = await UserModel.findOne({ _id });

        if (!patient) {
            return res.status(400).json({
                error: true,
                message: 'The patient is not register!'
            }); 
        }
        
        res.status(200).json({
            patient,
            error: false,
            message: 'The patient has been found!'
        }); 

    } catch (error) {
        res.status(400).json({
            error: true,
            message: error.message
        });
    }   
});

router.patch('/patients/:id', async (req, res) => {
    try {
        const  _id  = req.params.id;

        let patient = await UserModel.findOne({ _id });

        if (!patient) {
            return res.status(400).json({
                error: true,
                message: "This patient is not register!"
            });
        }
        await UserModel.findOneAndUpdate({ _id }, req.body);

        patient = await UserModel.findOne({ _id });

        res.status(200).json({
            patient,
            error: false,
            message: "The patient has been updated successfully"
        })
        
    } catch (error) {
        res.status(400).json({
            error: true,
            message: error.message
        });
    }
})

router.delete('/patients/:id', async(req, res) => {
    try {
        const _id  = req.params.id;

        const patient = await UserModel.findOne({ _id });

        if(!patient) {
            return res.status(400).json({
                error: true,
                message: "Patient not found"
            })
        }
        await UserModel.deleteOne({_id});

        res.status(200).json({
            patient,
            error: false,
            message: "Patient deleted successfully!"
        })

    } catch (error) {
        res.status(400).json({
            error: true,
            message: error.message 
        });
    }
})

module.exports = router;