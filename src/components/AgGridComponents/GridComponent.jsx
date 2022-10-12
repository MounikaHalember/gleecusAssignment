import React, { useState } from "react";
import { Tabs, Tab, Box, Grid, Typography, Button } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import { useStyles } from "../UserDataComponents/style.jsx";
import FilterListIcon from "@mui/icons-material/FilterList";
import AgGrid from "./AgGrid.jsx";

const GridComponent = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const gridSubConfig = [
    {
      subHeader: "Orders",
      count: "150",
    },
    {
      subHeader: "Episodes",
      count: "100",
    },
    {
      subHeader: "Followups",
      count: "25",
    },
    {
      subHeader: "Revenue",
      count: "$3000",
    },
  ];
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  return (
    <div style={{ backgroundColor: "white", padding: "0 50px" }}>
      <Grid
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {" "}
        <h1 style={{ float: "left" }}>To be Sent</h1>{" "}
        <Button
          startIcon={<FilterListIcon />}
          variant="outlined"
          style={{
            width: "7%",
            height: "40px",
            fontWeight: 600,
            margin: "20px 20px 0 0",
          }}
        >
          Filter
        </Button>
      </Grid>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        style={{ clear: "both" }}
      >
        <Tab label="Email" />
        <Tab label="Fax" />
        <Tab label="Portal" />
        <Tab label="Hand Carried" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Grid container>
          {gridSubConfig.map((item) => (
            <Grid
              xs={2}
              sm={2}
              md={2}
              lg={2}
              xl={2}
              className={classes.gridContainer}
            >
              <Grid
                item
                container
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                className={classes.gridSubHeader}
              >
                <Typography>{item.subHeader}</Typography>
                <EastIcon />
              </Grid>
              <Grid
                item
                container
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                style={{ paddingLeft: "40px" }}
              >
                <Typography style={{ fontWeight: 600 }}>
                  {item.count}
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Grid>
          <AgGrid />
        </Grid>
      </TabPanel>
    </div>
  );
};

export default GridComponent;
