import React from 'react';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

import ThreeDSection from '../ThreeDSectionTest1';

import styles from './styles';

class LandingSection extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.wrapper}>
        <ThreeDSection />
        <div className={classes.textArea}>
          <Typography variant="display4" color="inherit" className={classes.text} >Hello</Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(LandingSection);