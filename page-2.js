import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as a,a as i}from"./assets/vendor-s8LL8a4v.js";const l=document.getElementById("search-form"),t=document.getElementById("gallery"),c="45947467-1fb23e21d26a094164d331d1f";l.addEventListener("submit",async r=>{r.preventDefault();const e=document.getElementById("query").value.trim();if(!e){a.error({title:"Error",message:"Please enter a search term!"});return}m(),p();try{const o=(await i.get(`https://pixabay.com/api/?key=${c}&q=${encodeURIComponent(e)}&image_type=photo&orientation=horizontal&safesearch=true`)).data.hits;if(n(),o.length===0){a.info({message:"Sorry, there are no images matching your search query. Please try again!"}),t.innerHTML="";return}d(o)}catch{a.error({title:"Error",message:"Something went wrong. Please try again later."}),n()}});function d(r){t.innerHTML=r.map(e=>`
      <a href="${e.largeImageURL}" class="gallery-item">
        <img src="${e.webformatURL}" alt="${e.tags}" />
        <div class="info">
          <p>Likes: ${e.likes}</p>
          <p>Views: ${e.views}</p>
          <p>Comments: ${e.comments}</p>
          <p>Downloads: ${e.downloads}</p>
        </div>
      </a>`).join("")}function m(){t.innerHTML=""}function p(){loader.classList.remove("hidden")}function n(){loader.classList.add("hidden")}
//# sourceMappingURL=page-2.js.map
