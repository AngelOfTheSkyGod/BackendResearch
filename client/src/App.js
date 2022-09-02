import { FaHandPaper } from "react-icons/fa";

import { AiOutlineScissor } from "react-icons/ai";

import { FaHandRock } from "react-icons/fa";

function throwSign(sign) {
  console.log("sign chosen:" + sign);
}
export default function App() {
  return (
    <div className="background">
      <button
        onClick={() => {
          throwSign("Rock");
        }}
      >
        <FaHandRock size="3rem" />
      </button>

      <button
        onClick={() => {
          throwSign("Paper");
        }}
      >
        <FaHandPaper size="3rem" />
      </button>

      <button
        onClick={() => {
          throwSign("Scissor");
        }}
      >
        <AiOutlineScissor size="3rem" />
      </button>
    </div>
  );
}
