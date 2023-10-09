import { CountUp } from "countup.js";

//-----------------------The PreLoader
const Dom = {
  Top: document.getElementById("Top"),
  bottom: document.getElementById("Bottom"),
  cut: document.getElementById("Cut"),
  count: document.getElementById("Count"),
};

function preLoader() {
  document.body.classList = "w-full h-full bg-black myBox lg:overflow-hidden";
  const options = {
    useEasing: false,
    useGrouping: false,
    useIndianSeparators: true,
  };
  let demo = new CountUp(Dom.count, 100, options);
  demo.start();
  const Full = document.querySelector(".Full");
  setTimeout(() => {
    (Dom.Top.style.top = "-60%"), (Dom.bottom.style.bottom = "-60%");
    Dom.cut.style.display = "none";
    document.querySelector("html").classList = "overflow-auto";
    setTimeout(() => {
      Full.remove();
      //   document.body.classList="w-full h-full bg-black myBox lg:overflow-hidden";
    }, 4000);
  }, 2300);
}
export default preLoader;
