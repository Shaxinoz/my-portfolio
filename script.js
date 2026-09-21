document.addEventListener("DOMContentLoaded", () => {
  // 1. BELGILAR SANOVCHI (about.html)
  const charTextarea = document.querySelector(".counter-textarea");
  const charCountNum = document.querySelector(".char-count-num");

  if (charTextarea && charCountNum) {
    charTextarea.addEventListener("input", (event) => {
      charCountNum.textContent = event.target.value.length;
    });
  }

  // 2. COUNTER (index.html)
  const counterNumber = document.querySelector(".counter-number");
  const counterButtons = document.querySelectorAll(".counter-buttons button");

  if (counterNumber && counterButtons.length > 0) {
    let count = parseInt(counterNumber.textContent) || 0;

    counterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const text = button.textContent.trim();

        if (text === "+") {
          count++;
        } else if (text === "-") {
          count--;
        } else if (text === "Qaytarish") {
          count = 0;
        }

        counterNumber.textContent = count;
      });
    });
  }
});
