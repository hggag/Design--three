let ourskills = document.querySelector(".skills");
window.onscroll = function () {
  let skillsOffSetTop = ourskills.offsetTop;

  let skillsouterheoght = ourskills.offsetHeight;

  let windowheight = this.innerHeight;

  let windowScrool = this.pageYOffset;

  if (windowScrool > skillsOffSetTop + skillsouterheoght - windowheight) {
    let allsklls = document.querySelectorAll(".skill-progres span");

    allsklls.forEach((sk) => {
      sk.style.width = sk.dataset.progres;
    });
  }
};

let i = document.querySelector(".landing i");

i.onclick=function(){
  
}