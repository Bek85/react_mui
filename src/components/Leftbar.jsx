import { Container, makeStyles, Typography } from "@material-ui/core";
import { Home } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const LeftBar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Home />
        <Typography>HomePage</Typography>
      </div>
    </Container>
  );
};

export default LeftBar;
