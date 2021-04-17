import Head from 'next/head';

interface CustomHeadProps {
  title: string;
  descriptionContent: string;
}

export const CustomHead = (props: CustomHeadProps) => {
  const { title, descriptionContent } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={descriptionContent} />
      </Head>
    </>
  );
};
