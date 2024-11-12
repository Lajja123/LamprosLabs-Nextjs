import Governancesection from "../components/governance/governancesection";

export default function governancePage() {
  return (
    <div>
      <p>hgfdfg</p>
      <Governancesection />
    </div>
  );
}
export const metadata = {
  title: "Governance",
  openGraph: {
    title: "Governance",
    url: "https://lampros-labs-nextjs-new.vercel.app/governance",
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
