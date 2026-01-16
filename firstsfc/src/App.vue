<template>
  <div id="app-container">
    
    <div id="image-modal" class="modal" @click.self="closeModal">
      <span class="close" @click="closeModal">&times;</span>
      <img class="modal-content" id="full-image" alt="Full view">
      <div id="caption"></div>
    </div>

    <div class="bg-animation"></div>

    <nav class="navbar">
      <div class="logo">CMP.</div>
      <ul class="nav-links" ref="navLinks">
        <li><a href="#home" class="active" @click="closeMenu">Home</a></li>
        <li><a href="#personal-hub" @click="closeMenu">My Hub</a></li>
        <li><a href="#gallery" @click="closeMenu">Gallery</a></li>
        <li><a href="#resources" @click="closeMenu">Resources</a></li>
      </ul>
      <div class="hamburger" @click="toggleMenu">
        <i class="fas fa-bars"></i>
      </div>
    </nav>

    <section id="home" class="hero">
      <div class="hero-content">
        <h3>Welcome to my world</h3>
        <h1>Crate Marshall Pinlac</h1>
        <h3>I am into <span class="typing-text">Web Development</span></h3>
        <p>A Web Programming student at Asia Pacific College. I build interactive experiences and solve problems with code.</p>
        
        <div class="social-icons">
          <a href="https://www.facebook.com/CrateeMarshall" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook"></i></a>
          <a href="https://www.youtube.com/@cratemarshall" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube"></i></a>
          <a href="https://www.linkedin.com/in/crate-marshall-pinlac-57572824a/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
          <a href="https://github.com/Crateeeee" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
        </div>

        <a href="#personal-hub" class="btn">Explore My Hub</a>
      </div>

      <div class="hero-image">
        <img src="https://scontent.fmnl13-4.fna.fbcdn.net/v/t39.30808-6/588499354_3260824137411823_7561699207407932475_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHWWQVAzKDVl2rBT8eppCib_ILmUwliMiT8guZTCWIyJEa1j9rKu6h_prpXXofCIoSFXjAgcaeoIS0IlTpqJtLm&_nc_ohc=GdBqKbbjVq0Q7kNvwFuSilV&_nc_oc=Adly6o5OcGezPLC2rYeazWSG_vi2tjeXEH8_Jtlji611E9sBIxPQaLnGxzIeykjgjOU&_nc_zt=23&_nc_ht=scontent.fmnl13-4.fna&_nc_gid=4lAK6RWKMBJeVl4FxNIRvw&oh=00_AfoSzSudI8jO2m8wbxYimCpqsxp0BFqgn4Fj52uX67nJxA&oe=697024DD" alt="Crate Marshall Pinlac">
    </div>
    </section>

    <section id="personal-hub">
      <div class="container">
        <h2 class="heading">Personal <span>Hub</span></h2>
        
        <div class="hub-grid">
          <div class="hub-card">
            <div class="card-header">
              <i class="fas fa-graduation-cap card-icon"></i>
              <h3>Education</h3>
            </div>
            <ul class="detail-list">
              <li><span>2023 - Present:</span> Asia Pacific College (BSIT)</li>
              <li><span>2021 - 2023:</span> Senior High School (STEM)</li>
              <li><span>Achievement:</span></li>
              <li>Integrated Attendance Facial Recognition System</li>
              <li>Email Cleaner Developer/Designer</li>
              <li>OutSystems Developer</li>
              <li>Scrum Foundation Certificate</li>
            </ul>
          </div>

          <div class="hub-card image-card">
            <div class="img-box">
              <img src="https://s3-ap-southeast-1.amazonaws.com/kalibrr-company-assets/logos/52GHMYQP6F32QUQU8FVE-58003a2b.png" alt="Course">
            </div>
            <div class="text-box">
              <div class="card-header">
                <i class="fas fa-book card-icon"></i>
                <h3>Course</h3>
              </div>
              <p>Bachelor of Science in Information Technology (BSIT).</p>
            </div>
          </div>

          <div class="hub-card image-card">
            <div class="img-box">
              <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=60" alt="IT Experience">
            </div>
            <div class="text-box">
              <div class="card-header">
                <i class="fas fa-laptop-code card-icon"></i>
                <h3>IT Experience</h3>
              </div>
              <ul class="detail-list compact">
                <li>HTML, CSS, JavaScript</li>
                <li>Python, Java</li>
                <li>VS Code, Git/GitHub</li>
              </ul>
            </div>
          </div>

          <div class="hub-card full-width">
            <div class="card-header center-header">
              <i class="fas fa-headset card-icon"></i>
              <h3>Hobbies & Interests</h3>
            </div>
            
            <div class="hobby-container">
              <div class="hobby-block">
                <img src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=500&q=60" alt="Music">
                <h4>My Music</h4>
                <p>Vibing to local scenes.</p>
                <div class="hobby-links">
                  <a href="#band">My Band <i class="fas fa-external-link-alt"></i></a>
                  <a href="#playlist">My Playlist <i class="fas fa-music"></i></a>
                </div>
              </div>

              <div class="hobby-block">
                <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=500&q=60" alt="Games">
                <h4>Games</h4>
                <p>Valorant, League of Legends, Genshin Impact.</p>
              </div>

              <div class="hobby-block">
                <img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=500&q=60" alt="Movies">
                <h4>Movies & Series</h4>
                <p>Sci-Fi, Thrillers, and Anime.</p>
              </div>
            </div>
          </div>

          <div class="hub-card full-width">
            <div class="card-header center-header">
              <i class="fas fa-rocket card-icon"></i>
              <h3>Goals & Dreams</h3>
            </div>
            <p style="text-align: center; max-width: 800px; margin: 0 auto;">
              To become a proficient Full-Stack Developer and contribute to innovative tech solutions that help society.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="gallery">
      <div class="container">
        <h2 class="heading">My <span>Gallery</span></h2>
        <p style="text-align: center; margin-bottom: 2rem; color: #ccc;">
          Click an image to view full screen.
        </p>
        
        <div class="gallery-container">
          <div class="gallery-item tilt-card" @mousemove="handleTilt" @mouseleave="resetTilt">
            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=500&q=60" alt="My Coding Setup" @click="openModal">
            <div class="overlay">
              <h4>Coding</h4>
              <p>My current setup</p>
            </div>
          </div>

          <div class="gallery-item tilt-card" @mousemove="handleTilt" @mouseleave="resetTilt">
            <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=500&q=60" alt="Relaxing Cat" @click="openModal">
            <div class="overlay">
              <h4>Chill Vibe</h4>
              <p>My cat companion</p>
            </div>
          </div>

          <div class="gallery-item tilt-card" @mousemove="handleTilt" @mouseleave="resetTilt">
            <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=500&q=60" alt="Late Night Work" @click="openModal">
            <div class="overlay">
              <h4>Grind</h4>
              <p>Late night coding session</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer style="text-align: center; padding: 2rem; color: #999; margin-top: 3rem; border-top: 1px solid var(--border-color);">
      <p>Copyright &copy; 2026 Crate Marshall Pinlac.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    // Toggle Mobile Menu
    toggleMenu() {
      // Access the UL via the 'ref' attribute defined in the template
      const navLinks = this.$refs.navLinks;
      if (navLinks) {
        navLinks.classList.toggle('active');
      }
    },
    // Close Mobile Menu (used when a link is clicked)
    closeMenu() {
      const navLinks = this.$refs.navLinks;
      if (navLinks) {
        navLinks.classList.remove('active');
      }
    },
    // Open Modal with clicked image
    openModal(event) {
      const modal = document.getElementById('image-modal');
      const modalImg = document.getElementById('full-image');
      
      if (modal && modalImg) {
        modal.style.display = 'flex';
        modalImg.src = event.target.src;
        document.body.style.overflow = 'hidden'; // Stop background scrolling
      }
    },
    // Close Modal
    closeModal() {
      const modal = document.getElementById('image-modal');
      if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
      }
    },
    // Tilt Effect Logic
    handleTilt(event) {
      const card = event.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Calculate rotation
      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    },
    // Reset Tilt when mouse leaves
    resetTilt(event) {
      event.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    }
  }
}
</script>

