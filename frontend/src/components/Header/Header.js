import './Header.scss';
import { Link } from 'react-router-dom';
import medcloudLogo from '../../assets/images/webcloud.png';
import { Nav } from '../Nav';
import { Box , styled} from '@mui/material';

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
        <EditStyles>
            <Box variant="header" className='header'
                style={{
                    padding: '20px',
                    background: '#000000',
                    opacity: '0.5',
                    md: {
                        
                    }
                }}
                >
                <Box className='logoHeader'
                    style={{
                        width: '30%'}}
                    >
                    <Link to="/about"
                        target="_blank" rel="noreferrer" title='About Webcloud'>
                        <img src={medcloudLogo}  alt='Webcloud logo is  three points connected by a red line'></img>
                    </Link>
                </Box>
                <hr></hr>
                <Nav />
                <hr></hr>
            </Box>
        </EditStyles>
    )
}