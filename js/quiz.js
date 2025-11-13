const answersStyle = document.querySelectorAll(".answer");

answersStyle.forEach(block => {
    block.addEventListener("click", function () {
        answersStyle.forEach(b => b.classList.remove("selected"));

        this.classList.add("selected");
    });
});

// кнопка submit (из HTML)
const submitBtn = document.querySelector('input[type="submit"]');

// обработка клика по кнопке submit
submitBtn.addEventListener("click", function () {

  const selected = document.querySelector(".answer.selected");

  if (!selected) {
    alert("Choose an answer!");
    return;
  }

  if (selected.id === "right") {
    alert("This is the correct answer!");
  } else {
    alert("Incorrect!");
  }
});
