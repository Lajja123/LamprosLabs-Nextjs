import homeStyle from "./styles/home.module.scss";
import HomeSection from "./components/home/homeSection";
import Head from "next/head";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div>
      <div className={homeStyle.lmplabHomepageMainBg}>
        <NextSeo
          title="Home Page Title"
          description="Home page description of the page"
        />
        <HomeSection />
      </div>
    </div>
  );
}
// export const metadata = {
//   title: "Home Page",
//   description: "Home Page Description...",
//   openGraph: {
//     title: "Home Page",
//     description: "Home Page Description...",
//     url: "https://lampros-labs-nextjs-new.vercel.app/",
//     siteName: "Next.js",

//     images: [
//       {
//         url: "https://app.optimism.io/og-image.png", // Must be an absolute URL
//         width: 800,
//         height: 600,
//       },
//       {
//         url: "https://app.optimism.io/og-image.png", // Must be an absolute URL
//         width: 1800,
//         height: 1600,
//         alt: "My custom alt",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
// };
