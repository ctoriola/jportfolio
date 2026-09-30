document.querySelector('.burger')?.addEventListener('click',()=>document.body.classList.toggle('open'));
document.querySelectorAll('.item img').forEach(i=>{const f=()=>i.classList.add('loaded');i.complete?f():i.onload=f;});
