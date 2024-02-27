const squaresDiv = document.querySelectorAll("div");

// create observer
const observer = new IntersectionObserver((squares) => {
  squares.forEach((square) => {
    if (square.isIntersecting) {
      square.target.classList.add("visible");
    } else {
      square.target.classList.remove("visible");
    }
  });
});

squaresDiv.forEach((squareDiv) => observer.observe(squareDiv));
