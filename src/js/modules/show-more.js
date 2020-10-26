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