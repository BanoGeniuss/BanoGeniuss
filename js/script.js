document.addEventListener("DOMContentLoaded", function () {
    const carouselItems = document.querySelectorAll(".carousel-item");
    const prevBtn = document.querySelector(".carousel-control-prev");
    const nextBtn = document.querySelector(".carousel-control-next");

    let currentIndex = 0;
    const interval = 4000; // Change slide every 5 seconds

    function showItem(index) {
      carouselItems.forEach(function (item) {
        item.classList.remove("active");
      });

      carouselItems[index].classList.add("active");
    }

    function nextSlide() {
      currentIndex++;

      if (currentIndex >= carouselItems.length) {
        currentIndex = 0;
      }

      showItem(currentIndex);
    }

    function startSlider() {
      setInterval(nextSlide, interval);
    }

    prevBtn.addEventListener("click", function (e) {
      e.preventDefault();

      currentIndex--;

      if (currentIndex < 0) {
        currentIndex = carouselItems.length - 1;
      }

      showItem(currentIndex);
    });

    nextBtn.addEventListener("click", function (e) {
      e.preventDefault();

      nextSlide();
    });

    startSlider();
  });
