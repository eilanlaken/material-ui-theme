import { Button, ButtonGroup, Container, Typography } from '@material-ui/core'
import React from 'react';
import { AcUnitOutlined } from '@material-ui/icons';
import SendIcon from '@mui/icons-material/Send';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  
});

export default function Create() {
  const classes = useStyles();
  
  return (
    <Container>
      <Typography 
        variant='h6'
        color='primary'
        component='h2'
      >
        Create a New Note
      </Typography>

      <Button
       onClick={() => console.log('clicked')}
       type='submit'
       color='secondary'
       variant='contained'
       endIcon={<SendIcon />}
      >
        Submit
      </Button>

      <br />
      <AcUnitOutlined />
      <AcUnitOutlined color='secondary' fontSize='large'/>
      <AcUnitOutlined color='secondary' fontSize='small'/>
      <AcUnitOutlined color='action' fontSize='small'/>
      <AcUnitOutlined color='error' fontSize='small'/>
      <AcUnitOutlined color='disabled' fontSize='small'/>
    </Container>
  );
};
