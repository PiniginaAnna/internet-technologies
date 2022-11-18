"use strict";

document.addEventListener("DOMContentLoaded", () => {

  const tabheaderItemsParent = document.querySelector(".tabheader__items"),
    tabcontents = document.querySelectorAll(".tabcontent"),
    tabheaderItems = document.querySelectorAll(".tabheader__item");
    
  function hideContent() {
    tabcontents.forEach(content => {
      content.style.display = "none";
    });
    tabheaderItems.forEach(tabheaderItem => {
      tabheaderItem.classList.remove("tabheader__item_active");
    });
  };
  hideContent();

  function showContent(i) {
    tabcontents[i].style.display = 'block';
    tabheaderItems[i].classList.add("tabheader__item_active");
  };
  showContent(0);

  tabheaderItemsParent.addEventListener("click", event => {
    const target = event.target;
    tabheaderItems.forEach((tabheaderItem, i) => {
      if (tabheaderItem == target) {
        hideContent();
        showContent(i);
      };
    });
  });

  
  const sliderPrev = document.querySelector('.offer__slider-prev'),
    sliderNext = document.querySelector('.offer__slider-next'),
    currentSlide = document.querySelector('#current'),
    totalSlideNumber = document.querySelector('#total'),
    slides = document.querySelectorAll('.offer__slide');

  function hideSlides() {
    slides.forEach(content => {
    content.style.display = "none";
    }); 
  };  
  hideSlides();

  totalSlideNumber.innerText = `0${slides.length}`;
  let slideIndex = 3;
  slides[slideIndex - 1].style.display = 'block';

  function changeSlide() {
    hideSlides();
    if (slideIndex < 1) {
      slideIndex = slides.length;
    };
    if (slideIndex > slides.length) {
      slideIndex = 1;
    };
    slides[slideIndex - 1].style.display = 'block';
    currentSlide.innerText = `0${slideIndex}`;
  };

  sliderPrev.addEventListener('click', () => {
    slideIndex = slideIndex - 1;
    changeSlide();
  });

  sliderNext.addEventListener('click', () => {
    slideIndex = slideIndex + 1;
    changeSlide();
  });


  const callButton1 = document.querySelector('.btn.btn_white'),
    callButton2 = document.querySelector('.btn.btn_dark'),
    modal = document.querySelector('.modal'),
    modalClose = document.querySelector('.modal__close');
  
  function showModal() {
    modal.style.display = 'block';
    document.body.classList.add('stopscroll');
  };

  function hideModal() {
    modal.style.display = 'none';
    document.body.classList.remove('stopscroll');
  };

  callButton1.addEventListener('click', () => {
    showModal();
  });

  callButton2.addEventListener('click', () => {
    showModal();
  });

  modalClose.addEventListener('click', () => {
    hideModal();
  });

  modal.addEventListener('click', (event) => {
    if (event.target == modal) {
      hideModal();
    };
  });

  window.addEventListener('keydown', (event) => {
    if (event.code == 'Escape') {
      hideModal();
    };
  });

  setTimeout(showModal, 3000);


  const submitButton = document.querySelector('.btn.btn_dark.btn_min');

  submitButton.addEventListener('click', () => {
    alert('Данные успешно отправлены!')
  })
  







})
