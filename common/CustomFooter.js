import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

const styles = () => ({
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50px',
    backgroundColor: '#3a4454',
  },
  footerText: {
    color: 'white',
  }
});

const CustomFooter = ({classes }) => {
  return (
    <div className={classes.footer}>
      <Typography className={classes.footerText}>Custom Footer</Typography>
    </div>
  );
};

export default withStyles(styles)(CustomFooter);
