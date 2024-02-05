import homeStyle from "./styles/home.module.scss";
import HomeSection from "./components/home/homeSection";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <div className={homeStyle.lmplabHomepageMainBg}>
        <HomeSection />
      </div>
    </div>
  );
}
export const metadata = {
  title: "Home Page",
  description: "Home Page Description...",
  openGraph: {
    title: "Home Page",
    description: "Home Page Description...",
    url: "https://lampros-labs-nextjs-new.vercel.app/",
    siteName: "Next.js",

    images: [
      {
        url: "https://www.optimism.io/apps/all", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://www.optimism.io/apps/all", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
