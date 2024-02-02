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
    image:
      "https://www.kasandbox.org/programming-images/avatars/old-spice-man.png",
    images: [
      {
        url: "https://www.kasandbox.org/programming-images/avatars/old-spice-man.png",
      },
      {
        url: "https://www.kasandbox.org/programming-images/avatars/old-spice-man.png",
      },
    ],
    locale: "en_US",
  },
};
