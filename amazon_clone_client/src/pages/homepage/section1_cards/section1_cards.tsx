import { Link } from "react-router-dom";
import HomepageCard, {
  HomepageCardProps,
} from "../../../components/homepage_card/homepage_card";
import image1 from "./section1_img1.jpg";
import image2 from "./section1_img2.jpg";
import image3 from "./section1_img3.jpg";
import image4 from "./section1_img4.jpg";

const section1Card1Details: HomepageCardProps = {
  title: "Revamp your home in style",
  body: (
    <div className="text-xs flex flex-col gap-3">
      <div className="flex flex-col grow gap-1">
        <div className="grid grid-cols-2 gap-4">
          <img className="flex grow" src={image1} alt="image 1" />
          <img className="flex grow" src={image2} alt="image 2" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex grow">
            Cushion covers, bedsheets & more Figurines, vases and more
          </div>
          <div className="flex grow">Figurines, vases and more</div>
        </div>
      </div>
      <div className="flex flex-col grow gap-1">
        <div className="grid grid-cols-2 gap-4">
          <img className="flex grow" src={image3} alt="image 1" />
          <img className="flex grow" src={image4} alt="image 2" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex grow">Home storage Home storage</div>
          <div className="flex grow">Lighting solutions</div>
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

const section1CardsDetails: HomepageCardProps[] = [
  section1Card1Details,
  section1Card1Details,
  section1Card1Details,
  section1Card1Details,
  section1Card1Details,
  section1Card1Details,
  section1Card1Details,
  section1Card1Details,
  section1Card1Details,
];

function Section1Cards({
  length = section1CardsDetails.length,
}: {
  length?: number;
}) {
  return (
    <div className="px-4 -translate-y-32 grid grid-cols-3 gap-4">
      {section1CardsDetails
        .slice(0, length)
        .map((section1CardsDetail: HomepageCardProps, idx: number) => {
          return <HomepageCard {...section1CardsDetail} key={idx} />;
        })}
    </div>
  );
}

export default Section1Cards;
