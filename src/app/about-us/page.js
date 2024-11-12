import AboutSection from "../components/about/aboutSection";

export default function aboutPage() {
  return (
    <div>
      <AboutSection />
    </div>
  );
}
export const metadata = {
  title: "About Us",
  // description: "About Page Description...",
  openGraph: {
    title: "About Us",
    // description: "About Page Description...",
    url: "https://lampros-labs-nextjs-new.vercel.app/about-us",
    siteName: "LamprosDAO",
    // images: [
    //   {
    //     url: "https://uniswap.org/images/twitter-card.jpg",
    //     width: 800,
    //     height: 600,
    //   },
    //   {
    //     url: "https://uniswap.org/images/twitter-card.jpg",
    //     width: 1800,
    //     height: 1600,
    //     alt: "My custom alt",
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
};
