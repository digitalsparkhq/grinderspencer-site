// Sticky Navbar effect
window.addEventListener("scroll", function() {
  const navbar = document.getElementById("mainNavbar");
  if (window.scrollY > 50) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});


// Counter effect
const counters = document.querySelectorAll('.counter');
const speed = 200;

const animateCounters = () => {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText.replace("+","");

      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target + "+";
      }
    };
    updateCount();
  });
};

let statsShown = false;
window.addEventListener('scroll', () => {
  const statsSection = document.querySelector('#stats');
  if (statsSection && !statsShown) {
    const sectionPos = statsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;
    if (sectionPos < screenPos) {
      animateCounters();
      statsShown = true;
    }
  }
});
