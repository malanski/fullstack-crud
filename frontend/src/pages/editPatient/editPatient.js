// API
import { PatientApi } from '../../services/api';

// Icons
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

// Material UI
import { Box, Button, TextField, styled } from '@mui/material';

// React Hook-Form and Router-Dom
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Yup
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';


// Yup
const today = new Date();

// Form validation schema
const schema = yup.object().shape({
    patientName: yup.string().min(2, "Patient name should have 2 characters or more")
        .max(70, "Patient name should be at maximum 70 characters long").required("Patient name should be required"),
    birthDate: yup.date().max(today, "Patient birth date must be earlier than today").required("Patient birth date should be required"),
    patientEmail: yup.string().email("Please inset a valid email!").required("Patient email should be required!"),

    // Address Validation
    country: yup.string().required("Patient Country should be required!"),
    zipCode: yup.number().required("Patient Zip Code should be required!"),
    county: yup.string().required("Patient county should be required!"),
    city: yup.string().required("Patient city name should be required!"),
    streetAddress: yup.string().required("Patient street address should be required!"),
    addition: yup.string(),
})


const FormStyles = styled("section")(({ theme }) => ({
    width: '100%',
    color: 'white',

    form: {
        width: '426px',
        padding: '20px',
        border: '1px solid rgb(167, 167, 167)',
        borderRadius: '10px',
        background: '#d9ecf9',
        h3: {
            textAlign: 'left',
        },
        p: {
            color: 'red',
            fontSize: '20px',
        },

        div: {
            width: '100%',
            position: 'relative',
            div: {
                label: {
                    textAlign: 'center',
                    width: '100%',
                    marginLeft: '-2px',
                    borderRadius: '10px 10px 0 0',
                    background: '#F4F7FC',
                },
                div: {
                    background: '#F4F7FC',
                    marginBottom: '11px',
                    height: 'auto',
                },
            },
        }
    },

    // Responsie Styles
    [theme.breakpoints.down("tablet")]: {
        form: {
            width: '95%',
            margin: '20px 0 0 0',
            border: 'none',
            padding: '2.5%',
        },
    },
}));


export const EditPatient = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const {
        register,
        formState: { errors },
        handleSubmit,
        getValues,
        reset
    } = useForm({ resolver: yupResolver(schema) });

    const submitForm = async (data) => {
        const dataBirthDate = getValues('birthDate');
        const birthDate = dataBirthDate.split('-');
        const newBirthDate = `${birthDate[2]}-${birthDate[1]}-${birthDate[0]}`;

        const dataUpdate = {
            name: data.patientName,
            birthDate: newBirthDate,
            email: data.patientEmail,
            address: {
                zipCode: data.zipCode,
                country: data.country,
                county: data.county,
                city: data.city,
                streetAddress: data.streetAddress,
                addition: data.addition,
            },
        };
        await PatientApi.updatePatient(id, dataUpdate);
        navigate('/viewPatients')
    }

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
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [id]);

    useEffect(() => {
        let defaultValues = {};
        defaultValues.patientName = state.name;
        defaultValues.patientEmail = state.email;
        defaultValues.birthDate = state.birthDate;
        defaultValues.zipCode = state.address.zipCode;
        defaultValues.country = state.address.country;
        defaultValues.county = state.address.county;
        defaultValues.city = state.address.city;
        defaultValues.streetAddress = state.address.streetAddress;
        defaultValues.addition = state.address.addition;
        reset({ ...defaultValues });
    }, [reset, state]);

    return (
        <div>
            <FormStyles >
                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <h2>
                        <EditIcon />&ensp;Edit Patient Data&ensp;<EditIcon />
                    </h2>

                </div>
                <p>Change the fields you want to update and save your changes in the button below.</p>
                <Box
                    component="form"
                    onSubmit={handleSubmit(submitForm)}
                    sx={{
                        margin: '31px auto 30px auto',
                    }}>
                    <div>
                        <TextField
                            variant="outlined"
                            required
                            htmlFor='patientName'
                            name='patientName'
                            label='Patien Name '
                            {...register('patientName')} />
                        <p> {errors.patientName?.message} </p>
                    </div>

                    <div>
                        <TextField
                            variant="outlined"
                            required
                            htmlFor='birthDate'
                            name='birthDate'
                            label='Birth Date '
                            type='date'
                            {...register('birthDate')} />
                        <p> {errors.birthDate?.message} </p>
                    </div>

                    <div>
                        <TextField
                            variant="outlined"
                            required
                            htmlFor='patientEmail'
                            name='patientEmail'
                            label='Email '
                            {...register('patientEmail')} />
                        <p> {errors.patientEmail?.message} </p>
                    </div>

                    <h3>Patient Address</h3>
                    <div>
                        <TextField
                            variant="outlined"
                            required
                            htmlFor='zipCode'
                            name='zipCode'
                            label='Zip Code '
                            placeholder={state.address.zipCode}
                            {...register('zipCode')} />
                        <p> {errors.zipCode?.message} </p>
                    </div>

                    <div>
                        <TextField
                            variant="outlined"
                            required
                            htmlFor='country'
                            name='country'
                            label='Country '
                            placeholder={state.address.country}
                            {...register('country')} />
                        <p> {errors.country?.message} </p>
                    </div>

                    <div>
                        <TextField
                            variant="outlined"
                            required
                            htmlFor='county'
                            name='county'
                            label='County '
                            placeholder={state.address.county}
                            {...register('county')} />
                        <p> {errors.county?.message} </p>
                    </div>

                    <div>
                        <TextField
                            variant="outlined"
                            required
                            htmlFor='city'
                            name='city'
                            label='City '
                            placeholder={state.address.city}
                            {...register('city')} />
                        <p> {errors.city?.message} </p>
                    </div>

                    <div>
                        <TextField
                            variant="outlined"
                            required
                            htmlFor='streetAddress'
                            name='streetAddress'
                            label='Street Address '
                            placeholder={state.address.streetAddress}
                            {...register('streetAddress')} />
                        <p> {errors.streetAddress?.message} </p>
                    </div>

                    <div>
                        <TextField
                            variant="outlined"
                            htmlFor='addition'
                            name='addition'
                            label='Apt, suite, etc (optional)'
                            placeholder={state.address.addition}
                            {...register('addition')} />
                        <p> {errors.addition?.message} </p>
                    </div>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Button onClick={() => navigate(`/patient/${id}`)}
                            title={`Back to ${state.name} page`}>
                            <KeyboardDoubleArrowLeftIcon />
                            Back
                        </Button>
                        <Button
                            variant="contained"
                            type='submit'
                            title='Update patient data'
                            sx={{
                                width: '183px',
                                margins: '0 auto',
                                fontSize: '23px',
                                fontWeight: '700',
                                background: '#2B93DD'
                            }}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <SaveIcon />
                                Save
                                <SaveIcon />
                            </div>
                        </Button>
                    </div>
                </Box>
            </FormStyles>

        </div>
    )
}