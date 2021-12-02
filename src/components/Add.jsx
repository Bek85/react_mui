import { makeStyles, Tooltip, Fab, Modal, Container } from '@material-ui/core';
import { AddOutlined } from '@material-ui/icons';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: 20,
    right: 20,
  },
  container: {
    width: 500,
    height: 550,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    margin: 'auto',
    [theme.breakpoints.down('xs')]: {
      width: '100vw',
      height: '100vh',
    },
  },
}));

const Add = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip title="Add" aria-label="add" onClick={() => setOpen(!open)}>
        <Fab color="primary" className={classes.fab}>
          <AddOutlined />
        </Fab>
      </Tooltip>
      <Modal open={open} onClick={() => setOpen(!open)}>
        <Container className={classes.container}>Hello</Container>
      </Modal>
    </>
  );
};

export default Add;
