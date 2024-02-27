const circle = document.getElementById("circle");

const observer = new IntersectionObserver(
  (items) => {
    const { isIntersecting } = items[0];

    if (isIntersecting) {
      console.log("Visible");
      observer.disconnect();
    } else {
      console.log("Not visible");
    }
  },
  {
    threshold: 0.5,
  }
);

observer.observe(circle);
