import { useEffect, useRef, useState } from 'react';
import './LightRays.css';

const LightRays = ({
  raysOrigin = "center",
  raysColor = "#00FFFF",
  raysSpeed = 1,
  lightSpread = 0.5,
  rayLength = 1,
  followMouse = false,
  mouseInfluence = 0.1,
  noiseAmount = 0.1,
  distortion = 0.05,
  className = ""
}) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [rays] = useState(() => {
    // Generate rays with different angles and properties
    const rayCount = 24;
    return Array.from({ length: rayCount }, (_, i) => ({
      angle: (i / rayCount) * Math.PI * 2,
      baseAngle: (i / rayCount) * Math.PI * 2,
      length: 0.8 + Math.random() * 0.4,
      speed: 0.5 + Math.random() * 0.5,
      opacity: 0.3 + Math.random() * 0.4,
      width: 1 + Math.random() * 2,
      offset: Math.random() * Math.PI * 2
    }));
  });

  // Convert raysOrigin to coordinates
  const getOriginCoordinates = (origin, width, height) => {
    const origins = {
      'center': [width / 2, height / 2],
      'top-center': [width / 2, height * 0.1],
      'bottom-center': [width / 2, height * 0.9],
      'left-center': [width * 0.1, height / 2],
      'right-center': [width * 0.9, height / 2],
      'top-left': [width * 0.1, height * 0.1],
      'top-right': [width * 0.9, height * 0.1],
      'bottom-left': [width * 0.1, height * 0.9],
      'bottom-right': [width * 0.9, height * 0.9]
    };
    return origins[origin] || origins['center'];
  };

  // Handle mouse movement
  useEffect(() => {
    if (!followMouse) return;

    const handleMouseMove = (e) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        mouseRef.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        };
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, [followMouse]);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let time = 0;

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const [originX, originY] = getOriginCoordinates(raysOrigin, canvas.width, canvas.height);
      
      // Apply mouse influence if enabled
      let adjustedOriginX = originX;
      let adjustedOriginY = originY;
      
      if (followMouse && mouseRef.current.x && mouseRef.current.y) {
        const mouseInfluenceX = (mouseRef.current.x - originX) * mouseInfluence;
        const mouseInfluenceY = (mouseRef.current.y - originY) * mouseInfluence;
        adjustedOriginX += mouseInfluenceX;
        adjustedOriginY += mouseInfluenceY;
      }

      // Draw rays
      rays.forEach((ray, index) => {
        const noiseX = Math.sin(time * 0.01 + ray.offset) * noiseAmount * 20;
        const noiseY = Math.cos(time * 0.01 + ray.offset) * noiseAmount * 20;
        
        const distortionAngle = Math.sin(time * 0.005 + index) * distortion;
        const currentAngle = ray.baseAngle + distortionAngle;
        
        const maxDistance = Math.max(canvas.width, canvas.height);
        const rayEndDistance = maxDistance * rayLength * ray.length * lightSpread;
        
        const endX = adjustedOriginX + Math.cos(currentAngle) * rayEndDistance + noiseX;
        const endY = adjustedOriginY + Math.sin(currentAngle) * rayEndDistance + noiseY;

        // Create gradient for the ray
        const gradient = ctx.createLinearGradient(
          adjustedOriginX, adjustedOriginY, endX, endY
        );
        
        const pulseOpacity = ray.opacity * (0.7 + 0.3 * Math.sin(time * 0.002 * raysSpeed + ray.offset));
        
        gradient.addColorStop(0, raysColor + '80'); // Start with some opacity
        gradient.addColorStop(0.3, raysColor + Math.floor(pulseOpacity * 255).toString(16).padStart(2, '0'));
        gradient.addColorStop(0.7, raysColor + '40'); // Fade in middle
        gradient.addColorStop(1, raysColor + '00'); // Fade to transparent

        ctx.strokeStyle = gradient;
        ctx.lineWidth = ray.width;
        ctx.lineCap = 'round';
        
        ctx.beginPath();
        ctx.moveTo(adjustedOriginX, adjustedOriginY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
      });

      time += raysSpeed;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [raysOrigin, raysColor, raysSpeed, lightSpread, rayLength, followMouse, mouseInfluence, noiseAmount, distortion, rays]);

  return (
    <div 
      ref={containerRef}
      className={`light-rays-container ${className}`}
      style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
    >
      <canvas 
        ref={canvasRef}
        className="light-rays-canvas"
        style={{ width: '100%', height: '100%', display: 'block' }}
      />
    </div>
  );
};

export default LightRays;