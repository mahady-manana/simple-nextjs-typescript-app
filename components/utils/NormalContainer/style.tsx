import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() =>
  createStyles({
    customContainer: {
      margin: 'auto',
      width: '100%',
    },
    normalContainer: {
      maxWidth: 1080,
    },
    fullWidthContainer: {
      maxWidth: '100%',
    },
  }),
);
