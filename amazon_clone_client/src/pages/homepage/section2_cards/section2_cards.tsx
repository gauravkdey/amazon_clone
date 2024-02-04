import { Link } from "react-router-dom";
import HomepageCard, {
  HomepageCardProps,
} from "../../../components/homepage_card/homepage_card";
import image1 from "./section2_img1.jpg";
import image2 from "./section2_img2.jpg";
import image3 from "./section2_img3.jpg";
import image4 from "./section2_img4.jpg";

const section2Card1Details: HomepageCardProps = {
  title: "Today's Deals",
  body: (
    <div className="flex flex-col gap-1 px-6">
      <div className="grid grid-cols-4 gap-4">
        <img className="flex grow" src={image1} alt="image 1" />
        <img className="flex grow" src={image2} alt="image 2" />
        <img className="flex grow" src={image3} alt="image 3" />
        <img className="flex grow" src={image4} alt="image 4" />
      </div>
      <div className="grid gap-1 grid-cols-4 text-xs">
        <div className="flex flex-col gap-1 py-2 grow line-clamp-1 w-full">
          <div className="flex gap-2 items-center text-red-600 font-bold text-xs">
            <div className="bg-red-600 py-1 px-2 text-white">Up to 75% off</div>{" "}
            Deals of the Day
          </div>
          Best Offers on Storite
        </div>
        <div className="flex flex-col gap-1 py-2 grow line-clamp-1 w-full">
          <div className="flex gap-2 items-center text-red-600 font-bold text-xs">
            <div className="bg-red-600 py-1 px-2 text-white">Up to 75% off</div>{" "}
            Deals of the Day
          </div>
          Best Offers from Top Brands
        </div>
        <div className="flex flex-col gap-1 py-2 grow line-clamp-1 w-full">
          <div className="flex gap-2 items-center text-red-600 font-bold text-xs">
            <div className="bg-red-600 py-1 px-2 text-white">Up to 75% off</div>{" "}
            Deals of the Day
          </div>
          Water Softeners & Accessories from WaterScience
        </div>
        <div className="flex flex-col gap-1 py-2 grow line-clamp-1 w-full">
          <div className="flex gap-2 items-center text-red-600 font-bold text-xs">
            <div className="bg-red-600 py-1 px-2 text-white">Up to 75% off</div>{" "}
            Deals of the Day
          </div>
          Best Offers on Storite
        </div>
      </div>
    </div>
  ),
  //link update
  description: (
    <Link to="/b/" className="text-blue-600">
      Explore all
    </Link>
  ),
};

const section2CardsDetails: HomepageCardProps[] = [
  section2Card1Details,
  section2Card1Details,
  section2Card1Details,
];

function Section2Cards({
  length = section2CardsDetails.length,
}: {
  length?: number;
}) {
  return (
    <div className="px-4 -translate-y-32 grid grid-row-3 gap-4">
      {section2CardsDetails
        .slice(0, length)
        .map((section2CardsDetail: HomepageCardProps, idx: number) => {
          return <HomepageCard {...section2CardsDetail} key={idx} />;
        })}
    </div>
  );
}

export default Section2Cards;
