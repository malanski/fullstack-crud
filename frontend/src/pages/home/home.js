import './Home.scss'

// Material UI Icons
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';

// Assets Images
import coding from '../../assets/images/coding.jpg'
import xray from '../../assets/images/xray.jpg'
import { Box, Typography } from '@mui/material';

export const Home = () => {
    return (
        <Box className='home'>
            <Typography sx={{
                padding: '20px',
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }} component='h3'><HomeTwoToneIcon /> Home <HomeTwoToneIcon /></Typography>
            <Typography variant='h4' sx={{color: 'white' }}>FullStack Application for registering client data. </Typography>

            <Box sx={{
                display: 'flex',
                '& > img': {
                    width: '50%',
                },
            }} >
                <img src={coding} alt='People in front of computers coding'></img>
                <img src={xray} alt='Womans programming an antique computer'></img>
            </Box>

            <Box component='section' sx={{
                width: { xs: '100%', sm: '350px', md: '610' },
                margin:'50px auto', textAlign:'justify'}}>
                <Typography component='p' sx={{color: 'white', margin: '5px auto 20px auto' }}>
                    &ensp;&ensp;&ensp;This project is a web application that uses CRUD operations to maintain client registrations.<br></br>
                    &ensp;&ensp;&ensp;The front-end is built with React and Material UI, and features an easy-to-use interface with
                    field validation. <br></br>
                    &ensp;&ensp;&ensp;The back-end server is built with NodeJS and Express and the data base is MongoDB modeled with Mongoose and uses Atlas mongoDB cloud,
                </Typography>
                <Typography component='p' sx={{color: 'white', margin: '5px auto 20px auto' }}>
                    &ensp;&ensp;&ensp;Deploys: front-end on Vercel and the back-end server on Render.<br></br>
                    &ensp;&ensp;&ensp;The code follows patterns like PSRs, design patterns, and SOLID principles.<br></br>
                    &ensp;&ensp;&ensp;The project emphasis's code maintainability, error handling, and architecture, with modularity
                    provided by disconnected components.
                </Typography>
            </Box>
        </Box>
    )
}