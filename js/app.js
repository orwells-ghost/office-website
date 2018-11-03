///////////
// Elements
///////////
const elements = {
  bannerNums: Array.from(document.querySelectorAll('.banner__stat--figure')),
  hamburger: document.querySelector('.header__hamburger'),
  hamburgerChildren: Array.from(document.querySelector('.header__hamburger').children),
  headerLinkList: document.querySelector('.header__links'),
  headerLinks: Array.from(document.querySelectorAll('.header__link')),
  tSlides: Array.from(document.querySelectorAll('.testimonial__text-box')),
  tBtns: Array.from(document.querySelectorAll('.testimonial__dot'))
}

  const incNums = el => {
    let upperLimit = parseInt(el.innerHTML, 10), lowerLimit = 0;
    el.textConent = '0';
  
    const inv = setInterval(function() {     
        if(lowerLimit < upperLimit)
            el.innerHTML = ++lowerLimit;
        else
            clearInterval(inv);
    }, 3000 / 300);
  };

  // Testimonial Slider
  elements.tBtns.forEach(btn => {
    btn.addEventListener('click', event => {
      event.preventDefault();
      fadeTestimonials(event.target.getAttribute('href'));
    })
  })

  const fadeTestimonials = num => {
    let inn, out;
    num == 1 ? (inn = 1, out = 2) : (inn = 2, out = 1);
    const elToFadeIn = document.querySelector(`.testimonial${inn}`), elToFadeOut = document.querySelector(`.testimonial${out}`);
    setTimeout(function(){
      elToFadeOut.classList.remove('is-visible');
      console.log(`Fading out ${elToFadeOut}`)

      setTimeout(function(){
        elToFadeIn.classList.add('is-visible');
      }, 450);
    }, 350);
  }


elements.bannerNums.forEach(el => incNums(el));
document.querySelector('.header__hamburger').addEventListener('click', event => {
  elements.headerLinkList.classList.toggle('header__links--mobile');
  elements.headerLinks.forEach(el => el.classList.toggle('header__link--mobile'));
});

// Detect click outside of mobile nav, remove relevant classes
window.addEventListener('click', event => {
  if (!elements.headerLinks.includes(event.target) && event.target != elements.headerLinkList && event.target != elements.hamburger && !elements.hamburgerChildren.includes(event.target)) {
    elements.headerLinkList.classList.remove('header__links--mobile');
    elements.headerLinks.forEach(el => el.classList.remove('header__link--mobile'));
  }
})

// Check if window width changed
window.addEventListener('resize', event => {
  if (window.innerWidth > 1000) {
    elements.headerLinkList.classList.remove('header__links--mobile');
    elements.headerLinks.forEach(el => el.classList.remove('header__link--mobile'));
  }
})
