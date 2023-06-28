import { ClientApi } from '../../services/api';
import ClientCard from "../../components/ClientCard/ClientCard";
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import { Stack, Alert, LinearProgress, Box } from '@mui/material';
import { Typography } from '@mui/material';
import { useState, useEffect } from 'react';


export const ViewClients = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [dataApi, setDataApi] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);
        ClientApi.listClients()
            .then((response) => {
                const data = response.data.clients;
                setDataApi(data);
                setIsLoading(false);
            })
            .catch(function (error) {
                console.log(error);
                setIsLoading(false);
            });
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <Stack sx={{ margin: 'auto', width: '80%' }} spacing={2}>
                <Alert severity="warning">Please Wait. Loading Clients...</Alert>
                <LinearProgress />
            </Stack>
        );
    }
    return (
        <Box variant="div" >
            <Typography variant="h2" sx={{
                padding: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 'auto',
                width: '80%',
                color: 'white'
            }}>
                <FormatListNumberedIcon />
                    &ensp;Clients list view&ensp;
                <FormatListNumberedIcon />
            </Typography>

            <Box variant="div" sx={{
                padding: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '20px',
                width: '90%',
                margin: '10px auto 0 auto',
                transition: 'all ease-in-out 0.5s',
                '& > div': {
                    ':hover': {
                        backgroundColor: '#ebf7ff',
                        transition: 'all ease-in-out 0.5s',
                    },
                },
            }} >
                {dataApi.map((data) => <ClientCard key={data._id} dataApi={data} />)}
            </Box>
        </Box>
    );
}