<style>
/* Font Imports */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

/* Variables */
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

/* Background Animation */
.bg-animation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  z-index: -1;
}

/* Navbar */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1.5rem 10%;
  background: rgba(8, 27, 41, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  border-bottom: 1px solid var(--border-color);
}

.logo {
  font-size: 2rem;
  font-weight: 700;
  color: var(--main-color);
  text-shadow: 0 0 10px var(--main-color);
  cursor: default;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-links a {
  color: var(--text-color);
  font-size: 1.1rem;
  font-weight: 500;
  text-decoration: none;
  transition: 0.3s;
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  background: var(--main-color);
  left: 0;
  bottom: -5px;
  transition: 0.3s;
}

.nav-links a:hover::after,
.nav-links a.active::after {
  width: 100%;
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--main-color);
}

.hamburger {
  display: none;
  font-size: 1.5rem;
  color: var(--text-color);
  cursor: pointer;
}

/* Hero Section */
.hero {
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  padding-top: 80px;
  gap: 2rem;
}

.hero-content {
  max-width: 600px;
  z-index: 1;
}

.hero-content h3 {
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 1rem;
}

.hero-content h1 {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, var(--main-color), #fff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.typing-text {
  color: var(--main-color);
  font-weight: 600;
}

.hero-content p {
  font-size: 1.2rem;
  line-height: 1.8;
  margin: 1.5rem 0;
  color: #ccc;
}

