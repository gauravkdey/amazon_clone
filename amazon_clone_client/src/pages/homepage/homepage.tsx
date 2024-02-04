import { Link } from "react-router-dom";
import HomepageHero from "../../components/homepage_hero/homepage_hero";
import { Navbar } from "../../components/navbar/navbar";
import Section1Cards from "./section1_cards/section1_cards";
import Section2Cards from "./section2_cards/section2_cards";
import Footer from "../../components/footer/footer";

function Homepage() {
  return (
    <div className="min-h-screen w-full bg-slate-200">
      <Navbar />
      <HomepageHero />
      <div className="flex flex-col gap-4">
        <Section1Cards />
        <Section2Cards />
        <Section1Cards length={3} />
        <Section2Cards length={2} />
        <Section1Cards length={3} />
        <Section2Cards length={2} />
      </div>
      <div className="flex justify-center items-center py-8 bg-white">
        <div className="flex gap-2 text-sm flex-col justify-center items-center border-y border-slate-300 w-full py-4">
          <div>See personalized recommendations</div>
          <button className="px-24 font-bold py-0.5 flex grow bg-orange-300 rounded-md border border-orange-400">
            Sign in
          </button>
          <div>
            New customer?{" "}
            <Link className="px-2 text-blue-600" to={"/ap/register"}>
              Start here
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
