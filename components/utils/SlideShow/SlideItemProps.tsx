import React, { FC } from 'react';
import { useStyles } from './style';

interface SlideItemProps {
  children: React.ReactElement | string;
  index: number;
  key: number;
}
export const SlideItem: FC<SlideItemProps> = ({
  children,
  index,
  key,
}) => {
  const classes = useStyles();
  return (
    <>
      <li
        className={`${classes.slideItem}`}
        data-index={index}
        key-index={key}
      >
        {children}
      </li>
    </>
  );
};
