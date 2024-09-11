import "./style.css";
import cssLogo from "/CSS3_logo.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
 <!-- glow -->
  <div>
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
      <img src="${cssLogo}" class="glow" alt="CSS logo" />
    </a>
  </div>
   <!-- increase scale -->
  <div>
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
      <img src="${cssLogo}" class="scale-increase" alt="CSS logo" />
    </a>
  </div>
<!-- decrease scale -->
  <div>
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
      <img src="${cssLogo}" class="scale-decrease" alt="CSS logo" />
    </a>
  </div>
`;
