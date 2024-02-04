import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="bg-slate-800 text-white grid grid-cols-4 py-12 px-8">
        <div className="flex flex-col gap-3">
          <div className="font-bold">Get to Know Us</div>
          <ul className="text-sm flex flex-col gap-2">
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/jobs">Careers</Link>
            </li>
            <li>
              <Link to="press">Press Releases</Link>
            </li>
            <li>
              <Link to="/science">Amazon Science</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <div className="font-bold">Connect with Us</div>
          <ul className="text-sm flex flex-col gap-2">
            <li>
              <Link to="http://www.facebook.com/AmazonIN">Facebook</Link>
            </li>
            <li>
              <Link to="http://twitter.com/AmazonIN">Twitter</Link>
            </li>
            <li>
              <Link to="https://www.instagram.com/amazondotin">Instagram</Link>
            </li>
          </ul>
        </div>
        {/*  */}
        <div className="flex flex-col gap-3">
          <div className="font-bold">Make Money With Us</div>
          <ul className="text-sm flex flex-col gap-2">
            <li>
              <Link to="https://www.amazon.in/b/?node=2838698031&ld=AZINSOANavDesktopFooter_C&ref_=nav_footer_sell_C">
                Sell on Amazon
              </Link>
            </li>
            <li>
              <Link to="https://accelerator.amazon.in/?ref_=map_1_b2b_GW_FT">
                Sell under Amazon Accelerator
              </Link>
            </li>
            <li>
              <Link to="https://brandservices.amazon.in/?ref=AOINABRLGNRFOOT&ld=AOINABRLGNRFOOT">
                Protect and Build Your Brand
              </Link>
            </li>
            <li>
              <Link to="https://sell.amazon.in/grow-your-business/amazon-global-selling.html?ld=AZIN_Footer_V1&ref=AZIN_Footer_V1">
                Amazon Global Selling
              </Link>
            </li>
            <li>
              <Link to="https://affiliate-program.amazon.in/?utm_campaign=assocshowcase&utm_medium=footer&utm_source=GW&ref_=footer_assoc">
                Become an Affiliate
              </Link>
            </li>
            <li>
              <Link to="https://services.amazon.in/services/fulfilment-by-amazon/benefits.html/ref=az_footer_fba?ld=AWRGINFBAfooter">
                Fulfilment by Amazon
              </Link>
            </li>
            <li>
              <Link to="https://advertising.amazon.in/?ref=Amz.in">
                Advertise Your Products
              </Link>
            </li>
            <li>
              <Link to="https://www.amazonpay.in/merchant">
                Amazon Pay on Merchants
              </Link>
            </li>
          </ul>
        </div>
        {/*  */}
        <div className="flex flex-col gap-3">
          <div className="font-bold">Let Us Help You</div>
          <ul className="text-sm flex flex-col gap-2">
            <li>
              <Link to="https://www.amazon.in/gp/help/customer/display.html?nodeId=GDFU3JS5AL6SYHRD&ref_=footer_covid">
                COVID-19 and Amazon
              </Link>
            </li>
            <li>
              <Link to="https://www.amazon.in/gp/css/homepage.html?ref_=footer_ya">
                Your Account
              </Link>
            </li>
            <li>
              <Link to="https://www.amazon.in/gp/css/returns/homepage.html?ref_=footer_hy_f_4">
                Returns Centre
              </Link>
            </li>
            <li>
              <Link to="https://www.amazon.in/gp/help/customer/display.html?nodeId=201083470&ref_=footer_swc">
                100% Purchase Protection
              </Link>
            </li>
            <li>
              <Link to="https://www.amazon.in/gp/browse.html?node=6967393031&ref_=footer_mobapp">
                Amazon App Download
              </Link>
            </li>
            <li>
              <Link to="https://www.amazon.in/gp/help/customer/display.html?nodeId=200507590&ref_=footer_gw_m_b_he">
                Help
              </Link>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className="bg-slate-800 text-white">
        <div></div>
      </div>
    </>
  );
}

export default Footer;
