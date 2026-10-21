document.addEventListener("DOMContentLoaded", () => {
  //  BELGILAR SANOVCHI (about.html)
  const charTextarea = document.querySelector(".counter-textarea");
  const charCountNum = document.querySelector(".char-count-num");

  if (charTextarea && charCountNum) {
    charTextarea.addEventListener("input", (event) => {
      charCountNum.textContent = event.target.value.length;
    });
  }

  //  TUGMALAR HODISASI
  const allButtons = document.querySelectorAll(".btn-works, .nav-btn, button");
  allButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const buttonText = (button.textContent || button.value || "").trim();

      if (buttonText.includes("Meni yo'llang")) {
        alert("Aloqa bo'limiga o'tilmoqda...");
      } else if (buttonText.includes("Mening ishlarim")) {
        alert("Mening ishlarim bo'limiga o'tilmoqda...");
      }
    });
  });

  //  FORMA YUBORILISHI
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Xabar yuborildi! Tez orada siz bilan bog'lanamiz.");
      contactForm.reset();
    });
  }
});

// mini sanagich
document.addEventListener("DOMContentLoaded", () => {
  const counterNumber = document.querySelector(".homeCounterValue");
  const btnMinus = document.querySelector(".homeCounterBtnMinus");
  const btnReset = document.querySelector(".homeCounterBtnReset");
  const btnPlus = document.querySelector(".homeCounterBtnPlus");

  if (counterNumber && btnMinus && btnReset && btnPlus) {
    let count = parseInt(counterNumber.textContent) || 0;

    btnMinus.addEventListener("click", () => {
      count--;
      counterNumber.textContent = count;
    });

    btnReset.addEventListener("click", () => {
      count = 0;
      counterNumber.textContent = count;
    });

    btnPlus.addEventListener("click", () => {
      count++;
      counterNumber.textContent = count;
    });
  }

  const worksBtn = document.querySelector(".homeWorksBtn");
  if (worksBtn) {
    worksBtn.addEventListener("click", () => {
      alert("Mening ishlarim bo'limiga o'tilmoqda...");
    });
  }

  const hireBtn = document.querySelector(".homeHireBtn");
  if (hireBtn) {
    hireBtn.addEventListener("click", () => {});
  }
});
