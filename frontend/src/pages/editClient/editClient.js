// API
import { ClientApi } from '../../services/api';

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
    clientName: yup.string().min(2, "Client name should have 2 characters or more")
        .max(70, "Client name should be at maximum 70 characters long").required("Client name should be required"),
    birthDate: yup.date().max(today, "Client birth date must be earlier than today").required("Client birth date should be required"),
    clientEmail: yup.string().email("Please inset a valid email!").required("Client email should be required!"),

    // Address Validation
    country: yup.string().required("Client Country should be required!"),
    zipCode: yup.number().required("Client Zip Code should be required!"),
    county: yup.string().required("Client county should be required!"),
    city: yup.string().required("Client city name should be required!"),
    streetAddress: yup.string().required("Client street address should be required!"),
    addition: yup.string(),
})

const EditStyles = styled("section")(({ theme }) => ({
    width: '100%',
    color: 'white',

    form: {
        width: '426px',
        padding: '20px',
        border: '1px solid rgb(167, 167, 167)',
        borderRadius: '10px',
        background: 'grey',
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
            backgroundColor: 'black',
            borderRadius: '10px 5px',
            padding:'0 2px',
            div: {

                label: {
                    
                    // textAlign: 'center',
                    width: '100%',
                    // marginLeft: '-2px',
                    // opacity: '0.5',
                    color: 'blue',
                    textAlign:'right',
                    // lineHeight: '-350px'
                },
                div: {
                    opacity: '0.5',
                    background: '#F4F7FC',
                    marginBottom: '11px',
                    height: 'auto',
                    padding:'5px 2px',
                    borderRadius: '10px',


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


export const EditClient = () => {
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
            name: data.clientName,
            birthDate: newBirthDate,
            email: data.clientEmail,
            address: {
                zipCode: data.zipCode,
                country: data.country,
                county: data.county,
                city: data.city,
                streetAddress: data.streetAddress,
                addition: data.addition,
            },
        };
        await ClientApi.updateClient(id, dataUpdate);
        navigate('/viewClients')
    }

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
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [id]);

    useEffect(() => {
        let defaultValues = {};
        defaultValues.clientName = state.name;
        defaultValues.clientEmail = state.email;
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
            <EditStyles >
                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <h2>
                        <EditIcon />&ensp;Edit Client Data&ensp;<EditIcon />
                    </h2>

                </div>
                <p>Change the fields you want to update and save your changes in the button below.</p>
                <Box
                    component="form"
                    onSubmit={handleSubmit(submitForm)}
                    sx={{
                        margin: '31px auto 30px auto',
                    }}>
                    <div style={EditStyles.inputCustom}>
                        <TextField 
                            variant="standard"
                            required
                            htmlFor='clientName'
                            name='clientName'
                            label='Client Name '
                            // helperText= 'Client Name'
                            defaultValue={state.name}
                            {...register('clientName')} />
                        <p> {errors.clientName?.message} </p>
                    </div>

                    <div>
                        <TextField
                            variant="standard"
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
                            variant="standard"
                            required
                            htmlFor='clientEmail'
                            name='clientEmail'
                            label='Email '
                            {...register('clientEmail')} />
                        <p> {errors.clientEmail?.message} </p>
                    </div>

                    <h3>Client Address</h3>
                    <div>
                        <TextField
                            variant="standard"
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
                            variant="standard"
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
                            variant="standard"
                            required
                            htmlFor='county'
                            name='county'
                            label='County '
                            value={state.address.county}
                            {...register('county')} />
                        <p> {errors.county?.message} </p>
                    </div>

                    <div>
                        <TextField
                            variant="standard"
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
                            variant="standard"
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
                            variant="standard"
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
                        <Button onClick={() => navigate(`/client/${id}`)}
                            title={`Back to ${state.name} page`}>
                            <KeyboardDoubleArrowLeftIcon />
                            Back
                        </Button>
                        <Button
                            variant="contained"
                            type='submit'
                            title='Update client data'
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
            </EditStyles>

        </div>
    )
}