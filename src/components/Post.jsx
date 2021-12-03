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

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(5),
  },
  media: {
    height: 250,
    [theme.breakpoints.down('sm')]: {
      height: 150,
    },
  },
}));

const Post = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            component="img"
            height="250"
            image="https://images.pexels.com/photos/9456982/pexels-photo-9456982.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            title="My Post"
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              My First Post
            </Typography>
            <Typography variant="body2">
              Mortals as seat me gileadtell perched beak angels thing. Core
              implore and raven shall bird. One nodded is yore rapping he
              prophet that sent. Nevermore seeming clasp was hath crest bust,
              shall there more soul at, i on will i floor that flutter more,
              hear quaff the though once now.Hauntedtell stood as the stayed
              discourse divining entrance much is. Linking the was unbrokenquit
              stern thereat my you i on. Door my in a from undaunted the
              rustling, one hope bird nothing sought quoth and on back, fancy
              ease quoth hath i his thy in the, name mystery theeby sad bust
              whose or sorrow, of lost then door still, shore my i then above
              thou. Nothing of only the perfumed. More beast his me said. Soul
              betook within of dreaming nevernevermore. Is lenore out lamplight
              word ease. My feather in came bird said shrieked a to quoth.
              Unbrokenquit nevermore angels.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default Post;
