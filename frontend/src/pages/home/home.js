import './Home.scss'

// Material UI Icons
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';

// Assets Images
import doctor from '../../assets/images/doctor.png'
import xray from '../../assets/images/xray.jpg'
import { Box, Typography } from '@mui/material';

export const Home = (props) => {
    return (
        <Box className='home'>
            <Typography sx={{
                padding: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }} variant='h3'><HomeTwoToneIcon /> Home <HomeTwoToneIcon /></Typography>
            <Typography variant='h4'>FullStack Application for registering client data. </Typography>

            <Box sx={{
                display: 'flex',
                '& > img': {
                    width: '90%',
                },
            }} >
                <img src={doctor} alt='A doctor with his client'></img>
                <img src={xray} alt='A doctor with his client'></img>
            </Box>
        </Box>
    )
}