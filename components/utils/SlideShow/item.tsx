import React from 'react';
import { useStyles } from '../../../styles/style';

export const Item = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.item} style={{ background: '#f00' }}>
        Slide item 4 clone
      </div>
      <div className={classes.item} style={{ background: '#000' }}>
        Slide item 1
      </div>
      <div
        className={classes.item}
        style={{ background: 'rgb(38 86 45)' }}
      >
        Slide item 2
      </div>
      <div
        className={classes.item}
        style={{ background: 'rgb(86 81 38)' }}
      >
        Slide item 3
      </div>
      <div className={classes.item} style={{ background: '#f00' }}>
        Slide item 4
      </div>
      <div className={classes.item} style={{ background: '#000' }}>
        Slide item 1 clone
      </div>
    </>
  );
};
