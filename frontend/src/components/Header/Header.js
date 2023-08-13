// eslint-disable-next-line
import medcloudLogo from '../../assets/images/webcloudNeon.gif';
import medcloudLogo1 from '../../assets/images/webcloud.png';
import { Nav } from '../Nav';
import { Box } from '@mui/material';
import UserLogin from '../UserLogin/UserLogin';

export function Header() {
    return (
        <Box component="header"
            sx={{
                width: { xs: '100vw', sm: '100%', md: '610px' },
            }}>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '5px',
                }}>

                <a href="/#/about" title='About this project'>
                    <Box component="img"
                        src={medcloudLogo1} alt='Webcloud logo is three points connected by a red line'
                        width={46}
                        height={46}
                        sx={{
                            width: { xs: '100%', sm: '350', md: '610' },
                        }}>
                    </Box>
                </a>

                <UserLogin></UserLogin>
            </Box>
            <hr></hr>
            <Nav />
            <hr></hr>
        </Box>
    )
}