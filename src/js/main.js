//---- Fais apparaitre les images au scroll ----
//CONSTANTES
const italics = document.querySelectorAll('.italic');

const delay = 200;
//FUNCTION
function debounce(func, wait = 20, immediate = true) {
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


function checkslide(e){
  for (const italic of italics) {
    const goItalicAt = (window.scrollY + window.innerHeight) - (italic.offsetHeight)
    italic.classList.add("test");

    console.log(goItalicAt);
    console.log(italic.offsetHeight);

    const isShown = goItalicAt > italic.offsetTop;
    if(isShown){
        italic.classList.remove('test');

        setTimeout(() => {
          italic.classList.add("italic-text");
        }, delay);
    }else{
      // italic.classList.remove("italic-text");
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
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("nav").style.top = "0";
  } else {
    document.querySelector("nav").style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
});

