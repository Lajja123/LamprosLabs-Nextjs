import homeStyle from "./styles/home.module.scss";
import HomeSection from "./components/home/homeSection";

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
    url: "https://lampros-labs-nextjs-new.vercel.app/dao-roadmap",
    type: "website",
    siteName: "Next.js",
    images: [
      {
        url: "https://www.kresko.fi/apple-touch-icon.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://www.kresko.fi/apple-touch-icon.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
  },
};
