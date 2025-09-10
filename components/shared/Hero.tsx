import Link from "next/link";
import { Button } from "../ui/button";
import Badge from "./Badge";
import Gallery from "./Gallery";

const socialMedia = [
  { title: "Instagram", url: "https://www.instagram.com/webizera.co/" },
  {
    title: "Facebook",
    url: "https://web.facebook.com/profile.php?id=61550819112955",
  },
];

export default function Hero() {
  return (
    <section className="h-full py-12 px-4">
      <div className="flex flex-col text-center items-center justify-center">
        <div className="lg:max-w-3xl w-full flex flex-col items-center justify-center gap-6">
          <Badge title="Based in Sri Lanka • Worldwide delivery" />
          <h1 className="text-3xl lg:text-7xl text-white font-bold leading-[64px] lg:leading-[80px]">
            we create solutions adapted to your needs
          </h1>
          <p className="font-regular lg:text-lg text-muted">
            No matter your challenge: development, automation, integration, or
            digital strategy—we have the solution.
          </p>
          <div className="flex items-center justify-center gap-4 w-full">
            <Button size="default" className="text-lg font-medium">
              <Link href="#portfolio">See our Projects</Link>
            </Button>
            <Button variant="outline" className="text-lg font-medium">
              <Link href="#services">See our Services</Link>
            </Button>
          </div>
        </div>
        <Gallery />
      </div>
    </section>
  );
}
