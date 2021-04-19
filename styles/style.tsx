import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    container: {
      width: 100,
      position: 'relative',
      height: 100,
      padding: 0,
    },
    wrapper: {
      whiteSpace: 'nowrap',
      position: 'absolute',
      top: 0,
      transform: 'translate3d(-100px, 0,0)',
      margin: 0,
      padding: 0,
      transition: '.5s',
    },
    item: {
      display: 'inline-flex',
      width: 100,
      height: 100,
      verticalAlign: 'top',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      color: '#fff',
    },
  }),
);
