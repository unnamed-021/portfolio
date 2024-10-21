import App1 from "../assets/images/ygiiApp1.png";
import App2 from "../assets/images/ygiiApp2.png";
import App3 from "../assets/images/ygiiApp3.png";
import Bp3 from "../assets/images/bp1.png";
import Bp2 from "../assets/images/bp2.png";
import Bp1 from "../assets/images/bp3.png";
import Rl1 from "../assets/images/rl1.png";
import Rl2 from "../assets/images/rl2.png";
import Rl3 from "../assets/images/rl3.png";
import Rl11 from "../assets/images/rl11.png";
import Rl22 from "../assets/images/rl22.png";
import Rl33 from "../assets/images/rl33.png";
import Cl1 from "../assets/images/cl1.png";
import Cl2 from "../assets/images/cl2.png";
import Cl3 from "../assets/images/cl3.png";
import Pl1 from "../assets/images/pl1.png";
import Pl2 from "../assets/images/pl2.png";
import Pl3 from "../assets/images/pl3.png";
import Ob1 from "../assets/images/ob1.png";
import Ob2 from "../assets/images/ob2.png";
import Ob3 from "../assets/images/ob3.png";
import Tb1 from "../assets/images/tb1.png";
import Tb2 from "../assets/images/tb2.png";
import Tb3 from "../assets/images/tb3.png";
import Ns1 from "../assets/images/ns1.png";
import Ns2 from "../assets/images/ns2.png";
import Ns3 from "../assets/images/ns3.png";
import Eyc1 from "../assets/images/eyc1.png";
import Eyc2 from "../assets/images/eyc2.png";
import Eyc3 from "../assets/images/eyc3.png";

export const formatCartItems = (cartItems) => {
  return cartItems
    .map((item) => {
      return `Proizvod: ${item.type}\nBoja: ${item.color}\nVeličina: ${
        item.size
      }\nKoličina: ${item.quantity}\nCena: ${(
        item.price * item.quantity
      ).toFixed(2)} RSD\n\n`;
    })
    .join("");
};

export const capitalizeWords = (str) => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

