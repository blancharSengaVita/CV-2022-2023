const hero = document.querySelector('.hero');
const heroText = document.querySelector('.hero__text');
const hero1 = document.querySelector('.hero-1').cloneNode(true);
const hero2 = document.querySelector('.hero-2').cloneNode(true);
const hero3 = document.querySelector('.hero-3').cloneNode(true);
const hero4 = document.querySelector('.hero-4').cloneNode(true);
const hero5 = document.querySelector('.hero-5').cloneNode(true);

const heroContainer1 = document.createElement('div');
heroContainer1.classList.add('hero__container','basic-margin');
const div1750 = document.createElement('div');
div1750.classList.add('div1750');
const div2750 = document.createElement('div');
div2750.classList.add('div2750');
const div1750child = document.createElement('div');
div1750child.classList.add('div1750child');
div1750child.classList.add('margin-bottom-3rem');

// const


let largeurFenetre = false;

// window.addEventListener('load', (event) => {
//   if (window.innerWidth >= 750){
//     heroText.insertAdjacentHTML('beforebegin', `<div class="hero__container"></div>`);
//     const heroContainer = document.querySelector('.hero__container');
//
//     heroText.innerHTML = '';
//
//     heroContainer.insertAdjacentHTML('afterbegin', `<div class="div1750"></div>`);
//     heroContainer.insertAdjacentHTML('afterbegin', `<div class="div2750"></div>`);
//
//     const div1750 = document.querySelector('.div1750');
//     const div2750 = document.querySelector('.div2750');
//
//     div1750.insertAdjacentElement('beforeend', hero1);
//     div1750.insertAdjacentElement('beforeend', hero2);
//     div1750.insertAdjacentElement('beforeend', hero5);
//     div2750.insertAdjacentElement('beforeend', hero4);
//     div2750.insertAdjacentElement('beforeend', hero3);
//
//     heroContainer.insertAdjacentElement('beforeend', div1750);
//     heroContainer.insertAdjacentElement('beforeend', div2750);
//   }
// });

window.addEventListener('resize', (e)=>{
  if (window.innerWidth >= 750){
    hero.insertAdjacentElement('afterend', heroContainer1);

    heroContainer1.insertAdjacentElement('beforeend', div1750);
    heroContainer1.insertAdjacentElement('beforeend', div2750);

    div1750.insertAdjacentElement('beforeend', div1750child);

    div1750child.insertAdjacentElement('beforeend', hero1);
    div1750child.insertAdjacentElement('beforeend', hero2);
    div1750.insertAdjacentElement('beforeend', hero5);
    div2750.insertAdjacentElement('beforeend', hero4);
    div2750.insertAdjacentElement('beforeend', hero3);

    heroText.remove();
  }
  else if (window.innerWidth < 750){
    hero.insertAdjacentElement('afterend', heroText );
    heroText.classList.add('basic-margin');
    heroContainer1.remove();
  }
});
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




//---- Fais apparaitre les images au scroll ----
//CONSTANTES
const italics = document.querySelectorAll('.italic');
const delay = 400;
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
    }else{
      italic.classList.remove("italic-text");

    }
  }
}

//BOUCLES
for (const italic of italics) {
  italic.classList.remove('italic-text');
}

//ADDEVENTLISTENER
window.addEventListener('scroll', debounce(checkslide));




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

const tropheeslis = document.querySelectorAll('.trophees li');

for (const tropheesli of tropheeslis) {
  tropheesli.classList.add("scale-0");
}
function makeLiAppear(){
  tropheeslis.forEach((tropheesli, index) =>  {
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

console.log(document.querySelector('footer .oui'));
window.addEventListener('scroll', makeLiAppear);


// GET EACH LETTER BIGGER ON HOVER, le code est très moche

const links = document.querySelector('.big-link-2');
const linksText = document.querySelector('.no-js-link-text');
const letters = Array.from(links.textContent);
links.classList.remove("bigger-no-js");

for (let letter of letters) {
  links.insertAdjacentHTML('beforeend', `<span class="grand">${letter}</span>`);
}


const grands = document.querySelectorAll('.grand');

console.log(document.querySelectorAll('.grand'));
grandesLettre = Array.from(grands)

links.addEventListener('mouseover', ()=> {
  grandesLettre.forEach((letter, index) => {
    setTimeout(() => {
      letter.classList.add('bigger');
    },  25 * (index + 1));
  });
});

links.addEventListener('mouseout', (e)=>{
  grandesLettre.forEach((letter, index) => {
    setTimeout(() => {
      letter.classList.remove('bigger');
    },  25 * (index + 1));
  });
});

linksText.textContent = '';


const links2 = document.querySelector('.big-link-3');
const linksText2 = document.querySelector('.no-js-link-text-2');
const letters2 = Array.from(links2.textContent);
links2.classList.remove( "bigger-no-js");

for (let letter of letters2) {
  links2.insertAdjacentHTML('beforeend', `<span class="grand-2">${letter}</span>`);
}

const grands2 = document.querySelectorAll('.grand-2');

grandesLettre2 = Array.from(grands2)

links2.addEventListener('mouseover', ()=> {
  grandesLettre2.forEach((letter2, index) => {
    setTimeout(() => {
      letter2.classList.add('bigger');
    },  25 * (index + 1));
  });
});

links2.addEventListener('mouseout', (e)=>{
  grandesLettre2.forEach((letter2, index) => {
    setTimeout(() => {
      letter2.classList.remove('bigger');
    },  25 * (index + 1));
  });
});

linksText2.textContent = '';







// #54899f