import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() =>
  createStyles({
    sliderRoot: {
      position: 'relative',
      width: '100%',
      listStyle: 'none',
      padding: 0,
      whiteSpace: 'nowrap',
      margin: 0,
    },
    slideItem: {
      width: '100px',
      display: 'inline-block',
    },
    slideItemActive: {
      width: '100%',
    },
    outerSlider: {
      width: '100px',
      height: '100px',
      position: 'relative',
      margin: 'auto',
      borderTop: '2px solid',
    },
    beginSlideShow: {},
  }),
);
