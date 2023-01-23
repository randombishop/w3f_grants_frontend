import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


export default class GrantsFilters extends React.Component {

  render() {
      return (
        <Paper style={{padding:'10px'}}>
            <Typography component="div" variant="h5">Search</Typography>
            <br/>

            <TextField fullWidth label="Project or team" variant="outlined" />
            <br/><br/>

            <FormControl fullWidth>
              <InputLabel>Delivered</InputLabel>
              <Select
                value="-"
                label="Delivered"
              >
                <MenuItem value="-">*</MenuItem>
                <MenuItem value="none">No milestone yet</MenuItem>
                <MenuItem value="first">First milestone</MenuItem>
                <MenuItem value="all">All milestones</MenuItem>
              </Select>
            </FormControl>
            <br/><br/>

            <Box style={{textAlign:'center'}}>
                <Button variant="contained">Search</Button>
            </Box>
        </Paper>
      );
  }

}