import './About.scss'

// Material UI Icons
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CloudCircleIcon from '@mui/icons-material/CloudCircle';

// Assets Images
import logo from '../../assets/images/webcloud.png'
import print1 from '../../assets/images/page-home.png'
import print2 from '../../assets/images/page-list-view.png'
import print3 from '../../assets/images/page-patient.png'
import print4 from '../../assets/images/page-patient-delete.png'
import { Box, Typography } from '@mui/material';

export const About = () => {
    return (
        <Box className='about'>
            <Box className='about-card'>

                <Typography variant='h2'><InfoTwoToneIcon />&ensp;About&ensp;<InfoTwoToneIcon /></Typography>

                <img className='logo-image' src={logo} alt='A doctor with his patient'></img>


            </Box>

            <Box className='about-card'>
                <Box>
                    <Typography variant='h3'>Project Goal </Typography>
                    <Typography variant='p'>
                        &ensp;&ensp;&ensp;
                        To develop a fullstack web application (CRUD) to manage client registers data such as Client's name,
                        birth date, email and address. <br></br>
                        &ensp;&ensp;&ensp;
                        This Fullstack web application have front and back end connected working together.  <br></br>
                        CRUD is an acronym for create, read, update, delete, and is the functionality that you have in the database, 
                        which is in the case of registering customers and being able to manipulate their data later
                        

                    </Typography>
                </Box>

                <Box className='aboutImage'>
                    <img src={print1} alt='A doctor with his patient'></img>

                    <ul>
                        <big><b>Requirements</b></big>
                        <br />
                        <li>
                            Frontend development.
                        </li><br />
                        <li>
                            Use react to create the frontend.
                        </li><br />
                        <li>
                            Interface easy to use (UI/UX).
                        </li><br />
                        <li>
                            Field validation (date, required fields, etc).
                        </li><br />
                        <li>
                            Use Material UI or Tailwind
                        </li>
                    </ul>
                </Box>
                <Box className='about-card-section'>
                    <hr />
                    <Box>
                        <Typography variant='h3'>Frontend screenshots</Typography>
                        <img src={print2} alt='A doctor with his patient'></img>
                        <Typography variant='p'>
                            &ensp;&ensp;&ensp;Data being fetch from Api.
                        </Typography>

                    </Box>
                    <hr />
                    <Box>
                        <img src={print3} alt='A doctor with his patient'></img>
                        <Typography variant='p'>&ensp;&ensp;&ensp;Patient data being fetch from Api.</Typography>

                    </Box>
                    <hr />
                    <Box>
                        <img src={print4} alt='A doctor with his patient'></img>
                        <Typography variant='p'>&ensp;&ensp;&ensp;Patient delete data confirmation steps.</Typography>

                    </Box>
                    <hr />
                    <h4><StorefrontIcon />&ensp;Frontend Technologies&ensp;<StorefrontIcon /></h4>
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

                <Box className='about-card-section'>
                    <h4><CloudCircleIcon />&ensp;Backend Technologies&ensp;<CloudCircleIcon /></h4>
                    <ul>
                        <li>Express</li>
                        <li>MongoDB - Mongoose</li>
                        <li>Atlas MongoDB Cloud</li>
                    </ul>
                </Box>
            </Box>

            {/* <Box className='about-card'>
                
            </Box> */}
        </Box>
    )
}