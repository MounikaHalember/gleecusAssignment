import React from "react";
import { Grid } from "@mui/material";
import DataOfUsers from "./DataOfUsers";
import PlotlyJs from "./PlotlyJS";

function DataContainer() {
  return (
    <Grid style={{ padding: "0 50px" }}>
      <h1 style={{ float: "left" }}>Pending Orders</h1>
      <Grid
        container
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        colSpan="2"
        style={{
          clear: "both",
          display: "flex",
          alignItems: "stretch",
          justifyContent: "center",
        }}
      >
        <PlotlyJs /> 
        <DataOfUsers />
      </Grid>
    </Grid>
  );
}

export default DataContainer;
