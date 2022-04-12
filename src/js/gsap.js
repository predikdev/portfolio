// gsap.from('.about__title', {
//   duration: 1,
//   opacity: 1,
//   scrollTrigger: {
//     trigger: '.about__title',
//     markers: true,
//     toggleActions: 'restart none none none',
//   },
//   x: 0,
// });

gsap.fromTo(
  '.about__title',
  {
    opacity: 0,
    scrollTrigger: {
      trigger: '.about__title',
      toggleActions: 'restart none none none',
    },
  },
  {
    opacity: 1,
    x: 0,
    duration: 0.7,
    delay: 0.5,
    scrollTrigger: {
      trigger: '.about__title',
      toggleActions: 'restart none none none',
    },
  }
);

gsap.fromTo(
  '.about__desc',
  {
    opacity: 0,
    scrollTrigger: {
      trigger: '.about__title',
      toggleActions: 'restart none none none',
    },
  },
  {
    opacity: 1,
    x: 0,
    duration: 0.7,
    delay: 0.5,
    scrollTrigger: {
      trigger: '.about__desc',
      toggleActions: 'restart none none none',
    },
  }
);

