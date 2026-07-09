import { FaChevronDown } from "react-icons/fa";

function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">

      <FaChevronDown className="text-violet-400 text-3xl" />

    </div>
  );
}

export default ScrollIndicator;