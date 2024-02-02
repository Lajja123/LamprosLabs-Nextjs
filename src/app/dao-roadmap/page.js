import DaoSection from "../components/dao/daoSection";

export default function daoPage() {
  return <DaoSection />;
}
export const metadata = {
  title: "Dao Page",
  description: "Dao Page Description...",
  openGraph: {
    title: "Dao Page",
    description: "Dao Page Description...",
    url: "https://lampros-labs-nextjs-new.vercel.app/dao-roadmap",
    type: "website",
    siteName: "Next.js",
    images: [
      {
        url: "https://assets-global.website-files.com/63e140bbb85d2537a191962d/63e140bbb85d25def591973b_image-hero-finantech-x-webflow-template.svg",
        width: 800,
        height: 600,
      },
      {
        url: "https://assets-global.website-files.com/63e140bbb85d2537a191962d/63e140bbb85d25def591973b_image-hero-finantech-x-webflow-template.svg",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
  },
};
