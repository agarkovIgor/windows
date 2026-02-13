
//бургер-меню
const menuBtn = document.querySelector(".button-menu-open");
const menuClose = document.querySelector(".button-menu-close");
const backgroundMenu = document.querySelector(".background-menu-mobil");
const menu = document.querySelector(".header__nav");
const menuItems = document.querySelectorAll(".header__menu-item");

menuBtn.addEventListener('click', ()=> {
  menu.classList.add('menu--open');
  backgroundMenu.classList.add('open');
  
});
menuClose.addEventListener('click', ()=> {
  menu.classList.remove('menu--open');
  backgroundMenu.classList.remove('open');
});
backgroundMenu.addEventListener('click', ()=> {
  menu.classList.remove('menu--open');
  backgroundMenu.classList.remove('open');
});

menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        menu.classList.remove('menu--open');
        backgroundMenu.classList.remove('open');
    });
});


//окна табы
const tabsTitle = document.querySelectorAll('.tab__title');
const tabsContent = document.querySelectorAll('.tabs__content');


tabsTitle.forEach(item => item.addEventListener('click', event => {
  const tabsTitleTarget = event.target.getAttribute('data-tab');

  tabsTitle.forEach(element => element.classList.remove('active-tab'));
  tabsContent.forEach(element => element.classList.add('hidden-tab-content'));

  item.classList.add('active-tab');

  document.getElementById(tabsTitleTarget).classList.remove('hidden-tab-content');
}));



//модальные окна окна
let backgroundModal = document.querySelector('.background-menu-mobil');

let cardsWrapper = document.querySelectorAll('.tabs-items');


cardsWrapper.forEach (wrapper => wrapper.addEventListener('click', function(event) {
  let cardsClick = event.target.closest('.windows__option-1');
  let btn = cardsClick.querySelector('.card-details');
  
  if ((event.target.classList === btn.classList) || (event.target.classList.contains('details-arrow')) ) {
    let btnNumberModal = btn.dataset.modal;
    let btnNumberModalWrapper = btn.dataset.wrapperModal;
    let modalWrapper = document.querySelector('#' + btnNumberModalWrapper);
    let modal = modalWrapper.querySelector('#' + btnNumberModal);
    let modalButton = modal.querySelector('.button-order');

    backgroundModal.classList.add('visibility');
    modal.classList.add('visibility');
    

    let buttonCloseModal = modal.querySelector('.button-close-modal');
      buttonCloseModal.addEventListener('click', function() {
      backgroundModal.classList.remove('visibility');
      modal.classList.remove('visibility');
  });

  modalButton.addEventListener('click', function() {
      backgroundModal.classList.remove('visibility');
      modal.classList.remove('visibility');
    });

  backgroundModal.addEventListener('click', function() {
        console.log('close')
        backgroundModal.classList.remove('visibility');
        modal.classList.remove('visibility');
  })

  } else {
    return;
  }
}))



// табы профиль
const tabsDescriptionTitle = document.querySelectorAll('.description__title');
const tabsDescriptionCards = document.querySelectorAll('.description__card');

tabsDescriptionTitle.forEach(item => item.addEventListener('click', event => {
  const tabsTitleTarget = event.target.getAttribute('data-tab');

  tabsDescriptionTitle.forEach(element => element.classList.remove('title-active'));
  tabsDescriptionCards.forEach(element => element.classList.add('hidden-tab-content'));

  item.classList.add('title-active');

  document.getElementById(tabsTitleTarget).classList.remove('hidden-tab-content');
}));


//модальные окна двери
let backgroundDorModal = document.querySelector('.background-menu-mobil');
let doorsCards = document.querySelectorAll('.doors__option-1');
let doorsModalWrapper = document.querySelector('.window-door-1');

