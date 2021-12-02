import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    color: '#fff',
    backgroundColor: 'blue',
    height: '100vh',
    position: 'sticky',
    top: 0
  },
}));

const RightBar = () => {
  const classes = useStyles();
  return <Container className={classes.container}>RightBar</Container>;
};

export default RightBar;
