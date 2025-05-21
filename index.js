import{a as L,S as b,i as n}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&u(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function u(t){if(t.ep)return;t.ep=!0;const a=e(t);fetch(t.href,a)}})();const w="50340161-8d0ce27979907a55c95fc2abe",S="https://pixabay.com/api/",q=15;async function f(o,r){return(await L.get(S,{params:{key:w,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:q,page:r}})).data}const m=document.querySelector(".gallery"),i=document.querySelector(".load-more"),c=document.querySelector(".loader-message"),P=new b(".gallery a",{captionsData:"alt",captionDelay:250});function y(o){const r=o.map(e=>`
      <div class="photo-card">
        <a href="${e.largeImageURL}" class="gallery-item">
          <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
        </a>
        <div class="info">
          <div class="info-item">
            <b>Likes</b>
            <span>${e.likes}</span>
          </div>
          <div class="info-item">
            <b>Views</b>
            <span>${e.views}</span>
          </div>
          <div class="info-item">
            <b>Comments</b>
            <span>${e.comments}</span>
          </div>
          <div class="info-item">
            <b>Downloads</b>
            <span>${e.downloads}</span>
          </div>
        </div>
      </div>
    `).join("");m.insertAdjacentHTML("beforeend",r),P.refresh()}function M(){m.innerHTML=""}function h(){c&&c.classList.remove("hidden")}function p(){c&&c.classList.add("hidden")}function B(){i&&i.classList.remove("hidden")}function g(){i&&i.classList.add("hidden")}const $=document.querySelector("#search-form"),E=document.querySelector(".load-more");let s=1,d="",v=0;$.addEventListener("submit",async o=>{o.preventDefault();const r=o.target.elements.searchQuery.value.trim();if(r){d=r,s=1,M(),g();try{h();const e=await f(d,s);if(v=e.totalHits,e.hits.length===0){n.error({message:"Sorry, no images match your search query. Try again!"});return}y(e.hits),e.totalHits>15&&B()}catch{n.error({message:"An error occurred. Please try again later."})}finally{p()}}});E.addEventListener("click",async()=>{s+=1;try{h();const o=await f(d,s);y(o.hits);const r=Math.ceil(v/15);s>=r&&(g(),n.info({message:"We're sorry, but you've reached the end of search results."})),A()}catch{n.error({message:"Failed to load more images."})}finally{p()}});function A(){const o=document.querySelector(".gallery a");if(!o)return;const{height:r}=o.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
