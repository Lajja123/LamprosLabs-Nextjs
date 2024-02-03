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
    image:
      "https://www.kasandbox.org/programming-images/avatars/old-spice-man.png",
    images: [
      {
        url: "https://assets-global.website-files.com/63e140bbb85d2537a191962d/63e140bbb85d25def591973b_image-hero-finantech-x-webflow-template.svg",
        width: 1200,
        height: 630,
      },
      {
        url: "https://assets-global.website-files.com/63e140bbb85d2537a191962d/63e140bbb85d25def591973b_image-hero-finantech-x-webflow-template.svg",
        width: 1200,
        height: 630,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
  },
};
