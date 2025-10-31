
// ..............this is a slider .............


const swiper = new Swiper('.wrapper', {
  spaceBetween : 30,
  loop: true,

  autoplay : {
    delay : 3000,
    pauseOnMouseEnter : true ,
  },
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable : true,
    dynamicsBullets : true ,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  breakpoints : {
    0:{
        slidesPerView : 1,
    },

    768:{
      slidesPerView : 2,

    },

    1343:{
      slidesPerView : 3,

    },
  }

});


function homePage(){
  window.location.href = 'index.html'
}


//  counter ke liyeee................\\\

const counterNum = document.querySelectorAll(".counter-numbers");

const speed = 200;

counterNum.forEach((curElem) => {

  const updateNumber = () => {
    const targetNumber = parseInt(curElem.dataset.number);
    // console.log(targetNumber);

    const initialNum = parseInt(curElem.innerText);
    // console.log(initialNum); 

    const incrementNum = Math.trunc(targetNumber / speed);
    // console.log(incrementNum)

    if(initialNum < targetNumber){
      curElem.innerText = initialNum + incrementNum;

      setTimeout(updateNumber, 10)
    }

  };

  updateNumber();

});

const toggleBtn = document.querySelector(".togglebtn");

toggleBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
    
  });
});


// ...................media icons ke liye ................
