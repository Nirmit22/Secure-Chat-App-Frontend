import { Button, Grid, ListItem } from "@material-ui/core";
import { useStyles } from "./styles";


const Chatbox = (props) => {
  const classes = useStyles();
  return (
    <ListItem alignItems="center"
      justifyContent="center">
      <Grid container spacing={2}
        alignItems="center"
        justifyContent="center">
        <Grid item xs={3} className={classes.task}>
          <h4 className={classes.head} style={{ color: "#000", fontFamily: "Poppins",textAlign:"center" }}>

            User id: {props.name}<br />

            Message:{props.message}</h4>
        </Grid>
      </Grid>
    </ListItem>
  )
}

export default Chatbox
