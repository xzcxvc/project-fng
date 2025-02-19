import { teLogo, toLogo, tsLogo, yumeLogo } from "../assets";

export const navigation = [
  {
    id: 1,
    title: "Home",
    url: "#home",
  },
  {
    id: 2,
    title: "Services",
    url: "#services",
  },
  {
    id: 3,
    title: "About",
    url: "#about",
  },
  {
    id: 4,
    title: "Contact",
    url: "#contact",
  },
];

export const projects = [
  {
    id: 1,
    logoUrl: toLogo,
    text: "Vibrant City living in the heart of the Metro",
    url: "#the-observatory",
  },
  { id: 2, logoUrl: yumeLogo, 
    text: "Unveiling aspirations", 
    url: "#yume" },
  {
    id: 3,
    logoUrl: teLogo,
    text: "Glitz and Glamour at Grand Central Park",
    url: "#the-seasons",
  },
  {
    id: 4,
    logoUrl: tsLogo,
    text: "The Pinnacle of Luxury Living on Millionaire's Row",
    url: "#the-estate",
  },
];
