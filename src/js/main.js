function debounce(func, wait = 3, immediate = true) {
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
  console.log(e);
  for (const image of images) {
    const slideInAt = (window.scrollY + window.innerHeight) - (image.height / 10)


    const isShown = slideInAt > image.offsetTop;
    if(isShown){
      image.classList.add('active')
    }else{
      image.classList.remove('active')
    }
  }
}

window.addEventListener('scroll', debounce(checkslide));

const h2s  = document.querySelectorAll('h2')

const images = document.querySelectorAll('img');



for (const h2 of h2s) {
  //h2.innerText = '';
}