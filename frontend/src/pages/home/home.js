import './Home.scss'

// Material UI Icons
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';

// Assets Images
import coding from '../../assets/images/coding.jpg'
import xray from '../../assets/images/xray.jpg'
import { Box, Typography, styled } from '@mui/material';

const HomeStyles = styled("div")(({ theme }) => ({
    [theme.breakpoints.down("tablet")]: {
      div: {
        h4: {
            fontSize:'1.5rem',
            padding: '0 5px',
        }
      },
    },
    [theme.breakpoints.up("laptop")]: {
      div: {
        h4: {
            fontSize:'2.5rem',
            padding: '0 5px',
        },
        section:{
            p:{
                fontSize:'18px'
            }
        }
      },
    },
  }));

export const Home = () => {
    return (
        <HomeStyles>
            <Box className='home'>
                <Typography
                    component='h3'
                    sx={{
                        padding: '20px',
                        color: 'white',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }} >
                    <HomeTwoToneIcon />
                    Home
                    <HomeTwoToneIcon />
                </Typography>
                <Typography variant='h4'
                    sx={{
                        color: 'white',
            
                        }}>
                    FullStack Application for registering client data.
                </Typography>
                <Box sx={{
                    display: 'flex',
                    '& > img': {
                        width: '50%',
                    },
                }} >
                    <img src={coding} alt='People in front of computers coding'></img>
                    <img src={xray} alt='Womans programming an antique computer'></img>
                </Box>
                <Box component='section'
                    sx={{
                        width: { xs: '100%', sm: '350px', md: '610' },
                        margin:'50px auto',
                        textAlign:'justify',
                        padding: '20px'
                        }}>
                    <Typography component='p' sx={{color: 'white', margin: '5px auto 20px auto' }}>
                        &ensp;&ensp;&ensp;This project is a web application that manages client registrations through CRUD operations.<br></br>
                        &ensp;&ensp;&ensp;React and Material UI were used to build the front-end, which has a simple interface with field validation. <br></br>
                        &ensp;&ensp;&ensp;The MongoDB data base is modeled with Mongoose and used with the Atlas MongoDB cloud, and the back-end server is created with NodeJS and Express.
                    </Typography>
                    <Typography component='p' sx={{color: 'white', margin: '5px auto 20px auto' }}>
                        &ensp;&ensp;&ensp;The back-end server was deployed on Render, and the front end on Vercel.<br></br>
                        &ensp;&ensp;&ensp;PSRs, design patterns, and SOLID principles are patterns that the code adheres to.<br></br>
                        &ensp;&ensp;&ensp;The project has a strong emphasis on the architecture, error handling, and maintainability of the code. Disconnected components are used to enable modularity.
                    </Typography>
                </Box>
            </Box>
        </HomeStyles>
    )
}