import './patient.scss';

// API
import { PatientApi } from '../../services/api';

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


export const Patient = () => {
    const { id } = useParams();

    const navigate = useNavigate();

    const [state, setState] = useState({
        address: '',
        name: '',
        email: '',
        birthDate: '',
    });

    useEffect(() => {
        PatientApi.getPatientById(id)
            .then((response) => {
                const patient = response.data.patient;
                setState({
                    _id: patient._id,
                    name: patient.name,
                    email: patient.email,
                    birthDate: patient.birthDate,
                    address: patient.address,
                });
            }).catch(function (error) {
                console.log(error);
            });
    }, [id]);

    async function deletePatient(_id) {
       await PatientApi.deletePatient(id);
       navigate('/viewPatients');
    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div className="patient">
            <h2><PersonIcon /> Patient Data <PersonIcon /></h2>

            <div className="patient-data">
                <hr />
                <p className='patient-right'><b>Id:</b> {state._id}</p>

                <div>
                    <p>Name:</p>
                    <p className="patient-name">
                        {/* <b>{state.name[0].toUpperCase() + state.name.substring(1)}</b> */}
                        <b>{state.name.toUpperCase()}</b>
                    </p>
                </div>

                <p className='patient-right'>
                    Birth date: <b>{state.birthDate}</b>
                </p>
                <hr />

                <div>
                    <p>Email:</p>
                    <p className="patient-email"> {state.email}</p>
                </div>
                <hr />

                <p>Address:</p>
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
                <div className='patient-actions'>
                    <Button>
                        <Link to='/viewPatients'><KeyboardDoubleArrowLeftIcon />Back</Link>
                    </Button>

                    <Button onClick={handleOpen} color="error">
                        <DeleteForeverTwoToneIcon />Delete
                    </Button>

                    <Button onClick={() => navigate(`/editPatient/${id}`)} title={state.name + " Data"}>
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
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Are you sure you want to <big>Delete</big> this patient record?
                                <br /><br />
                                Name: {state.name}
                                <br /><br />
                                Id: {state._id}
                                <br /><br />

                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                                    <Button sx={{ width: '176px', height: '40px', margin: '10px 10px 0 0' }} variant="contained"
                                        onClick={() => deletePatient()}
                                        color="success"
                                        title="Delete patient record">
                                        <DeleteForeverTwoToneIcon />
                                        Confirm Delete
                                    </Button>

                                    <Button sx={{ width: '176px', height: '40px', margin: '10px 0 0 0' }} variant="outlined"
                                        color="error"
                                        onClick={handleClose}
                                        title="Cancel delete">
                                        Cancel
                                    </Button>
                                </div>

                            </Typography>
                        </Box>
                    </Modal>
                </div>
            </div>
        </div>
    );
}