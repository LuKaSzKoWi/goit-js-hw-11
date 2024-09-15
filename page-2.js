import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as a,a as n}from"./assets/vendor-s8LL8a4v.js";const i=document.getElementById("search-form"),s=document.getElementById("gallery"),l="45947467-1fb23e21d26a094164d331d1f";i.addEventListener("submit",async t=>{t.preventDefault();const e=document.getElementById("query").value.trim();if(!e){a.error({title:"Error",message:"Please enter a search term!"});return}try{const r=(await n.get(`https://pixabay.com/api/?key=${l}&q=${encodeURIComponent(e)}&image_type=photo&orientation=horizontal&safesearch=true`)).data.hits;if(r.length===0){a.info({message:"Sorry, there are no images matching your search query. Please try again!"}),s.innerHTML="";return}m(r)}catch{a.error({title:"Error",message:"Something went wrong. Please try again later."}),c()}});function m(t){s.innerHTML=t.map(e=>`
      <a href="${e.largeImageURL}" class="gallery-item">
        <img src="${e.webformatURL}" alt="${e.tags}" />
        <div class="info">
          <p>Likes: ${e.likes}</p>
          <p>Views: ${e.views}</p>
          <p>Comments: ${e.comments}</p>
          <p>Downloads: ${e.downloads}</p>
        </div>
      </a>`).join("")}function c(){loader.classList.add("hidden")}
//# sourceMappingURL=page-2.js.map
