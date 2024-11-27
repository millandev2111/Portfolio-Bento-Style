export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4"; 
export type GridItemType = "social" | "about" | "mentor" | "project";
export type AboutItem = {
  title: string;
};

export interface GridItemInterface {
  layout: GridItemLayout;
  type: GridItemType;
  title: string;
  icon?: string;
  username?: string;
  description?: string;
  color?: string;
  buttonTitle?: string;
  buttonLink?: string;
  buttonSecondaryText?: string;
  /* Mentor */
  promotion?: string;
  price?: string;
  oldPrice?: string;
  /* Project */
  stars?: number;
  /* Equipments */
  about?: AboutItem[];
  image?: string;
}

const GridItems: GridItemInterface[] = [
  {
    layout: "2x2",
    type: "social",
    title: "Instagram",
    icon: "instagram",
    username: "@andres_millan2111",
    color: "#0095f6ff",
    description:
      "Here I share things about my personal life, and if you want you can also write to me here.",
    buttonTitle: "Follow",
    buttonLink: "https://www.instagram.com/andres_millan2111/",
    buttonSecondaryText: "323",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Discord",
    icon: "discord",
    username: "@millanyt2111",
    buttonTitle: "Join",
    buttonLink: "https://discord.com/",
    buttonSecondaryText: "0",
    color: "#5865F2",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Github",
    icon: "github",
    username: "@millandev2111",
    buttonTitle: "Follow",
    buttonSecondaryText: "0",
    buttonLink: "https://github.com/millandev2111",
    color: "#070707",
  },
  {
    layout: "2x4",
    type: "about",
    title: "About Me",
    image: "/Equipment2.webp",
    about: [
      {
        title: "Creative",
      },
      {
        title: "Responsible",
      },
      {
        title: "Punctual",
      },
      {
        title: "Dedicated",
      },
      {
        title: "Kind",
      },
      {
        title: "Honest",
      },
      {
        title: "Positive Attitude",
      },
    ],
  },
  {
    layout: "2x2",
    type: "social",
    title: "Twitter",
    icon: "twitter",
    username: "@Millandev2111",
    buttonTitle: "Follow",
    buttonLink: "https://x.com/Millandev2111",
    buttonSecondaryText: "0",
    color: "#1DA1F2",
    description:
      "Front-end Developer / I build websites and create UI/UX desing.",
  },
  {
    layout: "2x1",
    type: "mentor",
    title: "Web Developer",
    icon: "superpeer",
    promotion: "ANDRES_MILLAN",
    oldPrice: "$100",
    price: "$80",
    color: "#00b22dff",
    buttonLink: "http://www.fiverr.com/s/WE63QQE",
  },
  {
    layout: "2x1",
    type: "mentor",
    title: "Desing UI/UX",
    icon: "superpeer",
    promotion: "ANDRES_MILLAN",
    oldPrice: "$100",
    price: "$40",
    color: "#00b22dff",
    buttonLink: "http://www.fiverr.com/s/VY06q2Z",
  },
  {
    layout: "2x1",
    type: "project",
    title: "Nextone",
    icon: "figma",
    color: "#fff",
    buttonLink: "https://www.figma.com/design/PHODBX0KYGRqIr6wEyWpOR/Mockup-de-alta-fidelidad?node-id=0-1&t=987Iax2QYUtPcfcL-1",
  },
  {
    layout: "2x2",
    type: "social",
    title: "Universidad Autonoma De Occidente",
    username: "@AndresFelipeCardonaMillan",
    description:
      "I am studying computer engineering at the Universidad Autonoma de Occidente and I am in my eighth semester.",
    icon: "university",
    buttonTitle: "Semester:",
    buttonSecondaryText: "8°",
    buttonLink:
      "https://www.uao.edu.co/programa/ingenieria-informatica/",
  },
  {
    layout: "2x1",
    type: "project",
    title: "Rag App whit NextJs",
    icon: "github",
    stars: 0,
    color: "#070707",
    buttonLink: "https://github.com/andresCardonaMillan/Rag-App-Nextjs",
  },
];


export const siteConfig = {
  creator: "Andres Cardona",
  title: "Web Developer & Designer UI/UX",
  bio: "Desing and Web developer",
  location: "Cali, Colombia",
  locationLink:
    "https://www.google.com/maps/place/Cali,+Valle+del+Cauca/@3.3953932,-76.6904819,11z/data=!3m1!4b1!4m6!3m5!1s0x8e30a6f0cc4bb3f1:0x1f0fb5e952ae6168!8m2!3d3.4516467!4d-76.5319854!16zL20vMDFwc3Nm?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D",
  email: "millandev2111@gmail.com",
  items: GridItems,
} as const;