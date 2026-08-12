import confetti from 'canvas-confetti';

export const triggerSuccessConfetti = () => {
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#0F4C25', '#10B981', '#F59E0B']
  });
};
