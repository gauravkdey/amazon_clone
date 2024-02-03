import { Link } from "react-router-dom";
import AmazonLogo from "../../assets/amazon_logo.png";
import LocationIcon from "./location.png";
import SearchIcon from "./search-interface-symbol.png";
import IndianFlag from "./indian_flag.png";
import ShoppingCartIcon from "./shopping-cart.png";
import { selectList } from "../select_list";
import { ChangeEvent, useState } from "react";
import Sidebar from "./sidebar/sidebar";

export const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <>
      <nav className="flex justify-between items-center bg-primary text-white p-3 gap-0 sm:gap-1 md:gap-6">
        <Link
          to={"/"}
          className="hover:ring-1 rounded-sm ring-white flex items-center text-sm"
        >
          <img width={96} src={AmazonLogo} alt="Amazon Logo" />
          <span className="pb-1">.in</span>
        </Link>
        <div className="hover:ring-1 rounded-sm ring-white flex text-xs justify-center items-center gap-2">
          <img
            src={LocationIcon}
            className="filter invert h-4 w-5"
            alt="location"
          />
          <div>
            <div className="text-stone-300">Delivering to Balasore 756001</div>
            <div className="text-stone-100 font-semibold">Update location</div>
          </div>
        </div>
        <div className="flex grow rounded-l-[0.25rem] group focus-within::ring ring-secondary">
          <select
            className="overflow-hidden text-ellipsis sm:max-w-16 md:max-w-20 w-10 sm:w-20 md:w-40 py-2 text-slate-800 rounded-l-[0.25rem] px-2 focus:ring ring-secondary cursor-pointer"
            name="category_selector"
            id="category_selector"
            defaultValue={selectList[0]}
          >
            {selectList.map((category: string, idx: number) => {
              return (
                <option key={category} value={category}>
                  {category == selectList[0] ? "All" : category}
                </option>
              );
            })}
          </select>
          <input
            type="text"
            name="searchbox"
            id="searchbox"
            value={searchQuery}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setSearchQuery(e.target.value);
            }}
            placeholder="Search Amazon.in"
            className="outline-none w-10 grow  text-slate-700 pointer-events-auto px-3"
          />
          <button className="p-2 w-9 aspect-square flex justify-center items-center rounded-r-[0.25rem] bg-secondary">
            <img className="w-5" src={SearchIcon} alt="Search" />
          </button>
        </div>
        <div className="hover:ring-1 rounded-sm ring-white flex justify-center items-center gap-2 text-xs">
          <img className="w-6 h-4" src={IndianFlag} alt="india" />
          EN
          <span className="text-slate-400 text-[0.5rem] scale-y-60">▼</span>
        </div>
        <div className="hover:ring-1 rounded-sm ring-white flex justify-center items-center gap-2 text-xs">
          <div>
            <div className="text-stone-300">Hello, sign in</div>
            <div className="text-stone-100 font-semibold">Account & Lists</div>
          </div>
          <span className="text-slate-400 text-[0.5rem] scale-y-60">▼</span>
        </div>
        <div className="hover:ring-1 rounded-sm ring-white flex justify-center items-center gap-2 text-xs">
          <div>
            <div className="text-stone-300">Returns</div>
            <div className="text-stone-100 font-semibold">& Orders</div>
          </div>
        </div>
        <Link className="hover:ring-1 rounded-sm ring-white" to={"/cart/view"}>
          <img
            className="w-6 filter invert"
            src={ShoppingCartIcon}
            alt="Shopping Cart"
          />
        </Link>
      </nav>
      <nav className="bg-slate-800 flex justify-between items-center gap-3 text-white text-xs">
        <div className="flex items-center justify-center">
          <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
          <Link
            className="py-2 px-3 grow hover:ring-1 rounded-sm ring-white"
            to="/fresh"
          >
            Fresh
          </Link>
          <Link
            className="py-2 px-3 grow hover:ring-1 rounded-sm ring-white"
            to="/fresh"
          >
            Amazon miniTV Sell
          </Link>
          <Link
            className="py-2 px-3 grow hover:ring-1 rounded-sm ring-white"
            to="/fresh"
          >
            Sell
          </Link>
          <Link
            className="py-2 px-3 grow hover:ring-1 rounded-sm ring-white"
            to="/fresh"
          >
            Best Sellers
          </Link>
          <Link
            className="py-2 px-3 grow hover:ring-1 rounded-sm ring-white"
            to="/fresh"
          >
            Mobiles
          </Link>
          <Link
            className="py-2 px-3 grow hover:ring-1 rounded-sm ring-white"
            to="/fresh"
          >
            Today's Deals
          </Link>
        </div>
        <Link to="/b">
          New Launches from Mobiles, Electronics & more | Shop now
        </Link>
      </nav>
    </>
  );
};
