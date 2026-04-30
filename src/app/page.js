import Banner from "@/components/Banner";
import BreakingNews from "@/components/BreakingNews";
import { discoverValidationDepths } from "next/dist/server/app-render/instant-validation/instant-validation";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <Banner></Banner>
    <BreakingNews></BreakingNews>
   </div>
  );
}
