function toggleMenu(){
  document.querySelector(".nav-links")
  .classList.toggle("active");
}

// IMAGE MODAL
function openCertificate(imgPath){
  document.getElementById("certModal").style.display="block";
  document.getElementById("modalImg").src=imgPath;
}

function closeCertificate(){
  document.getElementById("certModal").style.display="none";
}

// ACTIVE NAVBAR
window.addEventListener("scroll",()=>{

  let sections=document.querySelectorAll("section");
  let navLinks=document.querySelectorAll(".nav-links a");

  sections.forEach((section)=>{

    let top=window.scrollY;
    let offset=section.offsetTop-150;
    let height=section.offsetHeight;
    let id=section.getAttribute("id");

    if(top>=offset && top<offset+height){

      navLinks.forEach((link)=>{
        link.classList.remove("active");
      });

      document
      .querySelector(".nav-links a[href*="+id+"]")
      .classList.add("active");
    }

  });

});