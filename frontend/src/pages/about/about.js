import './About.scss'
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CloudCircleIcon from '@mui/icons-material/CloudCircle';
import logo from '../../assets/images/webcloud.png'
// eslint-disable-next-line
import print1 from '../../assets/images/page-home.png'
import print2 from '../../assets/images/page-list-view.png'
import print3 from '../../assets/images/page-patient.png'
import print4 from '../../assets/images/page-patient-delete.png'
import { Box, Typography } from '@mui/material';

export const About = () => {
    return (
        <Box className='about'
        >
            <Box className='about-card'>
                <Typography component='h2'><InfoTwoToneIcon />&ensp;About&ensp;<InfoTwoToneIcon /></Typography>
                <img className='logo-image' src={logo} alt='Project Logo'></img>
            </Box>

            <Box className='about-card'
             sx={{'& > div': {
                display: 'flex',
                justifyContent:'space-between',
                alignItems: 'center',
                '& > img': {
                    width: '260px'
                        },
                    },
                    '& > hr': {
                        width:'100%'
                    }
                    }}>
                <Box>
                    <Typography sx={{fontWeight:'bolder'}} component='h3'>Project Goal:</Typography>
                    <Typography>
                        &ensp;&ensp;&ensp;This Client Management API is a Fullstack web application that manage clients registrations. 
                        The application is a CRUD (Create, Read, Update, Delete) that allow users 
                        to manage clients' information such as name, birth date, email, and address.<br></br>
                    </Typography>
                </Box>

                <hr />
                <Box className='about-card-section'>
                    <h4><StorefrontIcon />&ensp;Frontend Technologies</h4>
                    <ul>
                        <li>Bootstrapped with reactJs</li>
                        <li>React Router</li>
                        <li>React Hooks</li>
                        <li>React Hook Form</li>
                        <li>Material UI</li>
                        <li>Axios</li>
                        <li>Yup</li>
                        <li>Hook Form resolvers</li>
                        <li>SASS</li>
                    </ul>
                </Box>
                <hr />
                <Box className='about-card-section'>
                    <h4><CloudCircleIcon />&ensp;Backend Technologies</h4>
                    <ul>
                        <li>NodeJS</li>
                        <li>Express</li>
                        <li>MongoDB - Mongoose</li>
                        <li>Atlas MongoDB Cloud</li>
                    </ul>
                </Box>
                <hr />
                <Typography variant='h3'>Frontend screenshots</Typography>
                <Box
                    sx={{
                        margin:'20px', 
                        display:'flex',
                        flexDirection:'column'
                    }}>
                    <img src={print3} alt='Client data being fetch from Api'></img>
                    <Typography>&ensp;&ensp;&ensp;Client data Full card.</Typography>
                </Box>

                <Box 
                    sx={{
                        margin:'20px', 
                        display:'flex',
                        flexDirection:'column'
                }}>
                    <img src={print4} alt='Client delete data confirmation steps'></img>
                    <Typography>&ensp;&ensp;&ensp;Client delete data confirmation steps.</Typography>
                </Box>

                <Box>
                    <img src={print2} alt='Clients cards listing print screen'></img>
                    <Typography>&ensp;&ensp;&ensp;Client listing.</Typography>
                </Box>


            </Box>
        </Box>
    )
}