.social-icons {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.social-icons a {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  background: transparent;
  border: 2px solid var(--main-color);
  border-radius: 50%;
  font-size: 1.5rem;
  color: var(--main-color);
  text-decoration: none;
  transition: 0.3s;
}

.social-icons a:hover {
  background: var(--main-color);
  color: var(--bg-color);
  box-shadow: 0 0 15px var(--main-color);
  transform: translateY(-5px);
}

.btn {
  display: inline-block;
  padding: 1rem 2.5rem;
  background: var(--main-color);
  color: var(--bg-color);
  border-radius: 3rem;
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s;
  box-shadow: 0 0 20px var(--main-color);
}

.btn:hover {
  background: transparent;
  color: var(--main-color);
  border: 2px solid var(--main-color);
}

.hero-image {
  position: relative;
  width: 450px;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.hero-image img {
  width: 90%;
  height: 90%;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid var(--main-color);
  box-shadow: 0 0 40px var(--main-color);
  animation: floatImage 4s ease-in-out infinite;
  transition: 0.4s ease;
}

.hero-image img:hover {
  box-shadow: 0 0 80px var(--main-color);
  transform: scale(1.05);
}

@keyframes floatImage {
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
}

section {
  padding: 5rem 10%;
  min-height: 80vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.heading {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 3rem;
}

.heading span {
  color: var(--main-color);
}

/* Personal Hub Cards */
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
  transition: 0.4s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.hub-card:hover {
  transform: translateY(-5px);
  background: var(--card-hover-bg);
  border-color: var(--main-color);
  box-shadow: 0 10px 30px rgba(0, 171, 240, 0.1);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.card-header.center-header {
  justify-content: center;
}

.card-icon {
  font-size: 2rem;
  color: var(--main-color);
}

.hub-card h3 {
  font-size: 1.5rem;
  margin: 0;
}

.hub-card.image-card {
  flex-direction: row;
  padding: 0;
  align-items: stretch;
}

.img-box {
  flex: 2;
  min-height: 250px;
}

.img-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-right: 1px solid var(--border-color);
}

.text-box {
  flex: 3;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hub-card.full-width {
  grid-column: 1 / -1;
}

.hobby-container {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1rem;
}

.hobby-block {
  flex: 1;
  min-width: 250px;
  max-width: 350px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  transition: 0.3s;
  text-align: center;
  padding-bottom: 1.5rem;
}

.hobby-block:hover {
  border-color: var(--main-color);
  transform: translateY(-5px);
}

.hobby-block img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-bottom: 1px solid var(--border-color);
}

.hobby-block h4 {
  margin: 1rem 0 0.5rem;
  color: var(--main-color);
  font-size: 1.2rem;
}

.hobby-block p {
  color: #ccc;
  font-size: 0.95rem;
  padding: 0 1rem;
}

.hobby-links {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.hobby-links a {
  font-size: 0.9rem;
  color: var(--text-color);
  padding: 5px 15px;
  border: 1px solid var(--main-color);
  border-radius: 20px;
  transition: 0.3s;
  text-decoration: none;
}

.hobby-links a:hover {
  background: var(--main-color);
  color: var(--bg-color);
}

.detail-list {
  list-style: none;
  padding-left: 1rem;
}

.detail-list li {
  position: relative;
  margin: 15px 0;
  font-size: 1rem;
  color: #ddd;
}

.detail-list li::before {
  content: '▹';
  position: absolute;
  left: -1.5rem;
  color: var(--main-color);
  font-size: 1.2rem;
}

.detail-list.compact li {
  margin: 8px 0;
}

.detail-list span {
  color: var(--main-color);
  font-weight: 600;
  margin-right: 5px;
}

/* Gallery & Modal */
.gallery-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  cursor: pointer;
  border: 1px solid var(--border-color);
  height: 300px;
  transition: transform 0.3s ease;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.5s;
  display: block;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 8, 20, 0.9), transparent);
  padding: 2rem;
  transform: translateY(100%);
  transition: 0.3s;
  pointer-events: none;
}

.gallery-item:hover .overlay {
  transform: translateY(0);
}

.overlay h4 {
  font-size: 1.5rem;
  color: var(--main-color);
  margin-bottom: 0.5rem;
}

.overlay p {
  color: #ddd;
}

/* Modal CSS */
.modal {
  display: none;
  position: fixed;
  z-index: 1000;
  padding-top: 50px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(5px);
  animation: fadeInModal 0.3s ease;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 1000px;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 5px;
  box-shadow: 0 0 20px var(--main-color);
}

#caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 150px;
}

