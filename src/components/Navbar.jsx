import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const styles = {
  root: {
    flexGrow: 1
  },
  ngo: {
    marginLeft: "30%"
  }
};

function SimpleAppBar(props) {
  const { classes } = props;
  const logo = require("../img/logo.png");
  const ngo = require("../img/ngo.png");

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            <img src={logo} alt="logo.name" />
          </Typography>
          <Typography className={classes.ngo}>
            <img src={ngo} alt="ngo.name" />
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleAppBar);
