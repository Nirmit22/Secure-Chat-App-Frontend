import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
      backgroundColor:"#369",
      width:"500px",
      height:"400px",
      marginTop:"10px",
      alignItems:"center"
  },
  glogin: {
    paddingRight: "10 px",
  },
  txtfield: {
    color: "#000!important",
    fontFamily: "Poppins",
    width: "auto",
    marginBottom: "10px"
  },
  outfield: {
    marginBottom: "10px",
    "& label.Mui-focused": {
      color: "black",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "black",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "black",
      },
      "&:hover fieldset": {
        borderColor: "black",
      },
      "&.Mui-focused fieldset": {
        borderColor: "black",
      },
    },
    "& label.Mui-disabled": {
      color: "red",
    },
  },
  formBtn: {
    fontFamily: "Poppins",
    color:"#000",
    backgroundColor:"yellow",
    marginBottom: "20px",
    marginTop: "10px",
  },
  task: {
    alignItems: "center",
    width: "200px",
    margin: "10px",
    padding: "10px 100px",
    backgroundColor:"#369",
  },
  taskMenu: {
    alignItems: "center",
    width: "50px",
    height:"20px",
    margin: "10px",
    padding: "5px 100px",
    backgroundColor:"white",
    color:"#000"
  },
  head: {
    marginBottom: "0px",
    marginRight: "0px",
    padding: "0px",
    marginTop: "0px",
  },
}));