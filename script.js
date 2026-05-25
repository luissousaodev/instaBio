const root = document.documentElement;
let ticking = false;

function updateFloatingIcons() {
  const scrollY = window.scrollY;

  root.style.setProperty("--scroll-rise", `${scrollY * -0.055}px`);
  root.style.setProperty("--scroll-rise-soft", `${scrollY * -0.035}px`);
  root.style.setProperty("--scroll-sink", `${scrollY * 0.045}px`);
  root.style.setProperty("--scroll-sink-soft", `${scrollY * 0.04}px`);
  ticking = false;
}

window.addEventListener(
  "scroll",
  () => {
    if (!ticking) {
      window.requestAnimationFrame(updateFloatingIcons);
      ticking = true;
    }
  },
  { passive: true }
);

updateFloatingIcons();
