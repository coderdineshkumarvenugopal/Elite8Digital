import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ children, className = '', onClick }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const boundingRef = useRef<DOMRect | null>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const onMouseEnter = () => {
      boundingRef.current = button.getBoundingClientRect();
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!boundingRef.current) return;

      const { clientX, clientY } = e;
      const { left, top, width, height } = boundingRef.current;

      const x = (clientX - left) - width / 2;
      const y = (clientY - top) - height / 2;

      mousePosition.current = { x, y };

      gsap.to(button, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.2,
        ease: 'power2.out'
      });
    };

    const onMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)'
      });
      boundingRef.current = null;
    };

    button.addEventListener('mouseenter', onMouseEnter);
    button.addEventListener('mousemove', onMouseMove);
    button.addEventListener('mouseleave', onMouseLeave);

    return () => {
      button.removeEventListener('mouseenter', onMouseEnter);
      button.removeEventListener('mousemove', onMouseMove);
      button.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      className={`magnetic-button ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default MagneticButton;