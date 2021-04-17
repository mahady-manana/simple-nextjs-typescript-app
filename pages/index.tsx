import { CustomHead } from '../components/utils';
import styles from '../styles/Home.module.css';

export default function Home(props) {
  const unusedCode = '';

  return (
    <>
      <div>
        <CustomHead
          title="Homepage"
          descriptionContent="Description content"
        />
      </div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <div></div>
        <div></div>
      </main>
    </>
  );
}