.close {
  position: absolute;
  top: 20px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
  cursor: pointer;
  z-index: 1001;
}

.close:hover,
.close:focus {
  color: var(--main-color);
  text-decoration: none;
  cursor: pointer;
}

@keyframes fadeInModal {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Responsive CSS */
@media (max-width: 991px) {
  .hero {
    padding: 0 5%;
    gap: 1rem;
  }
  .hero-image {
    width: 400px;
    height: 400px;
  }
}

@media (max-width: 768px) {
  .hamburger {
    display: block;
  }
  .nav-links {
    position: fixed;
    top: 80px;
    left: -100%;
    width: 100%;
    flex-direction: column;
    background: rgba(8, 27, 41, 0.95);
    backdrop-filter: blur(10px);
    padding: 2rem;
    transition: 0.3s;
  }
  .nav-links.active {
    left: 0;
  }
  .hero {
    flex-direction: column-reverse;
    padding-top: 100px;
    padding-bottom: 5rem;
    text-align: center;
    justify-content: center;
  }
  .hero-content h1 {
    font-size: 2.5rem;
    line-height: 1.2;
  }
  .hero-content h3 {
    font-size: 1.3rem;
  }
  .hero-content p {
    font-size: 1rem;
  }
  .hero-image {
    width: 300px;
    height: 300px;
    margin-bottom: 1rem;
  }
  .social-icons {
    justify-content: center;
  }
  section {
    padding: 3rem 5%;
  }
  .hub-card.image-card {
    flex-direction: column;
  }
  .img-box {
    min-height: 200px;
  }
  .img-box img {
    border-right: none;
    border-bottom: 1px solid var(--border-color);
  }
  .hobby-container {
    flex-direction: column;
    align-items: center;
  }
  .hobby-block {
    width: 100%;
    max-width: none;
  }
  .modal-content {
    width: 95%;
  }
}
</style>