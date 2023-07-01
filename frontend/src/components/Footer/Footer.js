import './Footer.scss'
import webloudLogo2 from '../../assets/images/webcloud2.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import ConstructionIcon from '@mui/icons-material/Construction';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import { Box } from '@mui/material';

export function Footer() {
    return (
        <Box sx={{
            marginTop: '100px',
            background: 'black',
            padding: '20px',
            color: 'white',
            '& > h6': {
                fontSize: '18px',
            },
        }} >
            <Box className='nav-footer'
                sx={{
                    display: 'flex',
                    flexWrap:'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '40px',

                }} >
                <Box sx={{
                    '& > div': {
                        color: '#00629b',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '10px',
                        width: '120px',
                        ':hover': {
                            color: 'white',
                            transition: 'all ease-in-out 0.5s',
                        },
                    }
                }
                }>
                    <Box variant='a' href="https://github.com/malanski"
                        title="github" target="_blank" rel="noreferrer">
                        <GitHubIcon /><span>Github</span>
                    </Box>
                    <Box href="https://malanski.github.io/portfolio/" title="portfolio" target="_blank" rel="noreferrer">
                        <ConstructionIcon />&ensp;&ensp;Portfolio
                    </Box>
                    <Box href="https://www.linkedin.com/in/Boxisses-malanski" title="linkedin" target="_blank" rel="noreferrer">
                        <LinkedInIcon />&ensp;&ensp;Linkedin
                    </Box>
                    <Box to='/about'>
                        <InfoTwoToneIcon />&ensp;&ensp;About
                    </Box>
                </Box>

                <Box sx={{
                        marginTop: '50px',
                        width: '40vw',
                    '& > img' : {
                        width: '100%'
                        },
                        }}
                    >
                    <img src={webloudLogo2} title='Webcloud' alt='Webcloud logo'></img>
                </Box>
            </Box>
            <br></br>
            <hr></hr>

            <h6>Developed by Ulisses Malanski - 2023</h6>

        </Box>
    )
}