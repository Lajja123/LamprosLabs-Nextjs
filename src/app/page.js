import homeStyle from "./styles/home.module.scss";
import HomeSection from "./components/home/homeSection";
import Head from "next/head";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div>
      <NextSeo
        title="Using More of Config"
        description="This example uses more of the available config options."
        url="https://lampros-labs-nextjs-new.vercel.app/"
        openGraph={{
          title: "Open Graph Title",
          description: "Open Graph Description",
          images: [
            {
              url: "https://app.optimism.io/og-image.png",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
          ],
        }}
      />
      <div className={homeStyle.lmplabHomepageMainBg}>
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

// import { NextSeo } from 'next-seo';

// const Page = () => (
//   <>
//     <NextSeo
//       title="Using More of Config"
//       description="This example uses more of the available config options."
//       openGraph={{
//         title: 'Open Graph Title',
//         description: 'Open Graph Description',
//         images: [
//           {
//             url: 'https://app.optimism.io/og-image.png',
//             width: 800,
//             height: 600,
//             alt: 'Og Image Alt',
//             type: 'image/jpeg',
//           },
//         ],
//       }}
//     />
//     <p>SEO Added to Page</p>
//   </>
// );

// export default Page;
