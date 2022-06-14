import Head from "next/head";

const defaultTitle = "Leon Omondi – Independent digital designer";
const defaultDescription =
  "Independent Kenyan-based digital designer with over 6 years experience.";

function SEO({ title = defaultTitle, description = defaultDescription }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="" />
    </Head>
  );
}

export default SEO;
