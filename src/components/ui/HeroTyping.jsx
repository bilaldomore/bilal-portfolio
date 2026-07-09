import { TypeAnimation } from "react-type-animation";

function HeroTyping() {
  return (
    <TypeAnimation
      sequence={[
        "React Developer",
        2000,
        "WordPress Developer",
        2000,
        "Shopify Developer",
        2000,
        "SEO Specialist",
        2000,
      ]}
      speed={50}
      repeat={Infinity}
      className="text-3xl font-bold text-violet-400"
    />
  );
}

export default HeroTyping;