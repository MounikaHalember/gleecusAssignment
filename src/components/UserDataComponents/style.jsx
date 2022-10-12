import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  dataContainer: {
    clear:"both",
    backgroundColor: "white",
    borderRadius: "10px",
    width: "70%",
    padding: "50px 30px",
  },
  typography: {
    fontSize:"25px!important",
  },
  columnFlex:{
    display: "flex!important",
    flexDirection: "column!important",
  },
  plotlyJsContainer:{
    backgroundColor: "white",
    borderRadius: "10px",
    width: "60%",
    marginRight:"40px",
    padding: "20px 50px 0 0",
  },
  configDataContainer:{
    backgroundColor: "#F8F8F8",
    justifyContent:"space-evenly",
    borderRadius: "10px",
    margin:"20px 20px 0 0!important",
    paddingBottom:"20px",
    flexBasis:"49%!important"
  },
  gridContainer: {
    display: "flex!important",
    flexDirection: "column!important",
    backgroundColor: "#F8F8F8",
    borderRadius: "10px",
    marginRight:"20px!important",
    padding:"10px 0"
  },
  gridSubHeader:{
    display:"flex",
    justifyContent: "space-around"
  },
  visblity:{
    width:"30px!important",
  },
  visblityOff:{
    width:"30px!important",
  },
  cachedIcon:{
    width:"30px!important",
  }
});
