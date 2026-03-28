const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  },
);

reveals.forEach((section, index) => {
  if (index === 0) {
    section.classList.add("is-visible");
    return;
  }

  observer.observe(section);
});
