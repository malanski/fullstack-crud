import { ClientApi } from '../../services/api';
import ClientCard from "../../components/ClientCard/ClientCard";
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import { Typography, Stack, Alert, LinearProgress, Box } from '@mui/material';
import { useState, useEffect } from 'react';

export const ViewClients = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [showRefreshAlert, setShowRefreshAlert] = useState(false);
    const [dataApi, setDataApi] = useState([]);
    const [dataFetched, setDataFetched] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            setShowRefreshAlert(true); // Show the refresh alert after 2 seconds
        }, 4000); // 4000 milliseconds = 4 seconds
    
        ClientApi.listClients()
            .then((response) => {
                const data = response.data.clients;
                setDataApi(data);
                setDataFetched(true); // Data fetched successfully
                if (dataFetched) {
                    setShowRefreshAlert(false); // Data fetched within desired time frame, hide the alert
                }
            })
            .catch(function (error) {
                console.log(error);
                setShowRefreshAlert(true); // Data fetch failed, show the alert
            })
            .finally(() => {
                setIsLoading(false); // Set isLoading to false after fetching, whether success or failure
            });
    
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <Stack sx={{ margin: 'auto', width: '80%' }} spacing={2}>
                <Alert severity="warning">Please Wait. Loading Clients...</Alert>
                <LinearProgress />
                {showRefreshAlert && (
                    <Alert severity="warning">
                        Data could not be loaded. Please refresh the page to try again.
                    </Alert>
                )}
            </Stack>
        );
    }

    return (
        <Box component="div">
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
                        backgroundColor: '#00629b',
                        transition: 'all ease-in-out 0.5s',
                    },
                },
            }} >
               {dataApi.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map((data) => <ClientCard key={data._id} dataApi={data} />)}

            </Box>
        </Box>
    );
};
