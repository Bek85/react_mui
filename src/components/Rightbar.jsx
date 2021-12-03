import {
  Avatar,
  Container,
  Divider,
  ImageList,
  ImageListItem,
  Link,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    height: '100vh',
    position: 'sticky',
    top: 0,
  },
  link: {
    marginRight: theme.spacing(2),
    color: '#555',
    fontSize: 16,
  },
}));

const RightBar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography variant="body1" gutterBottom>
        Online Friends
      </Typography>
      <AvatarGroup max={4} style={{ marginBottom: 20 }}>
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://mui.com/static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://mui.com/static/images/avatar/3.jpg"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://mui.com/static/images/avatar/4.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://mui.com/static/images/avatar/5.jpg"
        />
      </AvatarGroup>
      <Typography variant="body1" gutterBottom>
        Gallery
      </Typography>
      <ImageList rowHeight={160} cols={2} style={{ marginBottom: 20 }}>
        <ImageListItem cols={1}>
          <img
            src="https://images.unsplash.com/photo-1638288949270-cc27c2b40486?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=681&q=80"
            alt="..."
          />
        </ImageListItem>
        <ImageListItem cols={1}>
          <img
            src="https://images.unsplash.com/photo-1638385583493-484240554d5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
          />
        </ImageListItem>
        <ImageListItem cols={1}>
          <img
            src="https://images.unsplash.com/photo-1638292596880-f2887edc9a82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            alt=""
          />
        </ImageListItem>
        <ImageListItem cols={1}>
          <img
            src="https://images.unsplash.com/photo-1638401985661-70b21ca6db39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
            alt=""
          />
        </ImageListItem>
      </ImageList>
      <Typography variant="body1" gutterBottom>
        Categories
      </Typography>
      <Link href="#" className={classes.link} variant="body2">
        Sport
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Food
      </Link>
      <Divider flexItem style={{ marginBottom: 5 }} />
      <Link href="#" className={classes.link} variant="body2">
        Movies
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Science
      </Link>
    </Container>
  );
};

export default RightBar;
