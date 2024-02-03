import { SidebarContent } from "./sidebar";

export const sidebarContents: SidebarContent[] = [
  {
    text: "Trending",
    isTitle: true,
    hasChild: true,
    childs: [
      {
        text: "Best Seller",
        path: "/gp/bestsellers",
        isTitle: false,
        hasChild: false,
      },
      {
        text: "New Releases",
        path: "/gp/new-releases",
        isTitle: false,
        hasChild: false,
      },
      {
        text: "Movers and Shakers",
        path: "/gp/movers-and-shakers",
        isTitle: false,
        hasChild: false,
      },
    ],
  },
  {
    text: "Digital Content and Devices",
    isTitle: true,
    hasChild: true,
    childs: [
      {
        text: "Amazon miniTV- FREE entertainment",
        path: "/minitv",
        isTitle: false,
        hasChild: false,
      },
      {
        text: "Echo & Alexa",
        isTitle: false,
        childs: [
          {
            text: "Echo & Alexa",
            isTitle: false,
            hasChild: true,
            childs: [
              {
                text: "See all devices with Alexa",
                path: "/gp/browse",
                isTitle: false,
                hasChild: false,
              },
            ],
          },
          {
            text: "Content & Resources",
            isTitle: true,
            hasChild: true,
            childs: [
              {
                text: "Meet Alexa",
                path: "/gp/browse",
                isTitle: false,
                hasChild: false,
              },
              {
                text: "Alexa Skills",
                path: "/gp/browse",
                isTitle: false,
                hasChild: false,
              },
              {
                text: "Meet Alexa",
                path: "/gp/help/coustomer/display",
                isTitle: false,
                hasChild: false,
              },
              {
                text: "Alexa Smart Home",
                path: "/gp/browse",
                isTitle: false,
                hasChild: false,
              },
              {
                text: "Amazon Prime Music",
                path: "/gp/browse",
                isTitle: false,
                hasChild: false,
              },
            ],
          },
        ],
        hasChild: true,
      },
      {
        text: "Fire TV",
        isTitle: false,
        hasChild: true,
        childs: [],
      },
      {
        text: "Kindle E-Readers & eBooks",
        isTitle: false,
        hasChild: true,
        childs: [],
      },
      {
        text: "Audible Audiobooks",
        isTitle: false,
        hasChild: true,
        childs: [],
      },
      {
        text: "Amazon Prime Video",
        isTitle: false,
        hasChild: true,
        childs: [],
      },
      {
        text: "Amazon Prime Music",
        isTitle: false,
        hasChild: true,
        childs: [],
      },
    ],
  },
  {
    text: "Shop By Category",
    isTitle: true,
    hasChild: true,
    childs: [
      {
        text: "Mobiles, Computers",
        isTitle: false,
        hasChild: true,
        childs: [],
      },
      {
        text: "TV, Appliances, Electronics",
        isTitle: false,
        hasChild: true,
        childs: [],
      },
      {
        text: "Men's Fashion",
        isTitle: false,
        hasChild: true,
        childs: [],
      },
      {
        text: "Women's Fashion",
        isTitle: false,
        hasChild: true,
        childs: [],
      },
    ],
  },
  {
    text: "Programs & Features",
    isTitle: true,
    hasChild: true,
    childs: [
      {
        text: "Amazon Pay",
        isTitle: false,
        hasChild: false,
        path: "/amazonpay/home",
      },
      {
        text: "Gift Cards & Mobile Recharges",
        isTitle: false,
        hasChild: true,
        childs: [],
      },
      {
        text: "Amazon Launchpad",
        isTitle: false,
        hasChild: true,
        childs: [],
      },
      {
        text: "Handloom and Handicrafts",
        isTitle: false,
        hasChild: true,
        childs: [],
      },
    ],
  },
  {
    text: "Help & Settings",
    isTitle: true,
    hasChild: true,
    childs: [
      {
        text: "Your Account",
        isTitle: false,
        hasChild: false,
        path: "/gp/css/homepage",
      },
      {
        text: "Customer Service",
        isTitle: false,
        hasChild: false,
        path: "/help/customer/display",
      },
      {
        text: "Sign in",
        isTitle: false,
        hasChild: false,
        path: "/signin",
      },
      {
        text: "Sign in",
        isTitle: false,
        hasChild: false,
        path: "/signin",
      },
    ],
  },
];
