import './Header.scss';
import { Link } from 'react-router-dom';

// Assets Images
import medcloudLogo from '../../assets/images/medcloud.png';

// Components
import { Nav } from '../Nav';

export function Header() {
    return (
        <div className='header'>

            <div className='logoHeader'>
                <Link to="/about"
                    target="_blank" rel="noreferrer" title='Medcloud'>
                    <img src={medcloudLogo}  alt='Medcloud logo'></img>
                </Link>
            </div>
            <hr></hr>
            <Nav />
            <hr></hr>

        </div>
    )
}