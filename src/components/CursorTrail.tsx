import { useEffect, useState } from 'react';

const CursorTrail = () => {
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let trailIndex = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateTrail = () => {
      setTrail(prevTrail => {
        const newTrail = [...prevTrail];
        
        // Add new trail point
        newTrail.push({
          x: mouseX,
          y: mouseY,
          id: trailIndex++
        });

        // Keep only last 10 points
        if (newTrail.length > 10) {
          newTrail.shift();
        }

        return newTrail;
      });

      requestAnimationFrame(animateTrail);
    };

    document.addEventListener('mousemove', handleMouseMove);
    const animation = requestAnimationFrame(animateTrail);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animation);
    };
  }, []);

  return (
    <>
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="cursor-trail"
          style={{
            left: point.x - 10,
            top: point.y - 10,
            opacity: (index + 1) / trail.length * 0.5,
            transform: `scale(${(index + 1) / trail.length})`,
            transition: 'opacity 0.3s ease, transform 0.3s ease',
          }}
        />
      ))}
    </>
  );
};

export default CursorTrail;
