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
    type: "website",
    siteName: "Next.js",

    images: [
      {
        url: "https://app.optimism.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Custom alt text for the image",
      },
      {
        url: "https://app.optimism.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Custom alt text for the image",
      },
    ],
    locale: "en_US",
  },
};
