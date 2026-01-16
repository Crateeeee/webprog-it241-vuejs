<script setup>
// No script needed for a static page
</script>

<template>
  <div id="app-container">
    <div class="bg-animation"></div>

    <nav class="navbar">
      <div class="logo">Portfolio</div>
      <ul class="nav-links">
        <li><a href="#" class="active">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#hub">Personal Hub</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div class="hamburger">☰</div>
    </nav>

    <section class="hero">
      <div class="hero-content">
        <h3>Hello, It's Me</h3>
        <h1>Your Name</h1>
        <h3>And I'm a <span class="typing-text">Web Developer</span></h3>
        <p>This is my professional introduction page built with Vue.js. Welcome to my personal space on the web.</p>
        
        <div class="social-icons">
          <a href="#"><i class='bx bxl-facebook'></i></a>
          <a href="#"><i class='bx bxl-twitter'></i></a>
          <a href="#"><i class='bx bxl-instagram'></i></a>
          <a href="#"><i class='bx bxl-linkedin'></i></a>
        </div>
        
        <a href="#" class="btn">Download CV</a>
      </div>

      <div class="hero-image">
        <img src="https://via.placeholder.com/450" alt="Profile Image">
      </div>
    </section>

    <section id="hub">
      <h2 class="heading">Personal <span>Hub</span></h2>
      <div class="hub-grid">
        <div class="hub-card">
          <div class="card-header">
            <div class="card-icon">🚀</div>
            <h3>My Projects</h3>
          </div>
          <p>Explore the various web development projects I've worked on recently.</p>
          <ul class="detail-list compact">
            <li><span>01</span> Vue.js Applications</li>
            <li><span>02</span> Responsive Design</li>
          </ul>
        </div>

        <div class="hub-card image-card">
          <div class="img-box">
            <img src="https://via.placeholder.com/300" alt="Experience">
          </div>
          <div class="text-box">
            <h3>IT Experience</h3>
            <p>I have experience working with modern web technologies and frameworks.</p>
          </div>
        </div>
      </div>
    </section>

    <footer>
      <p>© 2024 My Website | All Rights Reserved.</p>
    </footer>
  </div>
</template>

<style>
/* I have kept your exact CSS below */
:root {
    --bg-color: #081b29;
    --second-bg-color: #112e42;
    --text-color: #ededed;
    --main-color: #00abf0;
    --card-bg: rgba(255, 255, 255, 0.05);
    --card-hover-bg: rgba(255, 255, 255, 0.1);
    --border-color: rgba(255, 255, 255, 0.1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    scroll-behavior: smooth;
}

body {
    background: var(--bg-color);
    color: var(--text-color);
    overflow-x: hidden;
}

.bg-animation {
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
    z-index: -1;
}

.navbar {
    position: fixed; top: 0; width: 100%;
    padding: 1.5rem 10%;
    background: rgba(8, 27, 41, 0.8);
    backdrop-filter: blur(10px);
    display: flex; justify-content: space-between; align-items: center;
    z-index: 100;
    border-bottom: 1px solid var(--border-color);
}

.logo {
    font-size: 2rem; font-weight: 700; color: var(--main-color);
    text-shadow: 0 0 10px var(--main-color);
}

.nav-links { display: flex; list-style: none; gap: 2rem; }
.nav-links a {
    color: var(--text-color); font-size: 1.1rem; font-weight: 500;
    text-decoration: none; transition: 0.3s; position: relative;
}

.hero {
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
    padding-top: 80px;
    gap: 2rem;
}

.hero-content h1 {
    font-size: 4rem; font-weight: 700;
    background: linear-gradient(45deg, var(--main-color), #fff);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
}

.hero-image img {
    width: 400px; height: 400px;
    object-fit: cover; border-radius: 50%;
    border: 4px solid var(--main-color);
    box-shadow: 0 0 40px var(--main-color);
    animation: floatImage 4s ease-in-out infinite;
}

@keyframes floatImage {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}

.hub-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
}

.hub-card {
    background: var(--card-bg);
    backdrop-filter: blur(15px);
    border: 1px solid var(--border-color);
    border-radius: 20px;
    padding: 2rem;
}

.heading { text-align: center; font-size: 3rem; margin-bottom: 3rem; }
.heading span { color: var(--main-color); }

footer {
    padding: 2rem;
    text-align: center;
    background: var(--second-bg-color);
}
</style>