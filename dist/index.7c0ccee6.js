const bouton = document.querySelector(".impression");
const href = document.querySelectorAll("a");
const white = document.querySelectorAll(".white");
const competences = document.querySelector(".comp\xe9tences-list");
const sections = document.querySelectorAll("section");
const photo = document.querySelector("img");
const header = document.querySelector("header");
const picture = document.querySelector("img");
const h2 = document.querySelectorAll("h2");
const main = document.querySelector("main");
function impress() {
    if (bouton) bouton.addEventListener("click", ()=>{
        white.forEach((whites)=>{
            whites.style.color = "black";
        });
        href.forEach((hrefs)=>{
            hrefs.style.color = "black";
        });
        competences.style.display = "flex";
        competences.style.justifyContent = "space-between";
        // competences.style.display = "grid";
        // competences.style.gridTemplateColumns = "repeat(2, 1fr)";
        // competences.style.gridTemplateRows = "repeat(2, 1fr)";
        // competences.style.gridTemplateAreas = "primo deuxio";
        // ("tertio quartio");
        sections.forEach((section)=>{
            section.style.padding = "10em 1em 0 1em";
        });
        // header.style.height = "22vh";
        // header.style.marginTop = "10em";
        header.style.height = "10vh";
        header.style.paddingBottom = "1em";
        header.style.borderBottom = "1px solid black";
        h2.forEach((title)=>{
            title.style.fontSize = "1rem";
        });
        window.print();
        console.log("j'ai cliqu\xe9!");
    });
    else console.error("Boutton introuvable");
}
impress();
window.onafterprint = function() {
    white.forEach((whites)=>{
        whites.style.color = "white";
    });
    href.forEach((hrefs)=>{
        hrefs.style.color = "white";
    });
    competences.style.display = "grid";
    header.style.top = "";
    header.style.paddingBottom = "";
    header.style.borderBottom = "";
    sections.forEach((section)=>{
        section.style.padding = "";
    });
};

//# sourceMappingURL=index.7c0ccee6.js.map
