import React from "react";
import { Grid, Typography, Link } from "@mui/material";
import { useStyles } from "./style.jsx";

function ConfigForData() {
  const config = [
    {
      field: "Inhouse Processing",
      orders: "10",
      episodes: "10",
      revenueOnHold: "$1000",
    },
    {
      field: "Pending Signatures",
      orders: "15",
      episodes: "15",
      revenueOnHold: "$1000",
    },
    {
      field: "To Be Sent",
      orders: "20",
      episodes: "20",
      revenueOnHold: "$1000",
    },
    {
      field: "Received Orders",
      orders: "15",
      episodes: "15",
      expectedRevenue: "$1000",
    },
  ];
  const classes = useStyles();

  return (
    <Grid container item xs={12} sm={12} md={12} lg={12} xl={12} colSpan="2">
      {config.map((item) => (
        <Grid
          container
          xs={5}
          sm={5}
          md={5}
          lg={5}
          xl={5}
          spacing={2}
          className={classes.configDataContainer}
        >
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography style={{ fontWeight: 600, fontSize: "16px!important" }}>
              {item.field}
            </Typography>
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            style={{ justifyContent: "space-evenly" }}
          >
            <Grid
              item
              container
              xs={3}
              sm={3}
              md={3}
              lg={3}
              xl={3}
              className={classes.columnFlex}
            >
              <Typography>Orders</Typography>
              <Typography style={{ fontWeight: 600 }}>{item.orders}</Typography>
            </Grid>
            <Grid
              item
              xs={3}
              sm={3}
              md={3}
              lg={3}
              xl={3}
              className={classes.columnFlex}
            >
              <Typography>Episodes</Typography>

              <Typography style={{ fontWeight: 600 }}>
                {item.episodes}
              </Typography>
            </Grid>
            <Grid
              item
              xs={5}
              sm={5}
              md={5}
              lg={5}
              xl={5}
              className={classes.columnFlex}
            >
              <Typography>
                {item.revenueOnHold ? "Revenue On Hold" : "Expected Revenue"}
              </Typography>

              <Typography style={{ fontWeight: 600 }}>
                {item.revenueOnHold ? item.revenueOnHold : item.expectedRevenue}
              </Typography>
            </Grid>
          </Grid>
          <div style={{ width: "100%", border: "0.03em solid #ddd" }}></div>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Link>View Details</Link>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}

export default ConfigForData;
