import petsdost from "../assets/img/petsdost.png";
import alphasentry from "../assets/img/alphasentry.png";
import outdoorliving from "../assets/img/outdoorliving.png"; 

export const projects = [
  {
    id: 1,
    title: "PetsDost",
    category: "WordPress",
    image: petsdost,   // ✅ Use the imported variable
    description:
      "Developed a modern WooCommerce website featuring pet products, veterinary services, appointment booking, and a responsive shopping experience.",
    tech: [
      "WordPress",
      "WooCommerce",
      "Elementor",
      "JavaScript",
      "CSS3",
    ],
    live: "https://petsdost.com/",
    github: "",
  },

 {
  id: 2,
  title: "Alpha Sentry Group",
  category: "WordPress",
  image: alphasentry,
  description:
    "Developed and optimized a professional security services website for a Western Australian company. Implemented responsive layouts, service pages, lead generation forms, and on-page SEO to improve visibility and user engagement.",
  tech: [
    "WordPress",
    "Elementor",
    "HTML5",
    "CSS3",
    "JavaScript",
    "SEO",
  ],
  live: "https://alphasentrygroup.com.au/",
  github: "",
},
{
  id: 3,
  title: "Outdoor Living Direct",
  category: "Shopify",
  image: outdoorliving,
  description:
    "Enhanced a large-scale Shopify eCommerce store by implementing custom theme improvements, fixing functional issues, optimizing the user experience, and improving overall storefront performance.",
  tech: [
    "Shopify",
    "Liquid",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Responsive Design",
  ],
  live: "https://www.outdoorlivingdirect.com.au/",
  github: "",
}
];