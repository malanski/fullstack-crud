import PersonIcon from '@mui/icons-material/Person';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import * as React from 'react';

export default function UserLogin() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box title='Change User'>
      <Box >
        <Button
          onClick={handleOpen}>
          <PersonIcon />
        </Button>

        <Modal
          open={open}
          onClose={handleClose}
          sx={{
            background: 'grey',
            borderRadius: '10px',
            width: '350px',
            margin: '50px auto',
            padding: '15px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '100%'
            }}>
            <Typography variant='h3'>Login</Typography>
            <TextField required
              variant="outlined"
              htmlFor='userEmail'
              name='userEmail'
              label="user email"
            />
            <TextField required
              variant="outlined"
              type="password"
              htmlFor='userPassword'
              name='userPassword'
              label="password"
            />

            <Button sx={{ 
              width: '176px', height: '40px', margin: '10px 0 0 0',
              background:'green' }} variant="outlined"
              onClick={handleClose}
              title="Enter">
              Enter
            </Button>

            <Button sx={{ width: '176px', height: '40px', margin: '10px 0 0 0' }} variant="outlined"
              color="error"
              onClick={handleClose}
              title="Cancel">
              Cancel
            </Button>
          </Box>
        </Modal>

      </Box>
    </Box>

  );
}