import './client.scss';

// API
import { ClientApi } from '../../services/api';

// Icons
import EditIcon from '@mui/icons-material/Edit';
import PersonIcon from '@mui/icons-material/Person';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

// Material UI
import { Button, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

// React and Router-Dom
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "auto",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


export const Client = () => {
    const { id } = useParams();

    const navigate = useNavigate();

    const [state, setState] = useState({
        address: '',
        name: '',
        email: '',
        birthDate: '',
    });

    useEffect(() => {
        ClientApi.getClientById(id)
            .then((response) => {
                const client = response.data.client;
                setState({
                    _id: client._id,
                    name: client.name,
                    email: client.email,
                    birthDate: client.birthDate,
                    address: client.address,
                });
            }).catch(function (error) {
                console.log(error);
            });
    }, [id]);

    async function deleteClient(_id) {
       await ClientApi.deleteClient(id);
       navigate('/viewClients');
    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Box className="client">
            <Typography component='h2'><PersonIcon /> Client Data <PersonIcon /></Typography>

            <Box className="client-data">
                <hr />
                <Typography className='client-right'><b>Id:</b> {state._id}</Typography>

                <Box>
                    <Typography>Name:</Typography>
                    <Typography className="client-name">
                        {/* <b>{state.name[0].toUpperCase() + state.name.substring(1)}</b> */}
                        <b>{state.name.toUpperCase()}</b>
                    </Typography>
                </Box>

                <Typography className='client-right'>
                    Birth date: <b>{state.birthDate}</b>
                </Typography>
                <hr />

                <Box>
                    <Typography>Email:</Typography>
                    <Typography className="client-email"> {state.email}</Typography>
                </Box>
                <hr />

                <Typography>Address:</Typography>
                <ul>
                    <li>
                        &ensp;
                        Zip Code:<br />&ensp;&ensp;&ensp;
                        {state.address.zipCode}
                    </li>
                    <li>
                        &ensp;
                        Country:<br />&ensp;&ensp;&ensp;
                        {state.address.country}
                    </li>
                    <li>
                        &ensp;
                        State:<br />&ensp;&ensp;&ensp;
                        {state.address.county}
                    </li>
                    <li>
                        &ensp;
                        City:<br />&ensp;&ensp;&ensp;
                        {state.address.city}
                    </li>
                    <li>
                        &ensp;Street Address:<br />&ensp;&ensp;&ensp;
                        {state.address.streetAddress}
                    </li>
                    <li>
                        &ensp;
                        Apt, suit, etc:<br />&ensp;&ensp;&ensp;
                        {state.address.addition}
                    </li>
                </ul>
                <br />
                <hr />
                <Box className='client-actions'>
                    <Button>
                        <Link to='/viewClients'><KeyboardDoubleArrowLeftIcon />Back</Link>
                    </Button>

                    <Button onClick={handleOpen} color="error">
                        <DeleteForeverTwoToneIcon />Delete
                    </Button>

                    <Button onClick={() => navigate(`/editClient/${id}`)} title={state.name + " Data"}>
                        <EditIcon />Edit
                    </Button>

                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description">
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Waring
                            </Typography>
                            <Box id="modal-modal-description" sx={{ mt: 2 }}>
                                Are you sure you want to <big>Delete</big> this client record?
                                <br /><br />
                                Name: {state.name}
                                <br /><br />
                                Id: {state._id}
                                <br /><br />

                                <Box style={{ display: 'flex', justifyContent: 'space-between' }}>

                                    <Button sx={{ width: '176px', height: '40px', margin: '10px 10px 0 0' }} variant="contained"
                                        onClick={() => deleteClient()}
                                        color="success"
                                        title="Delete client record">
                                        <DeleteForeverTwoToneIcon />
                                        Confirm Delete
                                    </Button>

                                    <Button sx={{ width: '176px', height: '40px', margin: '10px 0 0 0' }} variant="outlined"
                                        color="error"
                                        onClick={handleClose}
                                        title="Cancel delete">
                                        Cancel
                                    </Button>
                                </Box>

                            </Box>
                        </Box>
                    </Modal>
                </Box>
            </Box>
        </Box>
    );
}