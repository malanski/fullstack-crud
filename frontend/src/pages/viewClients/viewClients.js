import { ClientApi } from '../../services/api';
import ClientCard from "../../components/ClientCard/ClientCard";
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import { Typography, LinearProgress, Box, styled } from '@mui/material';
import { useState, useEffect } from 'react';

const TitleStyles = styled("div")(({ theme }) => ({
    [theme.breakpoints.down("tablet")]: {
      h2: {
       fontSize:'24px'
      },
    },
  }));

export const ViewClients = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [dataApi, setDataApi] = useState([]);
    const [dataFetched, setDataFetched] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 100 : prevProgress + 10));
        }, 1000); // Increment progress every second
    
        ClientApi.listClients()
            .then((response) => {
                const data = response.data.clients;
                setDataApi(data);
                setDataFetched(true); // Data fetched successfully
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false); // Set isLoading to false after fetching, whether success or failure
                clearInterval(timer);
            });
    
        return () => clearTimeout(timer);
    }, []);

    return (
        <TitleStyles>
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
                    {isLoading && (
                        <LinearProgress variant="determinate" value={progress} />
                    )}
                    
                    {dataApi.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map((data) => (
                        <ClientCard key={data._id} dataApi={data} />
                    ))}
                    {dataFetched && dataApi.length === 0 && (
                        <Typography variant="body1" sx={{ color: 'white' }}>
                            No clients found.
                        </Typography>
                    )}
                    {dataFetched && !isLoading && dataApi.length > 0 && (
                        <Typography variant="body1" sx={{ color: 'white' }}>
                            Data could not be loaded. Please try again (refresh the page).
                        </Typography>
                    )}
                </Box>
            </Box>
        </TitleStyles>
    );
};
