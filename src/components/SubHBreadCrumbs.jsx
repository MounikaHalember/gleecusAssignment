import React, { useState } from "react";
import { Grid, Link } from "@mui/material";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   NavLink,
//   Outlet,
// } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";
import GridComponent from "./AgGridComponents/GridComponent";
import DataContainer from "./UserDataComponents/DataContainer";

const SubHBreadCrumbs = () => {
  const [page, setPage] = useState("Pending Orders");

  return (
    <>
      <Grid
        style={{ display: "flex", alignItems: "center", padding: "0 50px" }}
      >
        <Link href="/" key="1">
          Admin
        </Link>
        <EastIcon style={{ margin: "0 20px" }} />
        <Link href="/" key="2" onClick={() => setPage("Pending Orders")}>
          Pending Orders
        </Link>
        <EastIcon style={{ margin: "0 20px" }} />
        <Link
          style={{ cursor: "pointer" }}
          key="3"
          onClick={() => setPage("To Be Sent")}
        >
          To Be Sent
        </Link>
      </Grid>
      {page === "Pending Orders" ? <DataContainer /> : <GridComponent />}
    </>
  );
};

export default SubHBreadCrumbs;
