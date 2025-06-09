'use client';

import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';

export interface IRedoTextAnimationProps {
  delay: number;
}

export default function RedoTextAnimation({ delay }: IRedoTextAnimationProps) {
  const textIndex = useMotionValue(0);

  const texts = [
    'i’m a Frontend developer skilled in solving complex UI challenges',
    'Expert in turning designs into pixel-perfect, interactive experiences.',
    'Focused on clean, minimal, and user-friendly design principles.',
    'Strong debugging skills with a problem-solving mindset',
    'Responsive design expert—fluent across all screen sizes',
    'Experienced in refactoring and improving existing codebases',
    'Teamwork makes the dream work, let’s build something amazing together!',
    'Always learning—keeping up with modern frontend trends',
    'Writes clean, elegant, and maintainable code',
  ];

  const baseText = useTransform(textIndex, (latest) => texts[latest] || '');
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest),
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    animate(count, 60, {
      type: 'tween',
      delay: delay,
      duration: 3,
      ease: 'easeIn',
      repeat: Infinity,
      repeatType: 'reverse',
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.span className="h-32 max-w-96 px-1 py-3 bg-lightBeige text-[1.2rem] font-bold dark:bg-darkBeige md:text-[1.5rem] lg:text-[1.7rem]">
      {displayText}
    </motion.span>
  );
}
