import { Grid, makeStyles } from "@material-ui/core";
import LeftBar from "./components/LeftBar";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import RightBar from "./components/RightBar";

const useStyles = makeStyles((theme) => ({}));

const App = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Grid container>
        <Grid item sm={2}>
          <LeftBar />
        </Grid>
        <Grid item sm={7}>
          <Feed />
        </Grid>
        <Grid item sm={3}>
          <RightBar />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
