import React from "react";
import "./HeaderStyles.jsx";
import { Grid, Button } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Health from "../../images/Health.png";
import hnts from "../../images/hnts.png";
import { useStyles } from "./HeaderStyles.jsx";

const HeaderMenu = () => {
  const classes = useStyles();

  return (
    <Grid
      style={{
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        width: "100%",
        backgroundColor: "white",
        padding: "15px 50px",
        marginBottom: "50px",
      }}
    >
      <Grid style={{ display: "flex", alignItems: "center", width: "60%" }}>
        {" "}
        <img src={hnts} alt="PageLogo" style={{ width: 120, height: 45 }} />
        <Button
          sx={{ minWidth: 100, color: "black" }}
          endIcon={<ArrowDropDownIcon />}
        >
          Clinical{" "}
        </Button>
        <Button
          sx={{ minWidth: 100, color: "black" }}
          endIcon={<ArrowDropDownIcon />}
        >
          Business{" "}
        </Button>
        <Button
          sx={{ minWidth: 100, color: "black" }}
          endIcon={<ArrowDropDownIcon />}
        >
          Admin{" "}
        </Button>
      </Grid>
      <Grid
        style={{
          display: "flex",
          width: "40%",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <img src={Health} alt="HealthCare" style={{ width: 150, height: 50 }} />
        <NotificationsIcon className={classes.notificationIcon} />
        <PersonIcon className={classes.personIcon}/>
        <ArrowDropDownIcon className={classes.arrowDownIcon}/>
      </Grid>
    </Grid>
  );
};

export default HeaderMenu;
