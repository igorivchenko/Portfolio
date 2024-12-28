import{A as M,a as B,i as I,S,N,K as q}from"./assets/vendor-DR3QWmmZ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const p=document.getElementById("btn-header");localStorage.getItem("theme")==="dark"?(document.body.classList.add("dark-theme"),p.classList.add("right")):(document.body.classList.remove("dark-theme"),p.classList.remove("right"));p.addEventListener("click",O);function O(){document.body.classList.toggle("dark-theme"),p.classList.toggle("right"),document.body.classList.contains("dark-theme")?localStorage.setItem("theme","dark"):localStorage.setItem("theme","light")}const c={openModalBtn:document.querySelectorAll(".js-open-menu"),closeModalBtn:document.querySelector(".js-close-menu"),modal:document.querySelector(".js-menu-container"),modalLinks:document.querySelectorAll(".mob-nav-tag")};c.openModalBtn.forEach(o=>{o.addEventListener("click",b)});c.closeModalBtn.addEventListener("click",b);c.modal.addEventListener("click",$);function $(o){o.target===o.currentTarget&&c.modal.classList.add("is-active")}function b(){c.modal.classList.toggle("is-active"),document.body.classList.toggle("no-scroll")}c.modalLinks.forEach(o=>{o.addEventListener("click",()=>{c.modal.classList.remove("is-active"),document.body.classList.remove("no-scroll")})});new M(".accordion-container",{openOnInit:[0]});const k=document.querySelector(".reviews-list"),T=document.querySelector(".button-wrapper");function P(o){const r=o.map(({author:i,avatar_url:s,review:e,_id:t})=>t===5?`<li class="swiper-slide">
					<p class="reviews-text">${e.slice(0,-31)}</p>
					<div class="card-wrapper">
						<img class="reviews-icon" src="${s}" alt="${i}">
						<h2 class="reviews-author">${i}</h2>
					</div>
				</li>`:`<li class="swiper-slide">
					<p class="reviews-text">${e}</p>
					<div class="card-wrapper">
						<img class="reviews-icon" src="${s}" alt="${i}">
						<h2 class="reviews-author">${i}</h2>
					</div>
				</li>`).join("");k.innerHTML=r,T.classList.remove("visually-hidden")}function j(){const o=`<li class="not-found swiper-slide">
	<p class="not-found-text">Not found!</p>
</li><li class="not-found swiper-slide">
	<p class="not-found-text">Not found!</p>
</li>`;k.innerHTML=o}async function A(){try{const{data:o}=await B.get("https://portfolio-js.b.goit.study/api/reviews");P(o)}catch(o){j(),I.error({position:"topRight",message:o.message})}}A();new S(".reviews-swiper",{modules:[N,q],direction:"horizontal",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0},slidesPerView:1,spaceBetween:32,breakpoints:{1280:{slidesPerView:2}}});document.addEventListener("DOMContentLoaded",function(){const o=document.getElementById("work-together-form"),r=document.getElementById("modal-backdrop"),i=document.getElementById("modal-close-btn"),s=document.getElementById("modal-title"),e=document.getElementById("modal-message"),t=document.getElementById("email"),n=document.getElementById("user-comment"),f=document.getElementById("email-error"),m=document.getElementById("message-error"),g=document.querySelector(".work-together-form-input-valid");function v(a,l){s.textContent=a,e.textContent=l,r.classList.add("active"),document.body.classList.add("no-scroll")}function y(){r.classList.remove("active"),document.body.classList.remove("no-scroll")}function w(a){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(a)}function x(){f.textContent="",m.textContent=""}t.addEventListener("input",()=>{x(),w(t.value.trim())?(t.classList.remove("error"),t.classList.add("valid"),g.style.display="inline"):(t.classList.add("error"),f.textContent="Invalid email, try again",g.style.display="none")}),n.addEventListener("input",()=>{n.value.trim()!==""?(n.classList.remove("error"),n.classList.add("valid"),m.textContent=""):(n.classList.remove("valid"),n.classList.add("error"),m.textContent="Message cannot be empty")}),o.addEventListener("submit",async a=>{a.preventDefault();const l=t.value.trim(),h=n.value.trim();if(!w(l)){f.textContent="Please enter a valid email address.";return}if(!h){m.textContent="Message cannot be empty.";return}var C={email:l,message:h};const E=JSON.stringify(C);console.log(E);try{const d=await fetch("https://67706f4e2ffbd37a63cce6a1.mockapi.io/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:E});if(d.ok)v(s.textContent,e.textContent||"Message sent successfully!"),o.reset(),g.style.display="none";else{const u=await d.json();console.error("Error response:",u),s.textContent="Error",s.style.color="red",v(s.textContent,u.message||"Unexpected error, please try again.")}}catch(d){const u=d.message;console.error("Network Error:",u),s.textContent="Network Error",s.style.color="red",v(s.textContent,`Network error: ${d.message}`)}}),i.addEventListener("click",y),r.addEventListener("click",a=>{a.target===r&&y()}),document.addEventListener("keydown",a=>{a.key==="Escape"&&y()})});const L=document.querySelector(".button-up");window.addEventListener("scroll",function(){window.scrollY>=448?L.classList.add("button-up-active"):L.classList.remove("button-up-active")});L.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=index.js.map
