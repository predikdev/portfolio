const STAGGER_VISIBLE_CLASS = "stagger-visible";

const runStaggerAnimation = () => {
  const containers = document.querySelectorAll<HTMLElement>("[data-stagger]");

  containers.forEach((container) => {
    const children = container.querySelectorAll<HTMLElement>("[data-stagger-child]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          children.forEach((el, index) => {
            if (el.classList.contains(STAGGER_VISIBLE_CLASS)) {
              return;
            }

            el.style.animationDelay = `${index * 0.15}s`;
            const handleAnimationEnd = () => {
              el.classList.remove("animate-fade-up-blur");
              el.style.removeProperty("animationDelay");
              el.removeEventListener("animationend", handleAnimationEnd);
              el.classList.add(STAGGER_VISIBLE_CLASS);
            };
            el.addEventListener("animationend", handleAnimationEnd);
            el.classList.add("animate-fade-up-blur");
          });

          observer.unobserve(container);
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(container);
  });
};

document.addEventListener("astro:after-swap", runStaggerAnimation);
document.addEventListener("DOMContentLoaded", runStaggerAnimation);
