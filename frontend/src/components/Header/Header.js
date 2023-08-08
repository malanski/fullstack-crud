// eslint-disable-next-line
import { Link } from 'react-router-dom';
import medcloudLogo from '../../assets/images/webcloudNeon.gif';
import medcloudLogo1 from '../../assets/images/webcloud.png';
import { Nav } from '../Nav';
// eslint-disable-next-line
import { Box, ThemeProvider, styled } from '@mui/material';
// eslint-disable-next-line
// const EditStyles = styled("div")(({ theme }) => ({
//     [theme.breakpoints.up("tablet")]: {
//         header: {
//             padding: '0',
//             logoHeader: {
//                 width: { xs: '100vw', sm: '100%', md: '610px' },
//                 padding: '0',
//                 img: {
//                     width: '90%',
//                     margin: '0 auto 0 auto'
//                 }
//             }

//         },
//     },
// }));

export function Header() {
    return (
        <Box component="header"
            sx={{
                width: { xs: '100vw', sm: '100%', md: '610px' }, 
            }}>

            <Box component="a" to="/about"
                target="_blank" rel="noreferrer" title='About this project'>
                    
                <Box sx={{
                        // position: 'relative',
                        // backgroundImage: `url(../../assets/images/webcloudNeon.gif)`,
                        // backgroundSize: 'cover',
                        // backgroundRepeat: 'none',
                        // backgroundPosition: 'center',
                        '& > img': {
                            transition: 'all ease-in-out 0.8s',
                            ':hover': {
                                opacity: '0',
                                transition: 'all ease-in-out 0.8s',
                            },
                        },
                    }}>

                    <Box component="img"
                        src={medcloudLogo1} alt='Webcloud logo is three points connected by a red line'
                        width={46}
                        height={46}
                        sx={{
                            width: { xs: '100%', sm: '350', md: '610' },
                            }}>
                    </Box>
                </Box>

                {/* <Box sx={{
                        position: 'absolute',
                        top: '0',
                        '& > img': {
                            opacity: '0',
                            transition: 'all ease-in-out 0.8s',
                            width: { xs: '100vw', sm: '350px', md: '610px' },
                            height:'200px',
                            ':hover': {
                                opacity: '1',
                                transition: 'all ease-in-out 0.8s',
                            },
                        },
                    }}>
                    <img src={medcloudLogo} alt='Webcloud logo is  three points connected by a red line'></img>
                </Box> */}
            </Box>
            <hr></hr>
            <Nav />
            <hr></hr>
        </Box>
    )
}