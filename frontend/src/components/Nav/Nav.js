import './nav.scss'

// Icons
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import AddIcon from '@mui/icons-material/Add';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';

// React Router-Dom
import {
    Link,
    useMatch,
    useResolvedPath
} from 'react-router-dom';
import { Box } from '@mui/material';

// Cutomization for Link Actions
function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true })

    return (
        <Link className={match ? "active" : "normal-link"} to={to} {...props}>{children}</Link>
    );
}

export function Nav() {
    return (
        <Box component='nav'>
            <CustomLink title="Home" to="/">
                <span className='nav-links'>Home&ensp;<HomeTwoToneIcon /></span>
                
            </CustomLink>

            <CustomLink title="Add new Client" to="/register">
                <span className='nav-links'>New Client&ensp;<AddIcon /></span>

            </CustomLink>

            <CustomLink title="View All Clients" to="/viewClients">
                <span className='nav-links'>View Clients&ensp;<FormatListNumberedIcon /></span>

            </CustomLink>
        </Box>
    )
}