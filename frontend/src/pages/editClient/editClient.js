import { ClientApi } from '../../services/api';
import EditIcon from '@mui/icons-material/Edit';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { Box, Button, CircularProgress, TextField, Typography, styled } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const today = new Date();
const minBirthDate = new Date();
        minBirthDate.setFullYear(minBirthDate.getFullYear() - 18); // Subtract 18 years from today's date

// Form validation schema
const schema = yup.object().shape({
    clientName: yup.string().min(2, "Client name should have 2 characters or more")
        .max(70, "Client name should be at maximum 70 characters long").required("Client name should be required")
        .matches(/\D/, "Client name cannot be composed only of numbers"),
        
    birthDate: yup.date().min(minBirthDate, "Client must be at least 18 years old")
        .max(today, "Client birth date must be earlier than today")
        .required("Client birth date should be required"),

    clientEmail: yup.string().email("Please inset a valid email!").required("Client email should be required!"),
    // Address Validation
    country: yup.string().required("Client Country should be required!")
        .matches(/\D/, "Client Country cannot be composed only of numbers"),
    zipCode: yup.number().required("Client Zip Code should be required!"),
    county: yup.string().required("Client county should be required!")
        .matches(/\D/, "Client County cannot be composed only of numbers"),
    city: yup.string().required("Client city name should be required!")
        .matches(/\D/, "Client City cannot be composed only of numbers"),
    streetAddress: yup.string().required("Client street address should be required!")
        .matches(/\D/, "Client Street address cannot be composed only of numbers"),
    addition: yup.string(),
})

