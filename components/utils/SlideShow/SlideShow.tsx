import React, { FC, useEffect, useState } from 'react';
import { SlideItem } from './SlideItem';
import { useStyles } from './style';
interface SlideShowProps {
  children:
    | React.ReactElement<typeof SlideItem>[]
    | Array<React.ReactElement<typeof SlideItem>>;
}
export const SlideShow: FC<SlideShowProps> = ({ children }) => {
  const classes = useStyles();
  const items = children;
  const [index, setIndex] = useState<number>(1);
  const [animations, setAnimations] = useState({
    transform: `translate3d(-100%,0,0)`,
    transition: '.5s',
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
          style={animations}
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
