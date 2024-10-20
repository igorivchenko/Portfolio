import{A as _,a as $,i as q,S as N,N as A,K as D}from"./assets/vendor-DR3QWmmZ.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const u=document.getElementById("btn-header");localStorage.getItem("theme")==="dark"?(document.body.classList.add("dark-theme"),u.classList.add("right")):(document.body.classList.remove("dark-theme"),u.classList.remove("right"));u.addEventListener("click",O);function O(){document.body.classList.toggle("dark-theme"),u.classList.toggle("right"),document.body.classList.contains("dark-theme")?localStorage.setItem("theme","dark"):localStorage.setItem("theme","light")}const a={openModalBtn:document.querySelectorAll(".js-open-menu"),closeModalBtn:document.querySelector(".js-close-menu"),modal:document.querySelector(".js-menu-container"),modalLinks:document.querySelectorAll(".mob-nav-tag")};a.openModalBtn.forEach(t=>{t.addEventListener("click",k)});a.closeModalBtn.addEventListener("click",k);a.modal.addEventListener("click",T);function T(t){t.target===t.currentTarget&&a.modal.classList.add("is-active")}function k(){a.modal.classList.toggle("is-active"),document.body.classList.toggle("no-scroll")}a.modalLinks.forEach(t=>{t.addEventListener("click",()=>{a.modal.classList.remove("is-active"),document.body.classList.remove("no-scroll")})});const z="/Portfolio/assets/projects1-Fww95F1J.jpg",J="/Portfolio/assets/projects1_xx-mywvv0cJ.jpg",G="/Portfolio/assets/projects2-DxN2odVS.jpg",V="/Portfolio/assets/projects2_xx-Cda9-ebG.jpg",H="/Portfolio/assets/projects3-CEcGoooa.jpg",F="/Portfolio/assets/projects3_xx-DPoVSB5Q.jpg",K="/Portfolio/assets/projects4-JhmGoZut.jpg",U="/Portfolio/assets/projects4_xx-BKKFpGsW.jpg",Z="/Portfolio/assets/projects5-B1HZIuYL.jpg",R="/Portfolio/assets/projects5_xx-Bje55MHr.jpg",W="/Portfolio/assets/projects6-DAPApIl8.jpg",Y="/Portfolio/assets/projects6_xx-qMfuGWzT.jpg",Q="/Portfolio/assets/projects7-8UPNHidz.jpg",X="/Portfolio/assets/projects7_xx-135sHb3J.jpg",ee="/Portfolio/assets/projects8-xkayJYwa.jpg",te="/Portfolio/assets/projects8_xx-MzqbzosW.jpg",oe="/Portfolio/assets/projects9-DCuG7ItC.jpg",se="/Portfolio/assets/projects9_xx-D_UCmZD9.jpg",re="/Portfolio/assets/projects10-Bna-RX6I.jpg",ne="/Portfolio/assets/projects10_xx-DfQwEs-w.jpg",ce="/Portfolio/assets/icon-CwlkgYyU.svg",x=[{ordinary:z,retina:J},{ordinary:G,retina:V},{ordinary:H,retina:F},{ordinary:K,retina:U},{ordinary:Z,retina:R},{ordinary:W,retina:Y},{ordinary:Q,retina:X},{ordinary:ee,retina:te},{ordinary:oe,retina:se},{ordinary:re,retina:ne}],ie=10,P=3,g=[],ae=["power pulse webservice","mimino website","vyshyvanka vibes Landing Page","green harvest online store","wallet webservice","chego jewelry website","energy flow webservice","fruitbox online store","English excellence webservice","starlight studio landing page"],h=document.querySelector("button.projects-more"),M=document.querySelector("ul.projects-list"),le=()=>{const t=document.querySelectorAll("ul.projects-list li");t[t.length-1].scrollIntoView({behavior:"smooth"})},de=()=>{h.style.display="none"},pe=()=>{h.style.display="block"},me=t=>{for(let s=0;s<t;s++){const n=ae[s],o=s+1;g.push({idx:o,name:n,visible:!1})}},ue=t=>{M.innerHTML+=t.map(s=>{const{idx:n,name:o}=s,e=g.findIndex(r=>r.idx===n);return g[e].visible=!0,`
            <li>
                <img class="project-img" 
                    srcset="${x[n-1].ordinary} 1x, ${x[n-1].retina} 2x"
                    src="${x[n-1].ordinary}"
                    alt="${o}"
                    loading="lazy">
                <span class="projects-stack">React, JavaScript, Node JS, Git</span>
                <div class="projects-box">
                    <span class="projects-name">${o}</span>
                    <span class="projects-visit">
                        <a class="projects-link" href="https://github.com/igorivchenko/Portfolio-project" target="_blank">
                            visit
                            <svg class="projects-icon">
                                <use href="${ce}#icon-projects-icon"></use>
                            </svg>
                        </a>
                    </span>
                </div>
            </li>
        `}).join("")},C=(t,s)=>{const n=g.filter(e=>e.visible===!1),o=n.length;if(o){pe();const e=o>=t?t:o;ue(n.slice(0,e)),s&&le(),o<=t&&(de(),M.classList.add("hide-margin"))}},ge=()=>{C(P,!0)};me(ie);C(P,!1);h.addEventListener("click",ge);new _(".accordion-container",{openOnInit:[0]});const S=document.querySelector(".swiper-wrapper"),fe=document.querySelector(".button-wrapper");function je(t){const s=t.map(({author:n,avatar_url:o,review:e,_id:r})=>r===5?`<li class="swiper-slide">
					<p class="reviews-text">${e.slice(0,-31)}</p>
					<div class="card-wrapper">
						<img class="reviews-icon" src="${o}" alt="${n}">
						<h2 class="reviews-author">${n}</h2>
					</div>
				</li>`:`<li class="swiper-slide">
					<p class="reviews-text">${e}</p>
					<div class="card-wrapper">
						<img class="reviews-icon" src="${o}" alt="${n}">
						<h2 class="reviews-author">${n}</h2>
					</div>
				</li>`).join("");S.innerHTML=s,fe.classList.remove("visually-hidden")}function ye(){const t=`<li class="not-found swiper-slide">
	<p class="not-found-text">Not found!</p>
