//---- Fais apparaitre les images au scroll ----
//CONSTANTES
const italics = document.querySelectorAll('.italic');
const delay = 200;
//FUNCTION
function debounce(func, wait = 5, immediate = true) {
  let timeout;
  return () => {
    const context = this;
    // eslint-disable-next-line prefer-rest-params
    const args = arguments;
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}


function checkslide(){
  for (const italic of italics) {
    const goItalicAt = (window.scrollY + window.innerHeight) - (italic.offsetHeight)
    italic.classList.add("test");

    const isShown = goItalicAt > italic.offsetTop;
    if(isShown){
        italic.classList.remove('test');

        setTimeout(() => {
          italic.classList.add("italic-text");
        }, delay);
    }
  }
}

//BOUCLES
for (const italic of italics) {
  italic.classList.remove('italic-text');
}

//ADDEVENTLISTENER
window.addEventListener('scroll', debounce(checkslide));

//---- Fais apparaitre les éléments de l'intro l'un après l'autre avec un delai reglable ----
//CONSTANTES
const elements = document.querySelectorAll(".cool");
const delay1 = 75;

//BOUCLES
elements.forEach((element, index) => {
  element.classList.add('test')
  setTimeout(() => {
    element.classList.remove("test");
  }, delay1 * (index + 1));
});


//---- When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar ----

let prevScrollpos = window.scrollY;
window.addEventListener('scroll', ()=>{
  const currentScrollPos = window.scrollY;
  if (currentScrollPos > prevScrollpos ) {
    document.querySelector("nav").classList.add("scrolling-down");
  } else {
    document.querySelector("nav").classList.remove("scrolling-down");
  }
  prevScrollpos = currentScrollPos;
});

// svg2 swinging left to right depends on the mouse
const svg2 = document.querySelector('.svg-2')

svg2.addEventListener('mousemove', ()=>{

});


const tropheeslis = document.querySelectorAll('.trophees li');

for (const tropheesli of tropheeslis) {
  tropheesli.classList.add("scale-0");
}
function makeLiAppear(){
  tropheeslis.forEach((tropheesli, index) =>
     {
    const goBigAt = (window.scrollY + window.innerHeight) - (tropheeslis[0].offsetHeight);
    const listAppearAt = goBigAt > tropheeslis[0].offsetTop;
       if(listAppearAt){
       setTimeout(() => {
        tropheesli.classList.remove('scale-0');
      }, 50 * (index + 1));
    }
       if(!listAppearAt) {
         tropheesli.classList.add('scale-0');
    }
  });
}

console.log(tropheeslis[0]);
window.addEventListener('scroll', makeLiAppear);
