const SLIDE_UP_VISIBLE_CLASS = "slide-up-visible";

const runSlideUpAnimation = () => {
  const elements = document.querySelectorAll<HTMLElement>("[data-slide-up]");

  elements.forEach((element, index) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (element.classList.contains(SLIDE_UP_VISIBLE_CLASS)) return;

          element.style.animationDelay = `${index * 0.15}s`;

          const handleAnimationEnd = () => {
            element.classList.remove("animate-fade-up-blur");
            element.style.removeProperty("animationDelay");
            element.removeEventListener("animationend", handleAnimationEnd);
            element.classList.add(SLIDE_UP_VISIBLE_CLASS);
          };

          element.addEventListener("animationend", handleAnimationEnd);
          element.classList.add("animate-fade-up-blur");
          observer.unobserve(element);
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
  });
};

document.addEventListener("astro:after-swap", runSlideUpAnimation);
document.addEventListener("DOMContentLoaded", runSlideUpAnimation);
