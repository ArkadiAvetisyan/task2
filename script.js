const infoCovid19 = document.querySelector(".info-covid-19");
const svgForTablete = document.querySelector(".svg-for-tablete");
svgForTablete.addEventListener("click", function(){
    infoCovid19.style.display = "none";
});

// const categoryMenu = document.querySelector(".category-menu");
// const categoryTitle1 = document.querySelector(".category-title1");
// categoryTitle1.addEventListener("click", function(e){
//     const parent = this.parentNode;
//     const arr = [...parent.classList];

//     if(!arr.includes("active")){
//        parent.classList.add("active")
//     }else{
//        parent.classList.remove("active");
//        parent.classList.add("default")
//     }
//     if(arr.includes("default")){
//         parent.classList.remove("default")
//     }
// })



var acc = document.getElementsByClassName("category-title");
let i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "none"  ) {
        panel.style.display = "block";
        
      }
       else {
        panel.style.display = "none";
      }
    });
}


let heart = document.querySelectorAll(".products>div>svg:first-of-type")
// for(i = 0; i < heart.length; i++) {
//     heart[i].addEventListener("click",function(){
//         this.classList.toggle("now");  
//     }
//     )};
heart.forEach(function(val){
    val.addEventListener("click",function(){
        this.classList.toggle("now");
    })
})

// for search
const headerIcons = document.querySelector(".header-icons")
const forScearch = document.querySelector(".for-search")
const headerMenuChild = document.querySelector(".header-menu-child");
const search = document.querySelector(".search");
const searchClose = document.querySelector('.search-close');
search.addEventListener("click",function(){
    headerIcons.classList.toggle("bbb");
    forScearch.classList.toggle("aaa");
    if (headerMenuChild.style.display === "none"  ) {
        headerMenuChild.style.display = "block";
        searchClose.style.display = "none";
        forScearch.style.display = "none";
      }
       else {
        headerMenuChild.style.display = "none";
        search.style.display = "none";
        searchClose.style.display = "block";
        forScearch.style.display = "flex";
      }
   
})
searchClose.addEventListener("click",function(){
    headerIcons.classList.toggle("bbb");
    forScearch.classList.toggle("aaa");
    if (headerMenuChild.style.display === "block"  ) {
        headerMenuChild.style.display = "none";
        searchClose.style.display = "block";
         forScearch.style.display = "flex";
      }
       else {
        headerMenuChild.style.display = "block";
        search.style.display = "block";
        searchClose.style.display = "none";
        forScearch.style.display = "none";
      }
   
})


const lengMenu = document.querySelector(".leng-menu");
const svg = document.querySelector(".leng");

svg.addEventListener("click",function() {
   console.log('a');
   lengMenu.classList.toggle("leng-menu1");
   lengMenu.parentNode.classList.toggle("leng1");
})




// const heards = document.querySelectorAll(".products div");
// const arr = [...heards];
// console.log(heards, "heards");
// console.log(arr, "arr");