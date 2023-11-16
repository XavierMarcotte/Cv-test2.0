const bouton = document.querySelector(".impression");
const href = document.querySelectorAll("a");
const white = document.querySelectorAll(".white");
const competences = document.querySelector(".compétences-list");
const sections = document.querySelectorAll("section");
const photo = document.querySelector("img");
const header = document.querySelector("header");
const picture = document.querySelector("img");

function impress() {
  bouton.addEventListener("click", () => {
    white.forEach((whites) => {
      whites.style.color = "black";
    });
    href.forEach((hrefs) => {
      hrefs.style.color = "black";
    });

    competences.style.display = "flex";
    competences.style.justifyContent = "space-evenly";
    // competences.style.display = "grid";
    // competences.style.gridTemplateColumns = "repeat(2, 1fr)";
    // competences.style.gridTemplateRows = "repeat(2, 1fr)";
    // competences.style.gridTemplateAreas = "primo deuxio";
    // ("tertio quartio");

    sections.forEach((section) => {
      section.style.padding = "16em 2em 0 2em";
    });

    // header.style.top = "3em";
    header.style.paddingBottom = "1em";
    header.style.borderBottom = "1px solid black";

    window.print();
  });
}

impress();

window.onafterprint = function () {
  white.forEach((whites) => {
    whites.style.color = "white";
  });

  href.forEach((hrefs) => {
    hrefs.style.color = "white";
  });

  competences.style.display = "grid";

  header.style.top = "";
  header.style.paddingBottom = "";
  header.style.borderBottom = "";

  sections.forEach((section) => {
    section.style.padding = "";
  });
};
