const cursor=document.querySelector('.cursor');
window.addEventListener('mousemove',e=>{cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'});
const reveal=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>reveal.observe(el));
const links=document.querySelectorAll('a[href^="#"]');
links.forEach(link=>link.addEventListener('click',()=>{document.body.classList.remove('menu-open')}));
window.addEventListener('scroll',()=>{document.documentElement.style.setProperty('--scroll',window.scrollY)});
