!function(){new Swiper(".swiper-container",{spaceBetween:40,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});var e=document.querySelector(".about__moreBtn"),t=document.querySelector(".about p");console.log(e);e.addEventListener("click",(function(){t.className.includes("hideText")?(t.classList.remove("hideText"),t.classList.add("showText")):(t.classList.add("hideText"),t.classList.remove("showText"))}));var o=document.querySelector(".about__btn"),n=document.querySelector("#modal"),s=document.querySelector("#modalBackDrop"),c=document.body,l=document.querySelector(".modal__close"),a=function(){s.classList.remove("modal__backDrop-visible"),setTimeout((function(){n.classList.remove("modal__visible"),c.style.overflowX="hidden",c.style.overflow="auto"}),1e3)};o.addEventListener("click",(function(){n.classList.add("modal__visible"),setTimeout((function(){s.classList.add("modal__backDrop-visible")}),100),c.style.overflow="hidden"})),l.addEventListener("click",a),s.addEventListener("click",(function(e){e.target===e.currentTarget&&a()})),document.addEventListener("keydown",(function(e){"Escape"===e.code&&a()}));var i=document.querySelector("#modalForm");console.dir(i);i.addEventListener("submit",(function(e){var t;e.preventDefault(),t={from_name:document.getElementById("name").value,email_id:document.getElementById("email").value,message:document.getElementById("message").value},console.log(t),emailjs.send("service_vmv3c3f","template_9kylbgq",t).then((function(e){console.log("SUCCESS!"+e.status+e.text)}),(function(e){console.log("FAILED...",e)})),i.reset(),a()}))}();
//# sourceMappingURL=index.78d2552e.js.map
