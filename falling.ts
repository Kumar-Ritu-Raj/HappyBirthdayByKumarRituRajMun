      
      // --- End Falling Present Effect ---

      // --- Falling Candle Effect (JS) ---
      function createFallingCandle(speed = 2.2) {
        const candle = document.createElement('div');
        candle.className = 'falling-candle';
        const size = Math.random() * 8 + 18; // 18px to 26px
        candle.style.width = size + 'px';
        candle.style.height = (size * 2) + 'px';
        candle.style.left = Math.random() * 98 + 'vw';
        candle.style.opacity = (Math.random() * 0.5 + 0.7).toFixed(2);
        // Random color for candle body
        const colors = ['#fff', '#ffe066', '#ffb347', '#f67280', '#6c5ce7'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        candle.innerHTML = `<svg viewBox='0 0 16 32'><rect x='5' y='8' width='6' height='18' rx='2' fill='${color}'/><ellipse cx='8' cy='8' rx='3' ry='4' fill='#fff8dc'/><polygon points='8,0 10,8 6,8' fill='#ffd700'/></svg>`;
        document.body.appendChild(candle);
        const duration = (Math.random() * 1.5 + speed + 1.5); // 3.2s to 5.2s
        candle.animate([
          { transform: `translateY(0px)` },
          { transform: `translateY(${window.innerHeight + 40}px)` }
        ], {
          duration: duration * 1000,
          easing: 'linear',
          fill: 'forwards'
        });
        setTimeout(() => {
          candle.remove();
        }, duration * 1000);
      }
      setInterval(() => createFallingCandle(2.2), 2500); 
      setInterval(() => createFallingCandle(1.0), 6000); 
// --- End Falling Candle Effect ---
      

      // --- Falling Cupcake Effect (JS) ---
      function createFallingCupcake(speed = 2.5) {
        const cupcake = document.createElement('div');
        cupcake.className = 'falling-cupcake';
        const size = Math.random() * 14 + 22; // 22px to 36px
        cupcake.style.width = size + 'px';
        cupcake.style.height = size + 'px';
        cupcake.style.left = Math.random() * 98 + 'vw';
        cupcake.style.opacity = (Math.random() * 0.5 + 0.7).toFixed(2);
        // Random color for cupcake top
        const colors = ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff', '#ff9f40'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        cupcake.innerHTML = `<svg viewBox='0 0 32 32'><ellipse cx='16' cy='16' rx='14' ry='8' fill='${color}'/><rect x='6' y='16' width='20' height='10' rx='4' fill='#fff'/><rect x='10' y='22' width='12' height='6' rx='2' fill='#ffb347'/></svg>`;
        document.body.appendChild(cupcake);
        const duration = (Math.random() * 1.5 + speed + 1.5); // 3.5s to 5.5s
        cupcake.animate([
          { transform: `translateY(0px)` },
          { transform: `translateY(${window.innerHeight + 40}px)` }
        ], {
          duration: duration * 1000,
          easing: 'linear',
          fill: 'forwards'
        });
        setTimeout(() => {
          cupcake.remove();
        }, duration * 1000);
      }
      setInterval(() => createFallingCupcake(2.5), 3000); 
      setInterval(() => createFallingCupcake(1.0), 7000); 
// --- End Falling Cupcake Effect ---
      


