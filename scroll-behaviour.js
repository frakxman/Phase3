const element = document.querySelector(".carousel-category__list");

      element.addEventListener('wheel', (event) => {
        event.preventDefault();

        element.scrollBy({
          left: event.deltaY < 0 ? -300 : 300,
        });
      });