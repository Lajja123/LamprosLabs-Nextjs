import AboutSection from "../components/about/aboutSection";

export default function aboutPage() {
  return (
    <div>
      <AboutSection />
    </div>
  );
}
export const metadata = {
  title: "About Page",
  description: "About Page Description...",
  openGraph: {
    title: "About Page",
    description: "About Page Description...",
    url: "https://metatags-nextjs.vercel.app/home",
    type: "website",
    siteName: "Next.js",
    images: [
      {
        url: "https://www.kasandbox.org/programming-images/avatars/old-spice-man.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://www.kasandbox.org/programming-images/avatars/old-spice-man.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
  },
};
