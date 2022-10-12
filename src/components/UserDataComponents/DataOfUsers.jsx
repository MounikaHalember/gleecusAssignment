import React from "react";
import { TextField, Grid, Typography } from "@mui/material";
import ConfigForData from "./ConfigForData";
import { useStyles } from "./style";

const DataOfUsers = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.dataContainer}>
      <Grid style={{ width: "100%", display: "flex", alignItems: "center" }}>
        <label>Start Date</label>
        <TextField
          id="date"
          type="date"
          defaultValue="2021-01-01"
          sx={{ width: 220, margin: "0 20px 0 10px" }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <label>End Date</label>
        <TextField
          id="date"
          type="date"
          defaultValue="2021-01-09"
          sx={{ width: 220, margin: "0 0 0 10px" }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item container xs={12} sm={12} md={12} lg={12} xl={12} style={{marginTop:"40px"}}>
        <Grid style={{ display: "flex", flexDirection: "column",marginRight:"40px" }}>
          <Typography className={classes.typography}>Pending Orders</Typography>
          <Typography
            className={classes.typography}
            style={{ fontWeight: 600 }}
          >
            90
          </Typography>
        </Grid>
        <Grid style={{ display: "flex", flexDirection: "column" }}>
          <Typography className={classes.typography}>
            Revenue on Hold
          </Typography>
          <Typography
            className={classes.typography}
            style={{ fontWeight: 600 }}
          >
            $3000
          </Typography>
        </Grid>
      </Grid>
      <Grid style={{marginTop:"25px"}}>
        <ConfigForData />
      </Grid>
    </Grid>
  );
};

export default DataOfUsers;
