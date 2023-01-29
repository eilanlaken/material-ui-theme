import { Button, ButtonGroup, Container, FormControlLabel, RadioGroup, TextField, Typography, FormControl, FormLabel } from '@material-ui/core'
import React, { useState } from 'react';
import { AcUnitOutlined } from '@material-ui/icons';
import SendIcon from '@mui/icons-material/Send';
import { makeStyles, Radio } from '@material-ui/core';

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
});

export default function Create() {
  const classes = useStyles();
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState('todos');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false)
    setDetailsError(false)

    if (!title || /^\s*$/.test(title)) {
      setTitleError(true)
    }
    if (!details || /^\s*$/.test(details)) {
      setDetailsError(true)
    }

    if (title && details) {
      console.log(title, details, category)
    } 
  }

  return (
    <Container>
      <Typography 
        variant='h6'
        color='primary'
        component='h2'
      >
        Create a New Note
      </Typography>

      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field} 
          label='Note Title'
          variant='outlined'
          color='secondary'
          fullWidth
          required
          error={titleError}
        />
        <TextField
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className={classes.field} 
          label='Details'
          variant='outlined'
          color='secondary'
          multiline
          minRows={4}
          fullWidth
          required
          error={detailsError}
        />

      <FormControl className={classes.field}>
        <FormLabel>Note Category</FormLabel>
        <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
          <FormControlLabel value="money" control={<Radio />} label="Money"/>
          <FormControlLabel value="todos" control={<Radio />} label="Todos"/>
          <FormControlLabel value="reminders" control={<Radio />} label="Reminders"/>
          <FormControlLabel value="work" control={<Radio />} label="Work"/>
        </RadioGroup>
      </FormControl>

      <Button
       type='submit'
       color='secondary'
       variant='contained'
       endIcon={<SendIcon />}
      >
        Submit
      </Button>
      </form>
    </Container>
  );
};
