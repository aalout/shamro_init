import Banner from "@/components/Banner";
import Cards from "@/components/Cards";
import Grade from "@/components/Grade";
import Header from "@/components/Header";
import Video from "@/components/Video";
import Link from "next/link";
import Psycho from "@/components/Psycho";

export default function Home() {
  return (
    <div>
      <Banner/>
      <Video/>
      <Grade/>
      <Cards/>
      <Psycho />
    </div>
  );
}
