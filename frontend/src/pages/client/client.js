import { ClientApi } from '../../services/api';

import EditIcon from '@mui/icons-material/Edit';
import PersonIcon from '@mui/icons-material/Person';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

import { Button, Typography, styled } from '@mui/material';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const modalStyle = {
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


const ClientStyles = styled("div")(({ theme }) => ({
   
    div: {
        border: '1px solid #3497DE',
        borderRadius: '10px',
        margin: '10px auto',
        minWidth: '300px',
        maxWidth: '340px',
        background: '#EBF7FF',

        h2: {
            padding: '0 10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#d6efff',
            borderRadius: '10px',
            width: '90%',
            margin: '10px auto',
        },
        div:{
            textAlign: 'left',
            padding: '0 10px',
            span:{
                textAlign: 'right',
            },
            div:{
                span:{
                    textAlign: 'center',
                    background: 'white',
                    padding: '10px',
                    borderRadius: '8px',
                    width: '100%',
                    display: 'block'

                },
            },
            ul: {
                padding: '0',
    
                li: {
                    listStyle: 'none',
                    margin: '10px 0',
                    paddingBottom: '5px',
                    height: 'auto',
                    borderRadius: '5px',
                    maxWidth: '100%',
                    backgroundColor: 'white',
                }
            },
            section: {
                display: 'block',
                backgroundColor: '#d6efff',
                borderRadius: '10px',
                width: '100%',
                margin: '10px auto',
                padding: '5px',
                a: {
                    display: 'flex',
                    alignItems: 'center',
                }
            }
        },
    },
    [theme.breakpoints.up("mobile")]: {
    },
}));

export const Client = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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

    return (
        <ClientStyles>
            <Box className='client'>
                <Typography component='h2'>
                    <PersonIcon /> Client Data <PersonIcon />
                </Typography>
                <Box className='client-data'>
                    <hr />
                    <Typography component='span' className='client-right'>
                        <b>Id:</b> {state._id}
                    </Typography>

                    <Box>
                        <Typography>Name:</Typography>
                        <Typography component='span' className="client-name">
                            {/* <b>{state.name[0].toUpperCase() + state.name.substring(1)}</b> */}
                            <b>{state.name.toUpperCase()}</b>
                        </Typography>
                    </Box>
                    <Typography className='client-right'>
                        Birth date: <b>{state.birthDate}</b>
                    </Typography>
                    <hr />
                    <Box>
                        <Typography>Email: </Typography>
                        <Typography component='span' className="client-email">
                            {state.email}
                        </Typography>
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
                    <Box component='section' className='client-actions'>
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
                            <Box sx={modalStyle}>
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
                                    <Box modalStyle={{ display: 'flex', justifyContent: 'space-between' }}>
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
        </ClientStyles>
    );
}