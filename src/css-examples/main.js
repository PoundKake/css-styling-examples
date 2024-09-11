import "./style.css";
import cssLogo from "./CSS3_logo.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>CSS Examples</h1>
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
      <img src="${cssLogo}" class="logo vanilla" alt="CSS logo" />
    </a>
  </div>
`;

setupCounter(document.querySelector("#counter"));
