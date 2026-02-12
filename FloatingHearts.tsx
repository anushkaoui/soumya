
import React, { useEffect, useState } from 'react';

const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<{ id: number; left: string; size: number; duration: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now(),
        left: `${Math.random() * 100}%`,
        size: Math.random() * (30 - 10) + 10,
        duration: Math.random() * (10 - 5) + 5,
      };
      setHearts(prev => [...prev.slice(-20), newHeart]);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="heart-particle absolute bottom-0"
          style={{
            left: heart.left,
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
          }}
        >
          {['❤️', '💖', '✨', '💃', '🩰'][Math.floor(Math.random() * 5)]}
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
