import { createStyles, makeStyles } from '@material-ui/core';
import {
  CustomHead,
  NormalContainer,
  SlideItem,
  SlideShow,
} from '../components/utils';
import styles from '../styles/Home.module.css';
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      '& .mahady-slideshow-item .inner': {
        width: '100%',
        height: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#ccc',
      },
    },
  }),
);
export default function Home() {
  const classes = useStyles();
  return (
    <>
      <div>
        <CustomHead
          title="Homepage"
          descriptionContent="Description content"
        />
      </div>
      <main className={styles.main}>
        <NormalContainer>
          <div>
            <h1>Test</h1>
            <div className={classes.root}>
              <SlideShow>
                <SlideItem index={1}>
                  <div className="inner">Slide 1</div>
                </SlideItem>
                <SlideItem index={2}>
                  <div className="inner">Slide 2</div>
                </SlideItem>
                <SlideItem index={3}>
                  <div className="inner">Slide 3</div>
                </SlideItem>
                <SlideItem index={4}>
                  <div className="inner">Slide 4</div>
                </SlideItem>
              </SlideShow>
            </div>
          </div>
        </NormalContainer>
      </main>
    </>
  );
}
