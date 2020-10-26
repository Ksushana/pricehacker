(() => {
  const MOBILE = 767;
  const TABLET = 1023;

  window.isMobile = function () {
    return window.matchMedia(`(max-width: ${MOBILE}px)`).matches;
  };

  window.isTablet = function () {
    return window.matchMedia(`(max-width: ${TABLET}px)`).matches;
  };

  window.isDesktop = function () {
    return window.matchMedia(`(min-width: ${TABLET + 1}px)`).matches;
  };

  window.isMobileSafari = () => {
    const ua = window.navigator.userAgent;
    const iOS = !!ua.match(/iP(ad|od|hone)/i);
    const webkit = !!ua.match(/WebKit/i);
    return iOS && webkit && !ua.match(/CriOS/i) && !ua.match(/OPiOS/i);
  };
})();

(() => {
  let inputs = document.querySelectorAll(`input`);

  for (let input of inputs) {
    if (input.value.length) {
      input.classList.add(`filled`);
    }
  }

  const toggleInput = (evt) => {
    let input = evt.target;

    if (input.classList && input.classList.contains(`form__input`)) {
      if (input.value.length) {
        input.classList.add(`filled`);
      } else {
        input.classList.remove(`filled`);
      }
    }
  };


  document.addEventListener(`blur`, toggleInput, true);
  document.addEventListener(`input`, toggleInput, true);
})();

(() => {
  const questions = document.querySelectorAll(`.questions__list-item`);

  const btn = document.querySelector(`.questions__btn`);

  if (!btn) {
    return;
  }

  btn.addEventListener("click", function() {
    for (var i = 0; i < questions.length; i++) {
      question = questions[i];
      question.classList.add("show");
      btn.classList.add("hide");
    }
  });

})();