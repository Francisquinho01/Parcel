document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelectorAll(".faq-item");e.forEach(t=>{let l=t.querySelector("h3"),o=t.querySelector("p");l.addEventListener("click",()=>{let l="block"===o.style.display;e.forEach(e=>{e!==t&&(e.querySelector("p").style.display="none")}),o.style.display=l?"none":"block"})})});
//# sourceMappingURL=index.194764fb.js.map
