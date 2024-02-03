import { Link, LinkProps } from "react-router-dom";
import Avatar from "../../../assets/avatar.png";
import { Dispatch } from "react";
import { sidebarContents } from "./sidebarcontent";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
}

export type SidebarContent =
  | {
      childs: SidebarContent[];
      text: string;
      isTitle: false;
      hasChild: true;
    }
  | {
      text: string;
      isTitle: false;
      path: LinkProps["to"];
      hasChild: false;
    }
  | {
      text: string;
      isTitle: true;
      childs: SidebarContent[];
      hasChild: true;
    };

function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  return (
    <>
      <div
        className={`fixed ${
          isOpen ? "left-0 opacity-100" : "left-[-100vw] opacity-0"
        } flex left-0 top-0 w-screen h-screen duration-100`}
      >
        <div className="bg-white">
          <Link
            to={"/signup"}
            className="bg-slate-800 text-white px-8 py-4 gap-3 flex font-bold items-center"
          >
            <img className="w-6 filter invert" src={Avatar} alt="User Avatar" />
            Hello, sign in
          </Link>
          <div className="text-black text-base py-3 overflow-scroll h-screen">
            {sidebarContents.map((sidebarContent: SidebarContent) => {
              return <SidebarElement sidebarContent={sidebarContent} />;
            })}
          </div>
        </div>
        <div
          className="grow bg-black bg-opacity-40"
          onClick={() => {
            setIsOpen(false);
          }}
        />
      </div>
      <button
        className="hover:ring-1 py-2 rounded-sm grow ring-white text-white flex px-3 gap-2 text-sm font-bold"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <div className="flex flex-col justify-center items-center gap-1 cursor-pointer">
          <div className="w-4 bg-white border" />
          <div className="w-4 bg-white border" />
          <div className="w-4 bg-white border" />
        </div>
        <span>All</span>
      </button>
    </>
  );
}

function SidebarElement({
  sidebarContent,
}: {
  sidebarContent: SidebarContent;
}) {
  return sidebarContent.isTitle ? (
    <div className="pt-3">
      <div className="px-6 py-1 font-bold">{sidebarContent.text}</div>
      {sidebarContent.childs.map((child: SidebarContent) => {
        return <SidebarElement key={child.text} sidebarContent={child} />;
      })}
      <hr />
    </div>
  ) : sidebarContent.hasChild ? (
    <div className="">
      <div className="flex justify-between px-6 py-3 hover:bg-stone-200">
        <span>{sidebarContent.text}</span>
        <span>&gt;</span>
      </div>
    </div>
  ) : (
    <div className="flex text-sm">
      <Link
        className="grow px-6 py-3 hover:bg-stone-200"
        to={sidebarContent.path}
      >
        {sidebarContent.text}
      </Link>
    </div>
  );
}

export default Sidebar;
