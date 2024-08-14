import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#00000", // Fundo das partículas
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false, // Desativar repulsão ao clicar
          },
          onHover: {
            enable: true,
            mode: "repulse", // Ativar repulsão ao passar o mouse
          },
        },
        modes: {
          repulse: {
            distance: 100, // Distância de repulsão ao passar o mouse
            duration: 0.4, // Duração do efeito de repulsão
          },
          grab: {
            distance: 10,
          },
        },
      },
      particles: {
        color: {
          value: "#FFFFFF", // Cor das partículas
        },
        links: {
          color: "#FFFFFF", // Cor das linhas que conectam as partículas
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 500, // Número de partículas
        },
        opacity: {
          value: 1.0,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 2 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default ParticlesComponent;