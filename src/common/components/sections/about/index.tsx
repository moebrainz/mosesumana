'use client';

import portfolioImg from '@/../public/images/moe.jpg';
import SectionDivider from '@/common/components/shared/section-divider';
import SectionHeading from '@/common/components/shared/section-heading';
import { useSectionInView } from '@/common/lib/hooks';
import { smoothScrollTo } from '@/common/lib/utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

export default function About() {
  const { ref } = useSectionInView('about', 0.4);
  const divRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.section
      className="z-50 flex h-[1000px] w-full flex-col items-center justify-start leading-8 dark:bg-darkBg dark:text-white md:scroll-mt-4 lg:h-[1100px] lg:scroll-mt-24"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175, ease: 'easeInOut' }}
      id="about"
    >
      <div className="flex w-full flex-col items-center pt-8">
        <SectionHeading>About Me</SectionHeading>
        <motion.div
          className="w-full overflow-hidden px-4 py-12 sm:w-[60%] sm:text-center lg:h-[700px] lg:w-[1040px] xl:w-[1180px]"
          ref={divRef}
          style={{
            scale: scaleProgess,
            opacity: opacityProgess,
            willChange: 'transform, opacity',
            transform: 'translateZ(0)',
          }}
        >
          <div className="antialiased group relative w-full">
            <div className="text-md relative z-40 flex flex-col gap-3 font-semibold tracking-wide text-primary lg:absolute lg:right-0 lg:top-[27%] lg:block lg:max-w-[580px] lg:text-start lg:text-lg xl:top-1/3 xl:h-[442px] xl:max-w-[650px]">
              <div className="flex h-full flex-col justify-center gap-6">
                <span>
                  I&apos;m a Front-end developer with over three years of
                  professional experience in Web Development. I specialize on
                  TypeScript, React & Next.js etc,. Proven ability to deliver
                  user-centered web applications with a focus on intuitive
                  experiences and user interaction.
                </span>
                <span>
                  Looking forward to bring your ideas into reality with my
                  skills to create meaningful connections between products and
                  users. Checkout my projects to get i collaborated and
                  personally developed.
                </span>
                <p className="flex flex-col items-start sm:items-center lg:items-start">
                  <span>So if you are interested,</span>
                  <Link
                    href={'contact'}
                    onClick={(e) => {
                      smoothScrollTo({ e, id: 'contact' });
                    }}
                    className="w-52 lg:w-48 mt-6 lg:mt-4"
                  >
                    <span className="bg-[#00B8D9] p-3 rounded-lg text-2xl mt-2 font-bold uppercase dark:bg-[#00B8D9] lg:normal-case ">
                      Contact me!
                    </span>
                  </Link>
                </p>
              </div>
            </div>
            <div className="absolute z-30 hidden lg:left-0 lg:top-1/4 lg:block">
              <div className="relative h-72 w-72 lg:h-[480px] lg:w-[380px] xl:h-[470px] xl:w-[370px]">
                {/* <div className="absolute inset-0 z-20 rounded-full bg-gradient-to-b from-[#ffcbb4] via-[#e0afa0] to-[#e29578] transition-opacity group-hover:opacity-30" /> */}
                <div className="absolute inset-0">
                  <Image
                    src={portfolioImg}
                    alt="portfolio image"
                    placeholder="blur"
                    width={400}
                    height={500}
                    style={{ objectFit: 'cover' }}
                    className="z-10 rounded-full lg:h-[480px] -mt-7 lg:w-[380px] xl:h-[470px] xl:w-[370px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <SectionDivider />
    </motion.section>
  );
}
