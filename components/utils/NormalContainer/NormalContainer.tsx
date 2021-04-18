import React, { FC } from 'react';
import { useStyles } from './style';

interface NormalContainerProps {
  children: any;
  full?: boolean;
}
export const NormalContainer: FC<NormalContainerProps> = ({
  full,
  children,
}) => {
  const classes = useStyles();
  const isFull = full
    ? classes.fullWidthContainer
    : classes.normalContainer;
  return (
    <>
      <div className={`${classes.customContainer} ${isFull}`}>
        {children}
      </div>
    </>
  );
};
