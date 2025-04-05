// Este código es para el botón de "Scroll to Top"
const btn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  btn.style.display = window.scrollY > 200 ? "block" : "none";
};

btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


//Este código es para el botón de modo oscuro
const toggleBtn = document.getElementById('darkToggle');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('modo-oscuro');
});


// Este código es para el botón de perfil y el menú desplegable
const perfilBtn = document.getElementById('perfilBtn');
const menuPerfil = document.getElementById('menuPerfil');

perfilBtn.addEventListener('click', () => {
  menuPerfil.style.display = menuPerfil.style.display === 'block' ? 'none' : 'block';
});

// Opcional: Cierra el menú si haces clic fuera de él
document.addEventListener('click', (e) => {
  if (!perfilBtn.contains(e.target) && !menuPerfil.contains(e.target)) {
    menuPerfil.style.display = 'none';
  }
});