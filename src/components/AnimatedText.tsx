import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import SplitType from 'split-type';
import gsap from 'gsap';

interface AnimatedTextProps {
  text: string;
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '', tag: Tag = 'div' }) => {
  const textRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const splitText = new SplitType(textRef.current, {
      types: 'chars,words',
      tagName: 'span'
    });

    gsap.from(splitText.chars, {
      opacity: 0,
      y: 50,
      rotateX: -90,
      stagger: 0.02,
      duration: 0.8,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    return () => {
      splitText.revert();
    };
  }, [text]);

  return (
    <Tag ref={textRef} className={`relative overflow-hidden ${className}`}>
      {text}
    </Tag>
  );
};

export default AnimatedText;