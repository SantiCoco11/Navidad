function startFireworks() {
    document.getElementById('fireworks').style.display = 'block';
    particlesJS('fireworks', {
      particles: {
        // Configuración de partículas
      },
      // Configuración adicional
    });
  
    // Detener la animación después de 5 segundos
    setTimeout(() => {
      document.getElementById('fireworks').style.display = 'none';
      particlesJS('fireworks', {}); // Detiene la animación
    }, 5000);
  }
  