import { ClientApi } from '../../services/api';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { Box, Button, TextField, Typography, styled } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

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
                    width: '100%',
                    color: 'blue',
                    textAlign:'right',
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
    [theme.breakpoints.down("tablet")]: {
        form: {
            width: '95%',
            margin: '20px 0 0 0',
            border: 'none',
            padding: '2.5%',
        },
    },
}));

export const EditClient = (prop) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { register, handleSubmit, getValues, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
          clientName: '',
          birthDate: '',
          clientEmail: '',
          address: {
            zipCode: '',
            country: '',
            county: '',
            city: '',
            streetAddress: '',
            addition: ''
          },
        },
      });
      
    const submitForm = async (data) => {
        // const dataBirthDate = new Date(data.birthDate);
        const dataBirthDate = getValues('birthDate');
        const birthDate = dataBirthDate.split('-');
        const newBirthDate = `${birthDate[2]}-${birthDate[1]}-${birthDate[0]}`;

        const dataUpdate = {
            name: data.clientName,
            birthDate:  newBirthDate,
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

        try {
            await ClientApi.updateClient(id, dataUpdate);
            navigate('/viewClients')
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                // Exibe a mensagem de erro retornada pelo servidor
                alert(error.response.data.message);
            } else {
                // Exibe uma mensagem de erro genérica
                alert('An error occurred while registering the client, try a different name and email');
            }
        }
    }
    const [inputValue, setInputValue] = useState('');

    const [state, setState] = useState({
        address: '',
        name: '',
        email: '',
        birthDate: '',
    });

    useEffect(() => {
        ClientApi.getClientById(id)
            .then(({ data }) => {
                const client = data.client;
                setState({
                    _id: client._id,
                    name: client.name,
                    email: client.email,
                    birthDate: client.birthDate,
                    address: client.address,
                });
            })
            .catch(function (error) {
                console.log(error.message);
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
        <Box>
            <EditStyles >
                <Box style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <h2>
                        <EditIcon />&ensp;Edit Client Data&ensp;<EditIcon />
                    </h2>

                </Box>
                <p>Change the fields you want to update and save your changes in the button below.</p>
                <Box
                    component="form"
                    onSubmit={handleSubmit(submitForm)}
                    sx={{
                        margin: '31px auto 30px auto',
                    }}>
                    <Box style={EditStyles.inputCustom}>
                        <TextField required name='clientName'
                            variant="standard"
                            htmlFor='clientName'
                            label='Client Name '
                            defaultValue={state.name}
                            {...register('clientName')} />
                        <Typography> {errors.clientName?.message} </Typography>
                    </Box>

                    <Box>
                        <TextField required name='birthDate'
                            value={inputValue} onChange={(e) => setInputValue(e.target.value)}
                            variant="standard"
                            htmlFor='birthDate'
                            label='Birth Date '
                            type='date'
                            {...register('birthDate')} />
                        <Typography> {errors.birthDate?.message} </Typography>
                    </Box>

                    <Box>
                        <TextField required name='clientEmail'
                            variant="standard"
                            htmlFor='clientEmail'
                            label='Email '
                            {...register('clientEmail')} />
                        <Typography> {errors.clientEmail?.message} </Typography>
                    </Box>

                    <h3>Client Address</h3>
                    <Box> 
                        <TextField required name='zipCode'
                            variant="standard"
                            htmlFor='zipCode'
                            label='Zip Code '
                            placeholder={state.address.zipCode}
                            {...register('zipCode')} />
                        <Typography> {errors.ziTypographyCode?.message} </Typography>
                    </Box>

                    <Box>
                        <TextField required name='country'
                            variant="standard"
                            htmlFor='country'
                            label='Country '
                            placeholder={state.address.country}
                            {...register('country')} />
                        <Typography> {errors.country?.message} </Typography>
                    </Box>

                    <Box>
                        <TextField required name='county'
                            variant="standard"
                            htmlFor='county'
                            label='County '
                            value={state.address.county}
                            {...register('county')} />
                        <Typography> {errors.county?.message} </Typography>
                    </Box>

                    <Box>
                        <TextField required name='city'
                            variant="standard"
                            htmlFor='city'
                            label='City '
                            placeholder={state.address.city}
                            {...register('city')} />
                        <Typography> {errors.city?.message} </Typography>
                    </Box>

                    <Box>
                        <TextField required name='streetAddress'
                            variant="standard"
                            htmlFor='streetAddress'
                            label='Street Address '
                            placeholder={state.address.streetAddress}
                            {...register('streetAddress')} />
                        <Typography> {errors.streetAddress?.message} </Typography>
                    </Box>

                    <Box>
                        <TextField name='addition'
                            variant="standard"
                            htmlFor='addition'
                            label='Apt, suite, etc (optional)'
                            placeholder={state.address.addition}
                            {...register('addition')} />
                        <Typography> {errors.addition?.message} </Typography>
                    </Box>

                    <Box style={{
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
                            <Box style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <SaveIcon />
                                Save
                                <SaveIcon />
                            </Box>
                        </Button>
                    </Box>
                </Box>
            </EditStyles>

        </Box>
    )
}