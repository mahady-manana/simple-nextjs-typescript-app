import React, { FC } from 'react';
import { useStyles } from './style';

interface SlideItemProps {
  children: React.ReactElement | string;
  index: number;
  className?: string;
  style?: object;
}
export const SlideItem: FC<SlideItemProps> = ({
  children,
  index,
  className,
  style,
}) => {
  const classes = useStyles();
  return (
    <>
      <li
        className={`mahady-slideshow-item ${classes.slideItem} ${
          className || ''
        }`}
        data-index={index}
        style={style}
      >
        {children}
      </li>
    </>
  );
};