</li><li class="not-found swiper-slide">
	<p class="not-found-text">Not found!</p>
</li>`;S.innerHTML=t}async function ve(t){try{const{data:s}=await $.get("https://portfolio-js.b.goit.study/api/reviews");je(s)}catch(s){ye(),q.error({position:"topRight",message:s.message})}}ve();new N(".swiper",{modules:[A,D],direction:"horizontal",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0},slidesPerView:1,spaceBetween:32,breakpoints:{1280:{slidesPerView:2}}});document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("work-together-form"),s=document.getElementById("modal-backdrop"),n=document.getElementById("modal-close-btn"),o=document.getElementById("modal-title"),e=document.getElementById("modal-message"),r=document.getElementById("email"),c=document.getElementById("user-comment"),f=document.getElementById("email-error"),m=document.getElementById("message-error"),j=document.querySelector(".work-together-form-input-valid");function y(i,d){o.textContent=i,e.textContent=d,s.classList.add("active"),document.body.classList.add("no-scroll")}function v(){s.classList.remove("active"),document.body.classList.remove("no-scroll")}function L(i){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(i)}function I(){f.textContent="",m.textContent=""}r.addEventListener("input",()=>{I(),L(r.value.trim())?(r.classList.remove("error"),r.classList.add("valid"),j.style.display="inline"):(r.classList.add("error"),f.textContent="Invalid email, try again",j.style.display="none")}),c.addEventListener("input",()=>{c.value.trim()!==""?(c.classList.remove("error"),c.classList.add("valid"),m.textContent=""):(c.classList.remove("valid"),c.classList.add("error"),m.textContent="Message cannot be empty")}),t.addEventListener("submit",async i=>{i.preventDefault();const d=r.value.trim(),b=c.value.trim();if(!L(d)){f.textContent="Please enter a valid email address.";return}if(!b){m.textContent="Message cannot be empty.";return}var B={email:d,comment:b};const E=JSON.stringify(B);console.log(E);try{const l=await fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:E});if(l.ok){const p=await l.json();y(o.textContent,e.textContent||"Message sent successfully!"),t.reset(),j.style.display="none"}else{const p=await l.json();console.error("Error response:",p),o.textContent="Error",o.style.color="red",y(o.textContent,p.message||"Unexpected error, please try again.")}}catch(l){const p=l.message;console.error("Network Error:",p),o.textContent="Network Error",o.style.color="red",y(o.textContent,`Network error: ${l.message}`)}}),n.addEventListener("click",v),s.addEventListener("click",i=>{i.target===s&&v()}),document.addEventListener("keydown",i=>{i.key==="Escape"&&v()})});const w=document.querySelector(".button-up");window.addEventListener("scroll",function(){window.scrollY>=448?w.classList.add("button-up-active"):w.classList.remove("button-up-active")});w.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=index.js.map
