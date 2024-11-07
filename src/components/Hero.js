import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const Particles = () => {
  const ref = React.useRef();
  const particleCount = 5000;

  // Create random positions for particles
  const particlesPosition = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount * 3; i++) {
    particlesPosition[i] = (Math.random() - 0.5) * 50; // Random position in a range
  }

  // Animation: Move particles to create a floating effect
  useFrame(() => {
    ref.current.rotation.y += 0.001; // Rotate the entire particle system
    ref.current.rotation.x += 0.0005;
  });

  return (
    <Points ref={ref} positions={particlesPosition}>
      <PointMaterial
        color="white"
        size={0.07}
        sizeAttenuation
        depthWrite={false}
        transparent
        opacity={0.7}
      />
    </Points>
  );
};

const Hero = () => {
  return (
    <div style={{ height: '100vh', width: '100%', position: 'relative', backgroundColor: '#000' }}>
      {/* 3D Canvas for Particle Animation */}
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <Particles />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>

      {/* Overlayed Text and Content */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          padding: '0 20px',
          color: 'white',
        }}
      >
        {/* Name */}
        <h1
          style={{
            fontSize: 'clamp(2rem, 10vw, 4rem)',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #00aaff, #ff66cc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: 'white',
            margin: '0',
          }}
        >
          Premchand
        </h1>

        {/* Title */}
        <h2
          style={{
            fontSize: 'clamp(1.2rem, 5vw, 2rem)',
            color: '#cccccc',
            marginTop: '10px',
            lineHeight: 1.4,
          }}
        >
          Creative Frontend Developer
        </h2>

        {/* Tagline */}
        <p
          style={{
            fontSize: 'clamp(1rem, 4vw, 1.5rem)',
            color: '#aaaaaa',
            marginTop: '10px',
            lineHeight: 1.4,
          }}
        >
          Building interactive and beautiful digital experiences.
        </p>

        {/* CTA Button */}
        <a
          href="#projects"
          style={{
            display: 'inline-block',
            marginTop: '30px',
            padding: '10px 20px',
            background: 'linear-gradient(45deg, #ff66cc, #00aaff)',
            color: 'white',
            textDecoration: 'none',
            fontWeight: 'bold',
            borderRadius: '5px',
            transition: 'transform 0.3s ease',
          }}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        >
          View My Projects
        </a>

        {/* Social Media Links */}
        <div style={{ marginTop: '20px' }}>
          <a href="https://www.linkedin.com" target="_blank" style={{ margin: '0 10px', color: 'white' }}>
            <i className="fa fa-linkedin" style={{ fontSize: '24px' }}></i>
          </a>
          <a href="https://github.com" target="_blank" style={{ margin: '0 10px', color: 'white' }}>
            <i className="fa fa-github" style={{ fontSize: '24px' }}></i>
          </a>
          <a href="https://twitter.com" target="_blank" style={{ margin: '0 10px', color: 'white' }}>
            <i className="fa fa-twitter" style={{ fontSize: '24px' }}></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
