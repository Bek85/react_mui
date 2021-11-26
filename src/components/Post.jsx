import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  makeStyles,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({}));

const Post = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Card>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            component="img"
            height="250"
            image="https://images.pexels.com/photos/9456982/pexels-photo-9456982.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            title="My Post"
          />
          <CardContent>
            <Typography variant="h5">My First Post</Typography>
            <Typography variant="body1">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              illum!
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="sm" color="primary">
            Share
          </Button>
          <Button size="sm" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default Post;
