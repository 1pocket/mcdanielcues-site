document.addEventListener('DOMContentLoaded',()=>{const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();});
/* lightbox */
(function(){
  const lb=document.getElementById('lightbox'); if(!lb) return;
  const imgEls=Array.from(document.querySelectorAll('.photo img, .gallery .tile img'));
  const lbImg=lb.querySelector('.lb-img'), lbCap=lb.querySelector('.lb-caption');
  const closeBtn=lb.querySelector('.lb-close'), prevBtn=lb.querySelector('.lb-prev'), nextBtn=lb.querySelector('.lb-next');
  let idx=0;
  function open(i){ idx=i; const el=imgEls[idx]; lbImg.src=el.getAttribute('src'); lbImg.alt=el.alt||'';
    const capNode=el.closest('figure')?.querySelector('figcaption'); lbCap.textContent=capNode?capNode.textContent:'';
    lb.classList.add('show'); lb.setAttribute('aria-hidden','false'); }
  function close(){ lb.classList.remove('show'); lb.setAttribute('aria-hidden','true'); }
  function prev(){ open((idx-1+imgEls.length)%imgEls.length); }
  function next(){ open((idx+1)%imgEls.length); }
  imgEls.forEach((el,i)=>{ el.style.cursor='zoom-in'; el.addEventListener('click',()=>open(i)); });
  closeBtn.addEventListener('click',close); prevBtn.addEventListener('click',prev); nextBtn.addEventListener('click',next);
  document.addEventListener('keydown',e=>{ if(!lb.classList.contains('show')) return; if(e.key==='Escape') close(); if(e.key==='ArrowLeft') prev(); if(e.key==='ArrowRight') next(); });
})();