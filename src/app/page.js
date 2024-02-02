import homeStyle from "./styles/home.module.scss";
import HomeSection from "./components/home/homeSection";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <div className={homeStyle.lmplabHomepageMainBg}>
        <Head>
          <title>Home Page</title>
          <meta name="description" content="Home Page Description..." />
          <meta name="keywords" content="react, meta tags, seo" />
          <meta name="author" content="Your Name" />
          <meta property="og:title" content="Home Page" />
          <meta property="og:description" content="Home Page Description..." />
          <meta
            property="og:image"
            content="https://lampros-labs-nextjs-new.vercel.app/"
          />
          <meta
            property="og:url"
            content="https://lampros-labs-nextjs-new.vercel.app/"
          />
          <meta name="twitter:title" content="My Page Title" />
          <meta
            name="twitter:description"
            content="This is a description of my page"
          />
          <meta
            name="twitter:image"
            content="https://lampros-labs-nextjs-new.vercel.app/"
          />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <HomeSection />
      </div>
    </div>
  );
}
