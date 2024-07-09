import DaoSection from "../components/dao/daoSection";

export default function daoPage() {
  return <DaoSection />;
}
export const metadata = {
  title: "Dao Roadmap",
  // description: "Dao Page Description...",
  openGraph: {
    title: "Dao Roadmap",
    // description: "Dao Page Description...",
    url: "https://lampros-labs-nextjs-new.vercel.app/dao-roadmap",
    siteName: "LamprosLabs",
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
