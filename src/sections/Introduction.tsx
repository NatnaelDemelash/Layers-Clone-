"use client";
import Tags from "@/components/Tags";
import { useScroll, useTransform } from "framer-motion";
import { span } from "framer-motion/client";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;
const words = text.split(" ");

export default function Introduction() {
  const scrollTarget = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"],
  });

  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    wordIndex.on("change", (latest) => {
      setCurrentWord(latest);
    });
  }, [wordIndex]);

  return (
    <section className="py-28 lg:py-40">
      <div className="container">
        <div className="sticky top-20 md:top-28 lg:top-40">
          <div className="text-center">
            <Tags>Introducing Layers</Tags>
          </div>
          <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
            <span>Your AI design partner designed for business</span>
            <div>
              <span>
                {words.map((word, wordIndex) => (
                  <span
                    key={wordIndex}
                    className={twMerge(
                      "text-white/15 transition duration-500",
                      wordIndex < currentWord && "text-white"
                    )}
                  >{`${word} `}</span>
                ))}
              </span>
            </div>
            <span className="text-lime-400 block mt-12 text-2xl md:text-4xl ">
              That&apos;s why we&apos;ve built Layer, an AI design tool
              that&apos;s easy to use, fast, and powerful.
            </span>
          </div>
        </div>

        <div className="h-[150vh]" ref={scrollTarget}></div>
      </div>
    </section>
  );
}
