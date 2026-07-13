const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{ if(entry.isIntersecting) entry.target.classList.add('visible'); });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const menuButton=document.querySelector('.menu-button');
const nav=document.querySelector('.global-nav');
menuButton.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded',String(open));
});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

window.addEventListener('scroll',()=>{
  const y=window.scrollY;
  document.querySelector('.orbit-a').style.transform=`rotate(${y*.025}deg)`;
  document.querySelector('.orbit-b').style.transform=`rotate(${-y*.035}deg)`;
},{passive:true});
/* =========================
   MAGIA EQUIPMENT SLIDER
========================= */

document.addEventListener("DOMContentLoaded", () => {
  const slides = Array.from(
    document.querySelectorAll(".equipment-slider .equipment-slide")
  );

  const dots = Array.from(
    document.querySelectorAll(".equipment-slider .equipment-dots span")
  );

  if (slides.length === 0) return;

  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  showSlide(currentIndex);

  if (slides.length > 1) {
    setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }, 4000);
  }
});
