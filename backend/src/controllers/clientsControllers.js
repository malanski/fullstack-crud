const express = require('express');
const { Router } = require('express');
const ClientModel = require('../models/Client');

const router = express.Router();


router.post('/client', async (req, res) => {
    try {
        const { email } = req.body;
        let client = await ClientModel.findOne({ email });

        if (client) {
            return res.status(400).json({
                error: true,
                message: "A client already exists with this email!"
            });
        };

        client = await ClientModel.create(req.body);

        res.status(201).json({
            client,
            error: false,
            message: "Client registration successfully!"
        });
    } catch (error) {
        res.status(400).json({
            error: true,
            message: error.message
        })
    }
});

router.get('/clients', async (req, res) => {
    try {
        const clients = await ClientModel.find();

        if (!clients) {
            return res.status(400).json({
                error: true,
                message: "There is no client no register!"
            });
        }
        res.status(200).json({
            clients,
            error: false,
            message: "The client has been found!"
        });

    } catch (error) {
        res.status(400).json({
            error: true,
            message: error.message
        });
    }
});

router.get('/client/:id', async(req, res) => {
    try {
        const  _id  = req.params.id;

        const client = await ClientModel.findOne({ _id });

        if (!client) {
            return res.status(400).json({
                error: true,
                message: 'The client is not register!'
            }); 
        }
        
        res.status(200).json({
            client,
            error: false,
            message: 'The client has been found!'
        }); 

    } catch (error) {
        res.status(400).json({
            error: true,
            message: error.message
        });
    }   
});

router.patch('/client/:id', async (req, res) => {
    try {
        const  _id  = req.params.id;

        let client = await ClientModel.findOne({ _id });

        if (!client) {
            return res.status(400).json({
                error: true,
                message: "This client is not register!"
            });
        }
        
        client = await ClientModel.findOneAndUpdate({ _id }, req.body);

        // client = await ClientModel.findOne({ _id });

        res.status(200).json({
            client,
            error: false,
            message: "The client has been updated successfully"
        })
        
    } catch (error) {
        res.status(400).json({
            error: true,
            message: error.message
        });
    }
})

router.delete('/client/:id', async(req, res) => {
    try {
        const _id  = req.params.id;

        const client = await ClientModel.findOne({ _id });

        if(!client) {
            return res.status(400).json({
                error: true,
                message: "Client not found"
            })
        }
        await ClientModel.deleteOne({_id});

        res.status(200).json({
            client,
            error: false,
            message: "Client deleted successfully!"
        })

    } catch (error) {
        res.status(400).json({
            error: true,
            message: error.message 
        });
    }
})

module.exports = router;