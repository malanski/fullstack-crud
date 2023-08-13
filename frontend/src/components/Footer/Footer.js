import webcloudLogo from '../../assets/images/webcloudNeon.gif';
// eslint-disable-next-line
import webloudLogo2 from '../../assets/images/webcloud2.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import ConstructionIcon from '@mui/icons-material/Construction';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import { Box } from '@mui/material';

export function Footer() {
    return (
        <Box component='footer' sx={{
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
                    '& > a': {
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
                    <Box component='a' href="https://github.com/malanski"
                        title="github" target="_blank" rel="noreferrer">
                        <GitHubIcon /><span>Github</span>
                    </Box>
                    <Box component='a' href="https://malanski.github.io/portfolio/" title="portfolio" target="_blank" rel="noreferrer">
                        <ConstructionIcon />&ensp;&ensp;Portfolio
                    </Box>
                    <Box component='a' href="https://www.linkedin.com/in/ulisses-malanski" title="linkedin" target="_blank" rel="noreferrer">
                        <LinkedInIcon />&ensp;&ensp;Linkedin
                    </Box>
                    <Box component='a' to='/about' href='/about'>
                        <InfoTwoToneIcon />&ensp;&ensp;About
                    </Box>
                </Box>

                <Box sx={{
                        marginTop: '50px',
                        width: '40vw',
                    '& > img' : {
                        width: '100%',
                        borderRadius: '10px'
                        },
                        }}
                    >
                    <img src={webcloudLogo}
                        title='Webcloud'
                        alt='Webcloud logo'></img>
                </Box>
            </Box>
            <br></br>
            <hr></hr>

            <h6>Developed by Ulisses Malanski - 2023</h6>

        </Box>
    )
}