import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import logo from './logo.png';

class Section extends Component {
  render() {
    return (
      <Grid container direction="column" alignItems="center">
        <Grid item><img src={logo} alt="ABC logo" width="100"/></Grid>
        <Grid item><Typography>Add your stuff here</Typography></Grid>
      </Grid>
    );
  }
}

export default Section;
