import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    height: "100vh",
    backgroundColor: "#fafafa",
  },
};

const Dashboard = ({ children, classes }) => (
  <Grid className={classes.root} alignItems="center" justify="center" container>
    {children}
  </Grid>
);

export default withStyles(styles)(Dashboard);
