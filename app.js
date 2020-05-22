const hamburger=document.querySelector('.hamburger');
const closeHamburger=document.querySelector('.close-hamburger');
const drop=document.querySelector('.drop');
const mobileNav=document.querySelector('.mobile-nav');
let open=false;

hamburger.addEventListener('click', toogle);
closeHamburger.addEventListener('click', toogle);

function toogle(e){
  if(e.target.parentElement.classList.contains('hamburger')){
   e.target.parentElement.style.display='none';
   closeHamburger.style.display='block';
   mobileNav.style.display='block';
   open=true;
   drop.style.display='block';
  }
  else if(e.target.parentElement.classList.contains('close-hamburger')){
    e.target.parentElement.style.display='none';
    hamburger.style.display='block';
    mobileNav.style.display='none';
    drop.style.display='none';
    open=false;

  }
  e.preventDefault();
}
function closenav(){
  drop.style.display='none';
  hamburger.style.display='block';
  closeHamburger.style.display='none';
  mobileNav.style.display='none';
}