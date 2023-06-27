import './Footer.scss'

// Assetes Images
import webloudLogo2 from '../../assets/images/webcloud2.png'

// Icon
import GitHubIcon from '@mui/icons-material/GitHub';
import ConstructionIcon from '@mui/icons-material/Construction';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';

// React Router-Dom
import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <div className='footer'>

            <div className='nav-footer'>
                <ul className="social2">
                    <li>
                        <a href="https://github.com/malanski" title="github" target="_blank" rel="noreferrer">
                            <GitHubIcon/>&ensp;&ensp;Github
                        </a>
                    </li>
                    <li>
                        <a href="https://malanski.github.io/portfolio/" title="portfolio" target="_blank" rel="noreferrer">
                            <ConstructionIcon />&ensp;&ensp;Portfolio
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/ulisses-malanski" title="linkedin" target="_blank" rel="noreferrer">
                           <LinkedInIcon />&ensp;&ensp;Linkedin
                        </a>
                    </li>
                    <li>
                        <Link to='/about'>
                           <InfoTwoToneIcon /> About
                        </Link>
                    </li>
                </ul>
                <div className='logoFooter'>
                    <img src={webloudLogo2} title='Medcloud' alt='Medcloud logo'></img>
                </div>
            </div>
            <br></br>
            <hr></hr>

            <h6>Developed by Ulisses Malanski - 2022</h6>

        </div>
    )
}