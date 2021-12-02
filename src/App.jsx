import { Grid, makeStyles } from '@material-ui/core';
import LeftBar from './components/LeftBar';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import RightBar from './components/RightBar';
import Add from './components/Add';

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <LeftBar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <RightBar />
        </Grid>
      </Grid>
      <Add />
    </>
  );
};

export default App;
