const infoCovid19 = document.querySelector(".info-covid-19");
const svgForTablete = document.querySelector(".svg-for-tablete");
svgForTablete.addEventListener("click", function(){
    infoCovid19.style.display = "none";
});

const categoryMenu1 = document.querySelector(".category-menu1");
const categoryTitle1 = document.querySelector(".category-title1");
let a = 0;
    categoryTitle1.addEventListener("click", function(){
        
        categoryMenu1.style.display = "none";
    });
    
  
     categoryTitle1.addEventListener("click", function(){
     categoryMenu1.style.display = "block";
     });