const EditStyles = styled("section")(({ theme }) => ({
    form: {
        div: {
            width: '100%',
            backgroundColor: 'black',
            borderRadius: '10px 5px',
            padding: '0 2px',
            div: {
                label: {
                    width: '100%',
                    color: 'blue',
                    textAlign: 'right',
                },
                div: {
                    opacity: '0.5',
                    background: '#F4F7FC',
                    marginBottom: '11px',
                    height: 'auto',
                    padding: '5px 2px',
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

async function validateYupSchema(schema, data) {
    try {
        await schema.validate(data, { abortEarly: false });
    } catch (error) {
        const errors = {};
        error.inner.forEach((err) => {
            errors[err.path] = err.message;
        });
        throw errors;
    }
}

export const EditClient = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        formState: { errors },
        handleSubmit,
        getValues,
        reset
    } = useForm({ resolver: yupResolver(schema) });

    const submitForm = async (data) => {
        setIsLoading(true);

        const dataBirthDate = getValues('birthDate');
        // const birthDate = dataBirthDate.split('-');
        const birthDate = new Date(dataBirthDate);
        // const newBirthDate = `${birthDate[2]}-${birthDate[1]}-${birthDate[0]}`;

        const dataUpdate = {
            name: data.clientName,
            // birthDate: newBirthDate,
            birthDate: birthDate.toISOString(),
            // birthDate: formatDateForBackend(data.birthDate),
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
        await validateYupSchema(schema, dataUpdate); // Pass the schema as a parameter
        await new Promise((resolve) => setTimeout(resolve, 3000));
        await ClientApi.updateClient(id, dataUpdate);
        navigate('/viewClients')
    }

    // const formatDateForBackend = (date) => {
    //     const [day, month, year] = date.split('-');
    //     return `${year}-${month}-${day}`;
    //   };

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
        reset({...defaultValues});
    }, [reset, state]);

    return (
        <Box>
            <EditStyles style={{
                width: '100%',
                color: 'white',
            }} >
                <Box style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <Typography variant="h2">
                        <EditIcon />&ensp;Edit Client Data&ensp;<EditIcon />
                    </Typography>

                </Box>
                <Typography>Change the fields you want to update and save your changes in the button below.</Typography>
                <Box component="form" onSubmit={handleSubmit(submitForm)}
                    sx={{
                        width: '426px',
                        padding: '20px',
                        border: '1px solid rgb(167, 167, 167)',
                        borderRadius: '10px',
                        background: 'grey',
                        margin: '31px auto 30px auto',
                    }}>

                    <Box style={EditStyles.inputCustom}>
                        <TextField variant="standard" name='clientName'
                            required
                            htmlFor='clientName'
                            label='Client Name '
                            defaultValue={state.name}
                            {...register('clientName')} />
                        {errors.clientName && <Typography sx={{ height:'30px'}}
                        color="error">{errors.clientName.message}</Typography>}
                    </Box>

                    <Box>
                        <TextField variant="standard" name='birthDate'
                            required
                            htmlFor='birthDate'
                            label='Birth Date '
                            type='date'
                            // defaultValue={state.birthDate}
                            {...register('birthDate')} />
                        {errors.birthDate && <Typography sx={{ height:'30px'}}
                        color="error">{errors.birthDate.message}</Typography>}
                    </Box>

                    <Box>
                        <TextField
                            variant="standard"
                            required
                            htmlFor='clientEmail'
                            name='clientEmail'
                            label='Email '
                            {...register('clientEmail')} />
                        {errors.clientEmail && <Typography sx={{ height:'30px'}}
                        color="error">{errors.clientEmail.message}</Typography>}
                    </Box>

                    <Typography variant="h6"
                        sx={{textAlign: 'left'}} >
                            Client Address
                    </Typography >
                    <Box>
                        <TextField
                            variant="standard"
                            required
                            htmlFor='zipCode'
                            name='zipCode'
                            label='Zip Code '
                            placeholder={state.address.zipCode}
                            {...register('zipCode')}
                            message="Please enter a valid zip code" />
                        {errors.zipCode && <Typography sx={{ height:'60px'}}
                        color="error">{errors.zipCode.message}</Typography>}
                    </Box>

                    <Box>
                        <TextField
                            variant="standard"
                            required
                            htmlFor='country'
                            name='country'
                            label='Country '
                            placeholder={state.address.country}
                            {...register('country')} />
                        {errors.country && <Typography sx={{ height:'30px'}}
                        color="error">{errors.country.message}</Typography>}
                    </Box>

                    <Box>
                        <TextField required name='county'
                            variant="standard"
                            htmlFor='county'
                            label='County '
                            defaultValue={state.address.county}
                            // onChange={(e) =>
                            //     setState((prevState) => ({
                            //      ...prevState,
                            //       address: {
                            //        ...prevState.address,
                            //         county: e.target.value.toString(),
                            //       },
                            //     }))
                            //   }
                            {...register('county')} />
                        {errors.county && <Typography sx={{ height:'30px'}}
                        color="error">{errors.county.message}</Typography>}
                    </Box>

                    <Box>
                        <TextField
                            variant="standard"
                            required
                            htmlFor='city'
                            name='city'
                            label='City '
                            placeholder={state.address.city}
                            {...register('city')} />
                        {errors.city && <Typography sx={{ height:'30px'}}
                        color="error">{errors.city.message}</Typography>}
                    </Box>

                    <Box>
                        <TextField
                            variant="standard"
                            required
                            htmlFor='streetAddress'
                            name='streetAddress'
                            label='Street Address '
                            placeholder={state.address.streetAddress}
                            {...register('streetAddress')} />
                        {errors.streetAddress && <Typography sx={{ height:'30px'}}
                        color="error">{errors.streetAddress.message}</Typography>}
                    </Box>

                    <Box>
                        <TextField
                            variant="standard"
                            htmlFor='addition'
                            name='addition'
                            label='Apt, suite, etc (optional)'
                            placeholder={state.address.addition}
                            {...register('addition')} />
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
                            }}
                            disabled={isLoading}>
                            {isLoading ? 
                                <CircularProgress size={24}  /> : 'Submit'}
                        </Button>
                    </Box>
                </Box>
            </EditStyles>
        </Box>
    )
}