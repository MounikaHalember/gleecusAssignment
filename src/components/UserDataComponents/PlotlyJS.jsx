import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import { Grid, FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import axios from "axios";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CachedIcon from "@mui/icons-material/Cached";
import { useStyles } from "./style.jsx";

const PlotlyJs = () => {
  const [xArray, setXArray] = useState([]);
  const [yArray, setYArray] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    axios
      .get("https://5b9f8640f5036f00142e4a2c.mockapi.io/v1/users-count")
      .then((res) => {
        let responseArray = Object.values(res.data);
        let newXArray = [];
        let newYArray = [];
        responseArray.forEach((item) => {
          newYArray.push(item.CLINICIAN_NAME);
          newXArray.push(item.counts);
        });
        console.log(newXArray, newYArray);
        setXArray(newXArray);
        setYArray(newYArray);
      })
      .catch((err) => {});
  }, []);
  return (
    <Grid className={classes.plotlyJsContainer}>
      <Grid
        style={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
        }}
      >
        <VisibilityIcon className={classes.visblity} />
        <VisibilityOffIcon className={classes.visblityOff} />
        <CachedIcon className={classes.cachedIcon} />
        <FormControl sx={{ m: 1, width: 200 }}>
          <InputLabel id="demo-multiple-name-label">Histogram</InputLabel>
          <Select label="Histogram">
            <MenuItem default>Histogram</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Plot
        data={[
          {
            x: xArray,
            y: yArray,
            name: "plot",
            type: "bar",
            orientation: "h",
          },
        ]}
        layout={{
          width: "100%",
          height: "100%",
          fontWeight: "bold",
          title: "Histogram",
          overflowX: "scroll",
        }}
      />
    </Grid>
  );
};

export default PlotlyJs;
