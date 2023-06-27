import './About.scss'

// Material UI Icons
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CloudCircleIcon from '@mui/icons-material/CloudCircle';

// Assets Images
import logo from '../../assets/images/webcloud.png'
import print1 from '../../assets/images/page-home.png'
import print2 from '../../assets/images/page-list-view.png'
import print3 from '../../assets/images/page-patient.png'
import print4 from '../../assets/images/page-patient-delete.png'

export const About = () => {
    return (
        <div className='about'>
            <div className='about-card'>

                <h2><InfoTwoToneIcon />&ensp;About&ensp;<InfoTwoToneIcon /></h2>

                <img className='logo-image' src={logo} alt='A doctor with his patient'></img>

                
            </div>

            <div className='about-card'>
                <div>
                    <h3>Project Goal </h3>
                    <p>
                        &ensp;&ensp;&ensp;
                        To develop a web application (CRUD) to manage patient registers (Patient's name, 
                        birth date, email and address).
                    </p>
                </div>

                <div className='aboutImage'>
                    <img src={print1} alt='A doctor with his patient'></img>

                    <ul>
                        <big><b>Requirements</b></big>
                        <br/>
                        <br/>

                        <li>
                            Frontend development.
                        </li>
                        <br/>

                        <li>
                            Use react to create the frontend.
                        </li>
                        <br/>

                        <li>
                            Interface easy to use (UI/UX).
                        </li>
                        <br/>

                        <li>
                            Field validation (date, required fields, etc).
                        </li>
                        <br/>

                        <li>
                            Use Material UI or Tailwind
                        </li>
                    </ul>
                </div>
                <div className='about-card-section'>
                    <hr/>
                    <div>
                        <h3>Frontend screenshots</h3>
                        <img src={print2} alt='A doctor with his patient'></img>
                        <p>&ensp;&ensp;&ensp;Data being fetch from Api.</p>

                    </div>
                    <hr/>
                    <div>
                        <img src={print3} alt='A doctor with his patient'></img>
                        <p>&ensp;&ensp;&ensp;Patient data being fetch from Api.</p>

                    </div>
                    <hr/>
                    <div>
                        <img src={print4} alt='A doctor with his patient'></img>
                        <p>&ensp;&ensp;&ensp;Patient delete data confirmation steps.</p>

                    </div>
                    <hr/>
                    <h4><StorefrontIcon/>&ensp;Frontend Technologies&ensp;<StorefrontIcon/></h4>
                    <ul>
                        <li>Bootstrapped with reactJs</li>
                        <li>React Router</li>
                        <li>React Hooks</li>
                        <li>React Hook Form</li>
                        <li>Material UI</li>
                        <li>Axios</li>
                        <li>Yup</li>
                        <li>Hook Form resolvers</li>
                        <li>SASS</li>
                    </ul>
                </div>

                <div className='about-card-section'>
                    <h4><CloudCircleIcon/>&ensp;Backend Technologies&ensp;<CloudCircleIcon/></h4>
                    <ul>
                        <li>Express</li>
                        <li>Mongoose</li>
                        <li>Atlas</li>
                        <li>Atlas</li>
                    </ul>
                </div>
            </div>

            {/* <div className='about-card'>
                
            </div> */}
        </div>
    )
}