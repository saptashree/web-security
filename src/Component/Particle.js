import React from 'react'
import Particles from "react-particles-js";
import classes from './particle.module.css';
function Particle() {
    return (
        <div>
            <Particles
        className={classes.home1}
        params={{
          particles: {
            number: {
              value: 150,
            },
            size: {
              value: 4,
            },
            color: {
              value: "#ffcccc",
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: {
                value: "#ff8080",
              },
              opacity: 0.4,
              width: 1,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
        height="100vh"
      />
        </div>
    )
}

export default Particle
