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
        // Matnni kichik harfga o'tkazib tekshiramiz (katta-kichik harf farq qilmasligi uchun)
        const text = button.textContent.trim().toLowerCase();

        if (text === "+") {
          count++;
        } else if (text === "-") {
          count--;
        } else if (text === "qaytarish" || text === "reset") {
          count = 0;
        }

        counterNumber.textContent = count;
      });
    });
  }

  // 3. TUGMALAR HODISASI
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

  // 4. FORMA YUBORILISHI
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Xabar yuborildi! Tez orada siz bilan bog'lanamiz.");
      contactForm.reset();
    });
  }
});
