'use client';

import { useEffect, useMemo, useState } from "react";
import { useTheme } from 'next-themes';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; 

const ParticlesComponent = (props: { id: string | undefined; }) => {
  const { theme } = useTheme(); // Get current theme
  const [init, setInit] = useState(false);

  // Initialize the particles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Load the slim version of particles to optimize size
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Particle loaded callback
  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  // Define the particle options and set color based on theme
  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent", // Set background to transparent
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: theme === 'dark' ? '#ffffff' : '#000000', // Dynamic color based on theme
        },
        links: {
          color: theme === 'dark' ? "#ffffff" : "#000000", // Dynamic link color
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [theme], // Recalculate options when theme changes
  );

  if (init) {
    return (
      <Particles
        id={props.id}
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};

export default ParticlesComponent;
