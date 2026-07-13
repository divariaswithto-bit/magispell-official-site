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
