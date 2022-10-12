import React from "react";
import { Grid } from "@mui/material";
import HeaderMenu from "./Header/HeaderMenu";
import SubHBreadCrumbs from "./SubHBreadCrumbs";

const UI = () => {
  return (
    <Grid style={{ backgroundColor: "#F8F8F8" }}>
      <HeaderMenu />
      <Grid>
        <SubHBreadCrumbs />        
        
      </Grid>
    </Grid>
  );
};

export default UI;