for(let card of doorsCards) {
  card.addEventListener('click', function(event) {
    if(event.target.classList.contains('details-arrow') || event.target.classList.contains('card-details')) {
      let btn = card.querySelector('.card-details');
      let btnNumberModal = btn.dataset.modal;
      let modal = doorsModalWrapper.querySelector('#' + btnNumberModal);
      let modalButton = modal.querySelector('.button-order');
     
      
      backgroundModal.classList.add('visibility');
      modal.classList.add('visibility');

      let buttonCloseModal = modal.querySelector('.button-close-modal');
      buttonCloseModal.addEventListener('click', function() {
      backgroundModal.classList.remove('visibility');
      modal.classList.remove('visibility');
    });

      modalButton.addEventListener('click', function() {
      backgroundModal.classList.remove('visibility');
      modal.classList.remove('visibility');
    });

    backgroundModal.addEventListener('click', function() {
        console.log('close')
        backgroundModal.classList.remove('visibility');
        modal.classList.remove('visibility');
    });

    } else {
    return;
    }
  })
}; 


//обратный отсчёт
let countdownDate = new Date('Jun 30, 2026 15:50:00').getTime();

function format(value) {
  return value < 10 ? '0' + value : value;
}

let interval = setInterval(() => {
  let now = new Date().getTime();
  let distance = countdownDate - now;

  if (distance <= 0) {  
    document.querySelector('.days').textContent = '00';
  document.querySelector('.hours').textContent = '00';
  document.querySelector('.minutes').textContent = '00';
  document.querySelector('.seconds').textContent = '00';

  document.querySelector('.days-text').textContent = 'days';
  document.querySelector('.hours-text').textContent = 'hours';
  document.querySelector('.minutes-text').textContent = 'minutes';
  document.querySelector('.seconds-text').textContent = 'seconds';

  clearInterval(interval);
  return;
  }

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector('.days').textContent = format(days);
  document.querySelector('.hours').textContent = format(hours);
  document.querySelector('.minutes').textContent = format(minutes);
  document.querySelector('.seconds').textContent = format(seconds);


}, 1000);


//accordion

let questionsIcons = document.querySelectorAll('.questions__icon');
let contentsItems = document.querySelectorAll('.question__content');
let accordionItemsWrapper = document.querySelectorAll('.question__accordion-item');
       
      
accordionItemsWrapper.forEach((el) => {

      contentsItems.forEach((el) => el.classList.remove('active-content'));
      let questionsItems = el.querySelector('.questions__item');
      
      contentsItems.forEach((el) => el.classList.remove('active-content'));

      el.addEventListener('click', (event) => {
        
        let contentsItem = el.querySelector('.question__content');
        
        if (event.target.classList.contains('questions__item') || event.  target.classList.contains('question__icon') || event.target.classList.contains('question')){
          contentsItems.forEach((elem) => elem.style.maxHeight = null);
          el.querySelector('.question__icon').classList.toggle('active-item');
          contentsItem.classList.toggle('active-content');
          //  contentsItems.forEach((el) => el.classList.remove('active-content'));
        }
        
      });
    });


     //появление эл-тов
        function onEntry(entry) {
            entry.forEach(change => {
                if (change.isIntersecting) {
                    change.target.classList.add('shadow-in');
                } 
                
            });
        }
        let options = {
            threshold: [0.5]
        };
        let optionsTwo = {
            threshold: [1]
        };
        let observer = new IntersectionObserver(onEntry, options);
        let observerTwo = new IntersectionObserver(onEntry, optionsTwo);
        let elementsWindows = document.querySelectorAll(".windows__option-1");
        let elementsDoors = document.querySelectorAll(".doors__option-1");
        let elementIcons = document.querySelectorAll(".card__subtitle-icon");
       

        for (let elm of elementsWindows) {
            observer.observe(elm);
        }

        for (let elm of elementsDoors) {
            observer.observe(elm);
        }

        // function onEntryTwo(entry) {
        //     entry.forEach(change => {
        //         if (change.isIntersecting) {
        //             change.target.classList.add('opacity-in');
        //         } 
                
        //     });
        // }

        for (let elm of elementIcons) {
            observerTwo.observe(elm);
        }
        
       


//form

const mailPath = './mail.php'

document.querySelectorAll('.uniForm').forEach( (e) => {

  e.addEventListener('submit', function(e) {

    let th      = this,
        params  = new FormData(this),
        request = new XMLHttpRequest()

    request.open('POST', mailPath, true)
    request.send(params)

    request.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        setTimeout(function() { th.reset() }, 1000)
        alert('Thank you!')
      } else {
        alert('Что-то пошло не так!')
      }
    }

    e.preventDefault()

  })

})
