import Image from "next/image";
import { NavBar,Footer, Carousel } from "@/components";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Carousel />
      <Footer />
    </div>
  );
}
