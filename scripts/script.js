const btn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  btn.style.display = window.scrollY > 200 ? "block" : "none";
};

btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const toggleBtn = document.getElementById('darkToggle');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('modo-oscuro');
});
