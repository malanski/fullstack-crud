import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import AddIcon from '@mui/icons-material/Add';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import {
    Link,
    useMatch,
    useResolvedPath
} from 'react-router-dom';
import { Box, styled } from '@mui/material';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true })
    return (
        <Link className={match ? "active" : "normal-link"} to={to} {...props}>{children}</Link>
    );
}

const NavStyles = styled("div")(({ theme }) => ({
    nav: {
        height: '100px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'rgb(255, 255, 255)',
        margin: '0',
        padding: '0',
        borderTop: '5px solid white',
        borderBottom: '5px solid white',
        a: {
            textDecoration: 'none',
            padding: '20px 0 20px 0',
            width: '30%',
            span: {
                color: '#2B93DD',
                textTransform: 'uppercase',
                display: 'flex',
                justifyContent: 'center',
                alignItems: "center",
                fontSize: '25px',
                '&:hover': {
                    color: 'rgb(150, 112, 255)',   
                    fontSize: 'larger',
                }
            },
            '&.active': {
                transition: 'all ease-in-out 0.8s',
                borderBottom: '15px solid white',
                borderTop: "15px solid white",
                margin: '-20px 0 -20px 0',
                '&:hover': {
                    fontWeight: 'lighter',
                    transition: 'all ease-in-out 0.8s',
                }
            }
        },
    },

    [theme.breakpoints.down("tablet")]: {
        nav: {
            borderTop: 'none',
            borderBottom: 'none',        
            width: '100%',
            a: {
                fontSize: '17px',
                span: {
                    fontSize: '17px',
                },
                '&.active': {
                    borderBottom: 'none',
                    borderTop: 'none',
                    margin: '0',
                }
            }
        },
    },
    [theme.breakpoints.down("mobile")]: {
        nav: {
            display: 'flex',
            flexDirection: 'column',
            height: 'auto',
            a: {
                padding: '20px 0 20px 0',
                width: '100%',
                borderBottom: '1px solid black',
                span: {
                    fontSize: '15px',
                    justifyContent: 'space-between',
                    margin: '0 20px',
                },
                '&.active': {
                    backgroundColor: '#bde3fe',
                    opacity: '0.8',
                    width: '100%',
                }
            }
        },
    },
}));


export function Nav() {
    return (
        <NavStyles>
            <Box component='nav'>
                <CustomLink title="Home" to="/">
                    <span>Home&ensp;<HomeTwoToneIcon /></span>

                </CustomLink>
                <CustomLink title="Add new Client" to="/register">
                    <span>Add Client&ensp;<AddIcon /></span>
                </CustomLink>
                <CustomLink title="View All Clients" to="/viewClients">
                    <span>Clients List&ensp;<FormatListNumberedIcon /></span>
                </CustomLink>
            </Box>
        </NavStyles>
    )
}