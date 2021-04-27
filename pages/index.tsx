import React, { useState, useEffect } from 'react';
import { CustomHead, NormalContainer } from '../components/utils';
import { useStyles } from '../styles/style';

export default function Home() {
  const classes = useStyles();
  const [index, setIndex] = useState(1);
  const [dur, setDur] = useState('');

  const Prev = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setDur('.5s');
    setIndex((prev) => (prev === 1 ? 4 : prev - 1));
  };
  const Next = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setDur('.5s');
    setIndex((prev) => (prev === 4 ? 1 : prev + 1));
  };
  useEffect(() => {
    setTimeout(() => setDur(''), 300);
  }, [index]);
  return (
    <>
      <div>
        <CustomHead
          title="Homepage"
          descriptionContent="Description content"
        />
      </div>
      <main>
        <NormalContainer className={classes.root}>
          <div>
            <h1>This will work smoothly</h1>
          </div>
          <div className={classes.container}>
            <div
              className={classes.wrapper}
              style={{
                transform: `translate3d(${-index * 100}px,0,0)`,
                transition: `${dur}`,
              }}
            >
              <div
                className={classes.item}
                style={{ background: '#f00' }}
              >
                Slide item 4 clone
              </div>
              <div
                className={classes.item}
                style={{ background: '#000' }}
              >
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
              <div
                className={classes.item}
                style={{ background: '#f00' }}
              >
                Slide item 4
              </div>
              <div
                className={classes.item}
                style={{ background: '#000' }}
              >
                Slide item 1 clone
              </div>
            </div>
          </div>
          <div>
            <button onClick={Prev}>Prev</button>
            <button onClick={Next}>Next</button>
          </div>
        </NormalContainer>
      </main>
    </>
  );
}
