  const hiddenNav = document.getElementById('hiddenNav');
  const subNav = document.getElementById('subNav');

  function toggleSidebar() {
    // hide hidden-nav, show sub-nav
    hiddenNav.style.display = 'none';
    subNav.classList.add('show');
  }

  function closeSubNav() {
    // hide sub-nav, show hidden-nav
    subNav.classList.remove('show');
    hiddenNav.style.display = 'flex';
  }

  // Optional: adjust when resizing window
  window.addEventListener('resize', () => {
    if (window.innerWidth > 800) {
      hiddenNav.style.display = 'none';
      subNav.style.display = 'none';
    } else {
      hiddenNav.style.display = 'flex';
    }
  });
