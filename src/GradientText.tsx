import { useEffect, useRef } from 'react';

interface GradientTextProps {
  colors: string[];
  animationSpeed?: number;
  showBorder?: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function GradientText({
  colors,
  animationSpeed = 3,
  showBorder = false,
  className = '',
  children
}: GradientTextProps) {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const colorStops = colors.map((color, index) => {
      const percentage = (index / (colors.length - 1)) * 100;
      return `${color} ${percentage}%`;
    }).join(', ');

    const gradientStyle = `linear-gradient(90deg, ${colorStops})`;

    textRef.current.style.backgroundImage = gradientStyle;
    textRef.current.style.backgroundSize = '200% auto';
    textRef.current.style.animation = `gradientShift ${animationSpeed}s ease infinite`;
    textRef.current.style.WebkitBackgroundClip = 'text';
    textRef.current.style.backgroundClip = 'text';
    textRef.current.style.WebkitTextFillColor = 'transparent';

    if (showBorder) {
      textRef.current.style.textShadow = `0 0 2px rgba(255,255,255,0.5)`;
    }
  }, [colors, animationSpeed, showBorder]);

  return (
    <span ref={textRef} className={className}>
      {children}
    </span>
  );
}
