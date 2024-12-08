import { gsap } from 'gsap';

export const fadeIn = (target) => {
  gsap.fromTo(
    target,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
  );
};

export const slideIn = (target, direction = 'left') => {
  const x = direction === 'left' ? -100 : 100;
  gsap.fromTo(
    target,
    { x, opacity: 0 },
    { x: 0, opacity: 1, duration: 1, ease: 'power3.out' }
  );
};
