const bouton = document.querySelector('.impression');
const href = document.querySelectorAll('a');
const white = document.querySelectorAll('.white');
const competences = document.querySelector('.compétences-list');
const sections = document.querySelectorAll('section');
const photo = document.querySelector('img')
function impress() {
    bouton.addEventListener('click', () => {
      white.forEach(whites => {
        whites.style.color = 'black';
      });
  
      href.forEach(hrefs => {
        hrefs.style.color =  'black';
      });
  
      competences.style.display = 'grid';
      competences.style.gridTemplateColumns = 'repeat(2, 1fr)';
      competences.style.gridTemplateRows = 'repeat(2, 1fr)';
      competences.style.gridTemplateAreas = 
        "primo deuxio"
        "tertio quartio";

      sections.forEach(section => {
        section.style.padding ='20em 4em 0 4em';
      });
  
      window.print();
    });
  }
  
impress();



window.onafterprint = function() {
    white.forEach(whites => {
        whites.style.color = 'white';
      });
    href.forEach(hrefs => {
          hrefs.style.color =  'white';
        });
    competences.style.display = ''; 
    
    sections.forEach(section => {
      section.style.padding ='';
    }) 
  };