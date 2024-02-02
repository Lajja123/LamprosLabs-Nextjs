import HackathonSection from "@/app/components/hackathon/hackathonSection";

export default function hackathon() {
  return <HackathonSection />;
}
export const metadata = {
  title: "Hackathon Page",
  description: "Hackathon Page Description...",
  openGraph: {
    title: "Hackathon Page",
    description: "Hackathon Description",
    url: "https://lampros-labs-nextjs-new.vercel.app/programs/hackathon",
    type: "website",
    siteName: "Next.js",
    images: [
      {
        url: "https://portals.fi/static/media/api-img.d39ce11886c98599d337590e074f9c69.svg",
        width: 800,
        height: 600,
      },
      {
        url: "https://portals.fi/static/media/api-img.d39ce11886c98599d337590e074f9c69.svg",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
  },
};
