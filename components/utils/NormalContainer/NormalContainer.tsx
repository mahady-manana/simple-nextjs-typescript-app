import React, { FC } from 'react';
import { useStyles } from './style';

interface NormalContainerProps {
  children: any;
  full?: boolean;
  className?: string;
}
export const NormalContainer: FC<NormalContainerProps> = ({
  full,
  children,
  className,
}) => {
  const classes = useStyles();
  const isFull = full
    ? classes.fullWidthContainer
    : classes.normalContainer;
  return (
    <>
      <div
        className={`${classes.customContainer} ${isFull} ${className} `}
      >
        {children}
      </div>
    </>
  );
};
