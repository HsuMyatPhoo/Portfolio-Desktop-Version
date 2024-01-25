window.onload = function(){
    let logo = document.getElementsByClassName('logo')[0];
    logo.style.transform = "rotateY(360deg)";
    logo.style.transition ="all 0.5s linear";
}


// nav action  on mobile view 
let getheader = document.getElementById('header');

function shownav(){
  getheader.classList.toggle('navheader');
}        

let navbar = document.getElementById('navbar');
        
function  removenav(){
    if(getheader.classList.contains('navheader')){
     // console.log("this is small size");
        getheader.className = "";
     }else {
         // console.log("This is normal");
    }
}
// End 


// This is About Myself section hideshow action 
let gethideshow = document.querySelectorAll('.hideshow');  

for(i=0;i<gethideshow.length;i++){
    gethideshow[i].addEventListener("click",hideshow);
}

function hideshow(e){
    let show =this.classList.contains('show');
    if(show){
        this.classList = "right hideshow ";
        this.parentElement.parentElement.classList.add("hide");
        this.parentElement.nextElementSibling.classList.add("hidethis");
    }else{
        this.classList = "show hideshow";
        this.parentElement.parentElement.classList.remove("hide");
        this.parentElement.nextElementSibling.classList.remove("hidethis");
    }

}




const email = document.getElementById("email");
const input = document.querySelectorAll("input");
// const validityState = input.validity;

                                                                                                  
email.addEventListener("input", (event) => {
    if (email.validity.typeMismatch) {
      email.setCustomValidity("I expect an email, darling❤️!");
    } else {
      email.setCustomValidity("");
    }
  });
