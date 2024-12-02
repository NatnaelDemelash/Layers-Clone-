'use client';

import Button from '@/components/Buttont';
import designExample1Image from '../assets/images/design-example-1.png';
import designExample2Image from '../assets/images/design-example-2.png';
import Image from 'next/image';
import Pointer from '@/components/Pointer';
import cursorYouImage from '@/assets/images/cursor-you.svg';
import { motion, useAnimate } from 'framer-motion';
import { useEffect } from 'react';

export default function Hero() {
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();
  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  const [rightPointerScope, rightPointerAnimate] = useAnimate();

  useEffect(() => {
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
    ]);

    leftPointerAnimate([
      [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftPointerScope.current, { x: -100, y: 0 }, { duration: 0.5 }],
      [
        leftPointerScope.current,
        { x: 0, y: [0, 16, 0] },
        { duration: 0.5, ease: 'easeInOut' },
      ],
    ]);

    rightDesignAnimate([
      [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
      [rightDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
    ]);

    rightPointerAnimate([
      [
        rightPointerScope.current,
        { opacity: 1 },
        { duration: 0.5, delay: 1.5 },
      ],
      [rightPointerScope.current, { x: 175, y: 0 }, { duration: 0.5 }],
      [
        rightPointerScope.current,
        { x: 0, y: [0, 20, 0] },
        { duration: 0.5, ease: 'easeInOut' },
      ],
    ]);
  }, []);

  return (
    <section
      className="py-24 overflow-x-clip"
      style={{ cursor: `url(${cursorYouImage.src}), auto` }}
    >
      <div className="container relative">
        <motion.div
          ref={leftDesignScope}
          initial={{ opacity: 0, x: -100, y: 100 }}
          drag
          className="absolute top-14 -left-32 hidden lg:block"
        >
          <Image
            src={designExample1Image}
            alt="design example image 1"
            draggable={false}
          />
        </motion.div>
        <motion.div
          ref={leftPointerScope}
          initial={{ opacity: 0, x: -200, y: 100 }}
          className="absolute left-56 top-96 hidden lg:block"
        >
          <Pointer name="Andrea" color="red" />
        </motion.div>
        <motion.div
          ref={rightDesignScope}
          initial={{ opacity: 0, x: 100, y: 100 }}
          className="absolute -top-16 -right-64 hidden lg:block"
          drag
        >
          <Image
            src={designExample2Image}
            alt="design example image 2"
            draggable={false}
          />
        </motion.div>
        <motion.div
          ref={rightPointerScope}
          initial={{ opacity: 0, x: 275, y: 100 }}
          className="absolute right-80 -top-4 hidden lg:block"
        >
          <Pointer name="Bryan" />
        </motion.div>
        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-orange-400 text-neutral-950 rounded-full font-semibold">
            ✨$4.5M seed raised to launch
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-center mt-6">
          Impactful AI tools for your business, created by AI
        </h1>
        <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
          We are a team of AI experts and business professionals who are
          passionate about using AI to create impactful tools for businesses.
        </p>
        <form className="flex border border-white/15 p-2 rounded-full mt-8 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="bg-transparent px-4 md:flex-1 outline-none w-full"
          />
          <Button
            variant="primary"
            type="submit"
            className="whitespace-nowrap"
            size="sm"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
}
