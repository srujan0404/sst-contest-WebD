let currentIndex = 0;

function showSlide(index) {
  const container = document.querySelector(".carousel-inner");
  const slideWidth = document.querySelector(".testimonial").offsetWidth;
  container.style.transform = `translateX(-${index * slideWidth}px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % 3;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + 3) % 3;
  showSlide(currentIndex);
}

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".tab-button");
  const allImages = document.querySelectorAll(".portfolio-image");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      buttons.forEach((btn) => btn.classList.remove("tab-button-active"));
      this.classList.add("tab-button-active");

      const category = this.textContent.trim().toLowerCase();
      if (category === "all") {
        allImages.forEach((img) => (img.style.display = "block"));
      } else {
        allImages.forEach((img) => {
          img.style.display = img.classList.contains(category)
            ? "block"
            : "none";
        });
      }
    });
  });
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

