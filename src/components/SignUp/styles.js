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
    marginBottom: "20px",
    marginTop: "10px",
  },
}));