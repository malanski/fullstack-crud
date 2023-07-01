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
    width: '90%',
    div: {
      div: {
        p: {
          fontSize: '16px',
          padding: '5px',
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
        <CardContent>
          <Typography sx={{ fontSize: 14, textAlign: 'right' }} gutterBottom>
            <small>Client Id:</small> <br /> <b>{_id}</b>
          </Typography>

          <Typography variant="h6"
            sx={{
              mb: 1.5,
              padding: '5px',
              background: 'white',
              borderRadius: '5px',
              textTransform: 'capitalize',
              fontWeight: 'bolder',
              height: '75px'
            }} >
            <small>Name: </small> <br />
            <Typography variant="span" style={{ textAlign: 'center', background: 'white', }}>
              {name}
            </Typography>
          </Typography>

          <hr style={{ color: '#2B93DD' }} />
          <Typography sx={{ mb: 1.5 }} >
            <small>Birth Date:</small>
            &ensp;<big>{birthDate}</big>
          </Typography>
          <Typography sx={{ mb: 1.5, height: '70px' }}>
            <small>Email: </small><br />
            <Typography variant="span" style={{ padding: '5px', textAlign: 'center', background: 'white', }}>
              {email}
            </Typography>
          </Typography>
        </CardContent>

        <CardActions style={{ display:'flex', justifyContent: 'space-between' }}>
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