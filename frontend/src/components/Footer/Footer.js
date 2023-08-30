import webcloudLogo from '../../assets/images/webcloudNeon.gif';
// eslint-disable-next-line
import webloudLogo2 from '../../assets/images/webcloud2.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import ConstructionIcon from '@mui/icons-material/Construction';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import { Box, styled } from '@mui/material';
import { ExternalLink } from '../ExternalLink/ExternalLink'


const FooterStyles = styled("div")(({ theme }) => ({

    [theme.breakpoints.down("tablet")]: {
      footer: {
       fontSize:'16px',
       div: {
        flexDirection:'column-reverse',
        margin:'auto',
       }
      },
    },
    
    [theme.breakpoints.down("mobile")]: {
        footer: {
         fontSize:'16px',
         div: {
          flexDirection:'column',
          margin:'auto',
          div: {
            display:'flex',
            flexDirection:'row',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap:'wrap',
            with:'100%',
            margin:'auto'
          }
         }
        },
      },
  }));
export function Footer() {
    return (
        <FooterStyles>
            
            <Box component='footer' sx={{
                marginTop: '100px',
                background: 'black',
                padding: '0 0 20px 0',
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
                        <ExternalLink myHref="https://github.com/malanski" myTitle="github" >
                            <GitHubIcon /><span>Github</span>
                        </ExternalLink>
                        <ExternalLink myHref="https://malanski.github.io/portfolio/" myTtitle="portfolio" >
                            <ConstructionIcon /><span>Portfolio</span>
                        </ExternalLink>
                        <ExternalLink myHref="https://www.linkedin.com/in/ulisses-malanski" myTitle="linkedin">
                            <LinkedInIcon /><span>Linkedin</span>
                        </ExternalLink>
                        <Box component='a' to='/about' href='/about'>
                            <InfoTwoToneIcon /><span>About</span>
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
        </FooterStyles>
    )
}