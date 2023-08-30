import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  styled
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CardStyles = styled("div")(({ theme }) => ({

  [theme.breakpoints.down("tablet")]: {
    width: '100%',
    
    div: {
      
      div: {
        h6: {
          minHeight: '50px',
          fontSize:'16px'
        },
        p: {
          fontSize: '18px',
          padding: '5px',
        },

        span: {
          fontsize: '18px',
        },
        
        details: {
          width: '90%',
          margin: '0 auto'
        }
      }
    },
  },
}));

export default function ClientCard(props) {

  const {
    _id,
    name,
    birthDate,
    email } = props.dataApi

  const navigate = useNavigate();

  const nomeArray = name.split(" ");
  const firstEightNames = nomeArray.slice(0, 4);
  const shortName = firstEightNames.join(" ");

  return (
    <CardStyles sx={{
      textAlign: 'left',
      border: '1px solid #e3f4ff',
      borderRadius: '5px',
      width: '300px',
      padding: '10px',
      background: 'black',
      div: {
        background: '#5291bb',
        width: 'auto',
      },
    }}>
      <Card >
        <CardContent >
          <Typography
            sx={{
              textAlign: 'right'
            }}>
            <small>Client Id:</small> <br /> <b>{_id}</b>
          </Typography>

          <small>Name: </small> <br />

          <Typography variant="h6"
            sx={{
              mb: 1.5,
              padding: '5px',
              background: 'white',
              borderRadius: '5px',
              textTransform: 'capitalize',
              fontWeight: 'bolder',
              minHeight: '95px'
            }} >
            <Typography
              variant="span"
              sx={{
                display: 'block',
                textAlign: 'center',
                width:'100%',
                background: 'white',
              }}>
              {shortName}
            </Typography>
          </Typography>

          <hr style={{ color: '#2B93DD' }} />

          <Typography sx={{ mb: 1.5 }} >
            <small>Birth Date:</small>
            &ensp;<big>{birthDate}</big>
          </Typography>

          <Typography sx={{ width: '100%', mb: 1.5, height: '70px' }}>
            <small>Email: </small><br />
            <Typography variant="span"
              sx={{
                display: 'block',
                borderRadius: '10px',
                padding: '5px',
                textAlign: 'center',
                background: 'white',
                width: '100%'
              }}>
              {email}
            </Typography>
          </Typography>
        </CardContent>

        <CardActions style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="outlined"
            sx={{
              width: '45%',
              background: 'black'
            }}
            onClick={() => navigate(`/editClient/${_id}`)}
            title={name + " Data"}>
            <Typography variant="span" style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <EditIcon />Edit
            </Typography>
          </Button>

          <Button variant="outlined"
            sx={{
              background: 'black',
              width: '45%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
            onClick={() => navigate(`/client/${_id}`)}
            title={"Data and options"}>
            Client <PersonIcon />
          </Button>
        </CardActions>
      </Card>
    </CardStyles>

  );
}