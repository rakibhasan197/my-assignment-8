import Banner from "@/components/Banner";
import BreakingNews from "@/components/BreakingNews";
import FeaturedCard from "@/components/FeaturedCard";
import FeaturedBooks from "@/components/FeaturedBooks";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";


export default function Home() {
  return (
   <div>
    <Banner></Banner>
    <BreakingNews></BreakingNews>
    <FeaturedBooks></FeaturedBooks>
    <FeaturedCard></FeaturedCard>
    <AboutUs></AboutUs>
    
    
   </div>
  );
}
