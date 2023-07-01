import { ClientApi } from '../../services/api';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, CircularProgress, TextField, Typography, styled } from '@mui/material';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// eslint-disable-next-line
const today = new Date();
const minBirthDate = new Date();
minBirthDate.setFullYear(minBirthDate.getFullYear() - 18); // Subtract 18 years from today's date

const maxBirthDate = new Date();
maxBirthDate.setFullYear(maxBirthDate.getFullYear() - 150); // Subtract 150 years from today's date
        
// Form validation schema
const schema = yup.object().shape({
    clientName: yup.string().min(2, "Client name should have 2 characters or more")
        .max(70, "Client name should be at maximum 70 characters long").required("Client name should be required")
        .matches(/\D/, "Client name cannot be composed only of numbers"),

    birthDate: yup.date().max(minBirthDate, "Client must be at least 18 years old")
    // .max(today, "Client birth date must be earlier than today")
    .min(maxBirthDate, "Client must be at most 150 years old")
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

const FormStyles = styled("section")(({ theme }) => ({
    form: {
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

    // Responsive Styles
    [theme.breakpoints.down("tablet")]: {
        form: {
            width: '95%',
            margin: '20px 0 0 0',
            border: 'none',
            padding: '2.5%',
        },
    },
}));

export function ClientRegister() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, getValues, formState: { errors } } = useForm({
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
        // const birthDate = dataBirthDate.toISOString().slice(0, 10);
        setIsLoading(true);
        const dataBirthDate = getValues('birthDate');
        const birthDate = dataBirthDate.split('-');
        const newBirthDate = `${birthDate[2]}-${birthDate[1]}-${birthDate[0]}`;
    
        const dataRegister = {
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

        try {
            
            await new Promise((resolve) => setTimeout(resolve, 3000));
            await ClientApi.registerClient(dataRegister);
            navigate('/viewClients')
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                // Displays the error message returned by the server
                alert(error.response.data.message);
            } else {
                // Displays a generic error message
                alert('An error occurred while registering the client, try a different name and email');
            }
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Box sx={{
                padding: '20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'column',
                color: 'white',
            }}>

            <Typography variant='h3'
                sx={{
                    padding: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <AddIcon />&ensp;Add new Client&ensp;<AddIcon />
            </Typography>
            <Typography>
                Complete the form correctly and click the submit button to create a new client data register.
            </Typography>

            <FormStyles sx={{width: '100%'}} >
                <Box component="form"
                    onSubmit={handleSubmit(submitForm)}
                    sx={{
                        width: '426px',
                        padding: '20px',
                        border: '1px solid rgb(167, 167, 167)',
                        borderRadius: '10px',
                        margin: '31px auto 30px auto',
                    }}>
                        
                    <Box>
                        <TextField required
                            variant="outlined"
                            htmlFor='clientName'
                            name='clientName'
                            label="Client's name"
                            {...register('clientName')} />
                        {/* <Typography >
                                {errors.clientName?.message}
                        </Typography> */}
                        {errors.clientName && <Typography sx={{ height:'30px'}}
                        color="error">{errors.clientName.message}</Typography>}
                    </Box>

                    <Box>
                        <TextField required
                            variant="outlined"
                            htmlFor='birthDate'
                            name='birthDate'
                            type='date'
                            label="Client's birth date"
                            {...register('birthDate')} />
                        {/* <Typography sx={{color: 'orange', fontSize: '15px', height:'30px'}}>
                            {errors.birthDate?.message}
                        </Typography> */}
                        {errors.birthDate && <Typography sx={{ height:'30px'}}
                         color="error">{errors.birthDate.message}</Typography>}
                    </Box>

                    <Box>
                        <TextField required
                            variant="outlined"
                            htmlFor='clientEmail'
                            name='clientEmail'
                            label="Client email"
                            {...register('clientEmail')} />
                        {/* <Typography sx={{color: 'orange', fontSize: '15px', height:'30px'}}>
                            {errors.clientEmail?.message}
                        </Typography> */}
                        {errors.clientEmail && <Typography sx={{ height:'30px'}}
                         color="error">{errors.clientEmail.message}</Typography>}
                    </Box>

                    <Typography variant='h4'
                        sx={{textAlign: 'right'}}>
                            Client Address
                    </Typography>
                    <Box>
                        <TextField required
                            variant="outlined"
                            htmlFor='zipCode'
                            name='zipCode'
                            label="Zip/ postcode"
                            {...register('zipCode')} />
                            {errors.zipCode && <Typography sx={{ height:'60px'}}
                            color="error">{errors.zipCode.message}</Typography>}
                    </Box>

                    <Box>
                        <TextField required
                            variant="outlined"
                            htmlFor='country'
                            name='country'
                            label="Country"
                            {...register('country')} />
                            {errors.country && <Typography sx={{ height:'30px'}}
                            color="error">{errors.country.message}</Typography>}
                    </Box>

                    <Box>
                        <TextField required
                            variant="outlined"
                            htmlFor='county'
                            name='county'
                            label=" County (State)"
                            {...register('county')} />
                            {errors.county && <Typography sx={{ height:'30px'}}
                            color="error">{errors.county.message}</Typography>}    
                    </Box>

                    <Box>
                        <TextField required
                            variant="outlined"
                            htmlFor='city'
                            name='city'
                            label="City"
                            {...register('city')} />
                            {errors.city && <Typography sx={{ height:'30px'}}
                            color="error">{errors.city.message}</Typography>}
                    </Box>

                    <Box>
                        <TextField required
                            variant="outlined"
                            htmlFor='streetAddress'
                            name='streetAddress'
                            label="Street address"
                            placeholder='Rua Dos ABCs, n° 00, Bairro'
                            {...register('streetAddress')} />
                            {errors.streetAddress && <Typography sx={{ height:'30px'}}
                            color="error">{errors.streetAddress.message}</Typography>}
                    </Box>

                    <Box>
                        <TextField
                            variant="outlined"
                            htmlFor='addition'
                            name='addition'
                            label="Apt, suite, etc (optional)"
                            {...register('addition')} />
                    </Box>

                    <Button type='submit'
                        variant="button"
                        title="Create new Client"
                        sx={{
                            fontSize: '20px',
                            fontWeight: '700',
                            background: '#2B93DD'}}
                            disabled={isLoading}>
                            {isLoading ? 
                                <CircularProgress size={24} /> : 'Submit'}
                    </Button>
                </Box>
            </FormStyles>
        </Box>
    );
};