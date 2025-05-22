import React, { useEffect, useRef } from 'react';
import { Zap } from 'lucide-react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    
    if (!cursor || !cursorDot) return;

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // Main cursor
      const mouseX = clientX - cursor.clientWidth / 2;
      const mouseY = clientY - cursor.clientHeight / 2;
      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      
      // Dot cursor (follows with slight delay)
      requestAnimationFrame(() => {
        const dotX = clientX - cursorDot.clientWidth / 2;
        const dotY = clientY - cursorDot.clientHeight / 2;
        cursorDot.style.transform = `translate(${dotX}px, ${dotY}px)`;
      });
    };

    const onMouseEnterLink = () => {
      cursor.classList.add('hovering');
    };

    const onMouseLeaveLink = () => {
      cursor.classList.remove('hovering');
    };

    document.addEventListener('mousemove', onMouseMove);

    const links = document.querySelectorAll('a, button, [role="button"]');
    links.forEach(link => {
      link.addEventListener('mouseenter', onMouseEnterLink);
      link.addEventListener('mouseleave', onMouseLeaveLink);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      links.forEach(link => {
        link.removeEventListener('mouseenter', onMouseEnterLink);
        link.removeEventListener('mouseleave', onMouseLeaveLink);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor">
        <Zap className="w-full h-full text-primary-500" />
      </div>
      <div ref={cursorDotRef} className="custom-cursor-dot"></div>
    </>
  );
};

export default CustomCursor;