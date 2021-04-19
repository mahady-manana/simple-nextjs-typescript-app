import { makeStyles, createStyles } from '@material-ui/core';
import React, { FC, useEffect, useState } from 'react';
import { SlideItem } from './SlideItem';
import { useStyles } from './style';
interface SlideShowProps {
  children:
    | React.ReactElement<typeof SlideItem>[]
    | Array<React.ReactElement<typeof SlideItem>>;
}
const anima = (index) =>
  makeStyles(() =>
    createStyles({
      root: {
        '#stm-slider': {
          animation: 'Slider .5s linear infinite',
          transform: 'translate3d(-100%,0,0)',
        },
        '@keyframes myEffect': {
          '0%': {
            transform: `translate3d(-${index}%,0,0)`,
          },
          '100%': {
            opacity: 1,
            transform: `translate3d(-${index + index}%,0,0)`,
          },
        },
      },
    }),
  );
export const SlideShow: FC<SlideShowProps> = ({ children }) => {
  const classes = useStyles();
  const items = children;
  const [index, setIndex] = useState<number>(1);
  const [animations, setAnimations] = useState({
    transform: `translate3d(-100%,0,0)`,
    transitionDuration: '.5s',
  });
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev === items.length ? 1 : prev + 1));
      setAnimations((prev) => ({
        ...prev,
        transform: `translate3d(-${index * 100}%,0,0)`,
      }));
    }, 4000);
    return () => {
      clearTimeout(timeout);
    };
  }, [index]);

  return (
    <>
      <div className={classes.outerSlider}>
        <ul
          className={classes.sliderRoot}
          id="stm-slider"
          style={
            index > items.length || index === 0
              ? { transform: `translate3d(-100%,0,0)` }
              : animations
          }
        >
          {items.map((item: React.ReactElement, index: number) => {
            if (index + 1 === items.length) {
              return (
                <SlideItem key={index} index={index}>
                  {item.props.children}
                </SlideItem>
              );
            } else return;
          })}
          {items.map((item: React.ReactElement, index: number) => {
            return (
              <SlideItem key={index} index={index}>
                {item.props.children}
              </SlideItem>
            );
          })}
          {items.map((item: React.ReactElement, index: number) => {
            if (index === 0) {
              return (
                <SlideItem key={index} index={index}>
                  {item.props.children}
                </SlideItem>
              );
            } else {
              return;
            }
          })}
        </ul>
      </div>
    </>
  );
};