export const projectData = [
  {
    id: 1,
    title: "Ygii App - Gifting Services",
    link: "https://ygii.app",
    description:
      "A social commerce platform that enables users to create wishlists, add wishes and share them with their family & friends.",
    appStore: "https://apps.apple.com/vn/app/ygii-gifts-wishlists/id1609129551",
    googlePlay:
      "https://play.google.com/store/apps/details?id=com.ygii&hl=en_US&pli=1",
    type: "app",
    tag: "ygiiApp",
    leftPhoto: App2,
    middlePhoto: App1,
    rightPhoto: App3,
  },
  {
    id: 2,
    title: "Ygii Business Portal",
    link: "https://portal.ygii.app/en/",
    description:
      "Ygii aims to transform the personal and corporate gift-giving experience by fostering a culture of gratitude and mutual respect  through thoughtful and impactful gifts.",
    appStore: null,
    googlePlay: null,
    type: "web",
    tag: "ygiiPortal",
    leftPhoto: Bp1,
    middlePhoto: Bp3,
    rightPhoto: Bp2,
  },
  {
    id: 3,
    title: "Ring Leader App",
    link: null,
    description:
      "Ring Leader App is your all-in-one wedding planner, designed to help brides seamlessly organize every detail of their big day. From selecting the perfect venue, food, decorations, and music to managing guest invitations and seating arrangements, everything you need for your wedding is at your fingertips. Easily plan and coordinate all aspects of your celebration, ensuring your special day is exactly how you've always imagined it.",
    appStore:
      "https://apps.apple.com/us/app/ring-leader-wedding-planner/id6477778611",
    googlePlay:
      "https://play.google.com/store/apps/details?id=com.ringleader&hl=en_US",
    type: "app",
    tag: "rlApp",
    leftPhoto: Rl22,
    middlePhoto: Rl11,
    rightPhoto: Rl33,
  },
  {
    id: 4,
    title: "Ring Leader Vendor Portal",
    link: "https://vendor.ringleader.cloud/",
    description:
      "Ring Leader Vendor Portal is the dedicated platform where vendors connect with brides and consumers to offer their services for weddings. Through this portal, vendors can easily showcase their offerings, communicate directly with brides, and manage bookings. It's the ultimate tool for vendors to efficiently collaborate with clients, ensuring that every wedding detail is perfectly coordinated.",
    appStore: null,
    googlePlay: null,
    type: "web",
    tag: "rlPortal",
    leftPhoto: Rl2,
    middlePhoto: Rl1,
    rightPhoto: Rl3,
  },
  {
    id: 5,
    title: "Pleasure League",
    link: "https://pleasureleague.com/",
    description:
      "Pleasure League is the 18+ subscription platform that allows creators to tap into their full potential, monetize their content and develop personal connections with their fans through the sharing of content and live streaming.",
    appStore: null,
    googlePlay: null,
    type: "web",
    tag: "plPortal",
    leftPhoto: Pl2,
    middlePhoto: Pl1,
    rightPhoto: Pl3,
  },
  {
    id: 6,
    title: "Closely App",
    link: null,
    description:
      "Closely App lets you effortlessly connect with others, explore nearby restaurants and events, and quickly schedule meetups or dates. You can match with new people and start conversations right from the app. Whether you're planning a night out or looking for a new connection, Closely makes it simple to find the perfect spot and invite friends or a date with just a few taps.",
    appStore: null,
    googlePlay: null,
    type: "app",
    tag: "clApp",
    leftPhoto: Cl2,
    middlePhoto: Cl1,
    rightPhoto: Cl3,
  },
  {
    id: 7,
    title: "Obsessed Shop",
    link: "https://obsessed.rs/",
    description:
      "Obsessed is your ultimate destination for premium gym wear and accessories. Our brand is dedicated to fitness enthusiasts who live and breathe the gym lifestyle. At Obsessed, we offer a wide range of high-quality workout apparel designed to support your performance and style.",
    appStore: null,
    googlePlay: null,
    type: "web",
    tag: "obPortal",
    leftPhoto: Ob2,
    middlePhoto: Ob1,
    rightPhoto: Ob3,
  },
  {
    id: 8,
    title: "TAB Baterije App",
    link: null,
    description:
      "Your essential tool for staying on the road with confidence. Whether you're facing an unexpected breakdown or simply want to find the nearest service center, our app is here to help. With just a few taps, you can locate the closest service center to your current location and get back on track quickly. Explore all our authorized service centers across Serbia, view their locations, and access their contact information.",
    appStore: null,
    googlePlay: null,
    type: "app",
    tag: "tbApp",
    leftPhoto: Tb2,
    middlePhoto: Tb1,
    rightPhoto: Tb3,
  },
  {
    id: 9,
    title: "New Sense App",
    link: null,
    description:
      "New Sense is an innovative app that harnesses the power of artificial intelligence to generate sound frequencies tailored to relieve pain in specific areas of your body. By selecting the targeted area, users can experience soothing sounds that help alleviate discomfort. Additionally, you can invite others to join you in listening to the same sound, creating a shared meditation experience that enhances relaxation and well-being.",
    appStore: null,
    googlePlay: null,
    type: "app",
    tag: "nsApp",
    leftPhoto: Ns2,
    middlePhoto: Ns1,
    rightPhoto: Ns3,
  },
  {
    id: 10,
    title: "EyCrowd™",
    link: "https://eycrowd.com/",
    description:
      "EyCrowd transforms traditional advertising by creating engaging, app-guided brand experiences that connect consumers with brands both in-person and online. Our fast-growing community helps businesses attract attention and build meaningful interactions.",
    appStore: null,
    googlePlay: null,
    type: "web",
    tag: "eycPortal",
    leftPhoto: Eyc1,
    middlePhoto: Eyc2,
    rightPhoto: Eyc3,
  },
];
