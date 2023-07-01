import './Header.scss';
// eslint-disable-next-line
import { Link } from 'react-router-dom';
import medcloudLogo from '../../assets/images/webcloudNeon.gif';
import medcloudLogo1 from '../../assets/images/webcloud.png';
import { Nav } from '../Nav';
// eslint-disable-next-line
import { Box, ThemeProvider, styled } from '@mui/material';
// eslint-disable-next-line
const EditStyles = styled("div")(({ theme }) => ({
    [theme.breakpoints.up("tablet")]: {
        header: {
            padding: '0',
            logoHeader: {
                width: '90%',
                padding: '0',
                img: {
                    width: '90%',
                    margin: '0 auto 0 auto'
                }
            }

        },
    },
}));

export function Header() {
    return (
        <Box variant="header" className='header'
            sx={{
                background: '#000000',
                opacity: '0.5',
            }}
        >
            <Box className='logoHeader' to="/about"
             target="_blank" rel="noreferrer" title='About this project'
                style={{
                    width: {
                        md: '30vw',
                        sm: '350px',
                    },
                }}
            >
                <Box sx={{
                        position: 'relative',
                        '& > img': {
                            transition: 'all ease-in-out 0.8s',
                            width: '100%',
                            height:'200px',
                            ':hover': {
                                opacity: '0',
                                transition: 'all ease-in-out 0.8s',

                            },
                        },
                    }}>
                    <img src={medcloudLogo1} alt='Webcloud logo is  three points connected by a red line'></img>
                </Box>

                <Box sx={{
                        position: 'absolute',
                        top: '0',
                        '& > img': {
                            opacity: '0',
                            transition: 'all ease-in-out 0.8s',
                            width: '100vw',
                            height:'200px',
                            ':hover': {
                                opacity: '1',
                                transition: 'all ease-in-out 0.8s',

                            },
                        },
                    }}>
                    <img src={medcloudLogo} alt='Webcloud logo is  three points connected by a red line'></img>
                </Box>
            </Box>
            <hr></hr>
            <Nav />
            <hr></hr>
        </Box>
    )
}